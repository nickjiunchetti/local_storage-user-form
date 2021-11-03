import Head from 'next/head'
import Link from 'next/link'

//Components
import { Container, Title } from '../../components/Page'
import RegisterForm from '../../components/RegisterForm'
import Button from '../../components/Button'

export default function RegisterUser() {

	return (
		<Container classes="flex flex-col w-full flex-1 text-center justify-between md:justify-start md:w-1/2 md:mx-auto">
			<Head>
				<title>Registrar Usuário</title>
			</Head>

			<Title>
				Registrar Usuário
			</Title>
			<RegisterForm />

			<Link href='/'>
				<a>
					<Button classes='md:w-1/2'>Ver Usuários</Button>
				</a>
			</Link>
		</Container>
	)
}
