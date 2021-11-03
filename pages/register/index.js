import Head from 'next/head'
import Link from 'next/link'

//Components
import { Container, Title } from '../../components/Page'
import RegisterForm from '../../components/RegisterForm'
import Button from '../../components/Button'

export default function RegisterUser() {

	return (
		<Container classes="flex flex-col w-full flex-1 text-center justify-between md:justify-start">
			<Head>
				<title>Registrar Usuário</title>
			</Head>

			<div className="md:w-1/2 mx-auto">
				<Title>
					Registrar Usuário
				</Title>
				<RegisterForm />
				<Link href='/'>
					<a>
						<Button classes='w-1/2'>Ver Usuários</Button>
					</a>
				</Link>
			</div>
		</Container>
	)
}
