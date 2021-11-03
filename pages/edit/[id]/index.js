import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

//Components
import { Container, Title } from '../../../components/Page'
import RegisterForm from '../../../components/RegisterForm'
import Button from '../../../components/Button'

export default function EditUser() {
	const router = useRouter()

	const { id } = router.query

	return (
		<Container classes="flex flex-col w-full flex-1 text-center justify-between md:justify-start">
			<Head>
				<title>Editar Usuário</title>
			</Head>

			<Title>
				Editar Usuário {id}
			</Title>
			<RegisterForm id={id} />
			<Link href='/'>
				<a>
					<Button classes='w-1/2'>Ver Usuários</Button>
				</a>
			</Link>
		</Container>
	)
}
