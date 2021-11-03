import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

//Utils
import validator from '../Utils/validator'

//Components
import Button from '../components/Button'

export default function RegisterForm({ id }) {
	const [name, setName] = useState('')
	const [cpf, setCpf] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')

	const router = useRouter()

	const labelClassname = "flex mb-2"
	const inputClassname = "w-full mb-3 "

	const handleMask = (event) => {
		const setter = {
			cpf: setCpf,
			phone: setPhone,
		}
		setter[event.target.id](validator.mask[event.target.id](event.target.value))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const name = event.target[0].value
		const email = event.target[3].value

		if (!validator.isValid.name(name)) return alert('Nome inválido')
		if (!validator.isValid.cpf(cpf)) return alert('CPF inválido')
		if (!validator.isValid.phone(phone)) return alert('Telefone inválido')
		if (!validator.isValid.email(email)) return alert('Email inválido')

		const userObject = {
			name,
			cpf,
			phone,
			email
		}

		const localStorage = window.localStorage
		const users = JSON.parse(localStorage.getItem('usersData'))

		if (id && users && users.length > 0) {
			users[id] = userObject
			localStorage.setItem('usersData', JSON.stringify(users))
		} else if (users && users.length > 0) localStorage.setItem('usersData', JSON.stringify([...users, userObject]))
		else localStorage.setItem('usersData', JSON.stringify([userObject]))

		router.push('/')
	}

	useEffect(() => {
		const localStorage = window.localStorage
		const users = JSON.parse(localStorage.getItem('usersData'))
		if (users && users.length > 0 && id) {
			setName(users[id].name)
			setCpf(users[id].cpf)
			setPhone(users[id].phone)
			setEmail(users[id].email)
		}
	}, [id])

	return (
		<form className="border-2 p-4 mb-6" onSubmit={handleSubmit}>
			<label className={labelClassname} htmlFor="name">Nome:</label>
			<input
				className={inputClassname}
				type="text"
				id="name"
				name="name"
				value={name}
				onChange={(event) => setName(event.target.value)}
				required />
			<br />
			<label className={labelClassname} htmlFor="cpf">Cpf:</label>
			<input
				className={inputClassname}
				id="cpf"
				name="cpf"
				value={cpf}
				onChange={handleMask}
				maxLength={14}
				required />
			<br />
			<label className={labelClassname} htmlFor="phone">Telefone:</label>
			<input
				className={inputClassname}
				id="phone"
				name="phone"
				value={phone}
				onChange={handleMask}
				required />
			<br />
			<label className={labelClassname} htmlFor="email">Email:</label>
			<input
				className={inputClassname}
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				required />
			<br />
			<Button classes="mt-6 md:w-1/2" type="submit">{id ? 'Salvar' : 'Registrar'}</Button>
		</form>
	)
}