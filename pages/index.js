import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

//Components
import { Container, Title } from '../components/Page'
import Button from '../components/Button'
import { IoMail } from 'react-icons/io5'
import { AiOutlineClose, AiFillEdit } from 'react-icons/ai'

export default function Home() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState()
  const [users, setUsers] = useState([])

  const deleteUser = (index) => {
    const localStorage = window.localStorage
    const usersData = JSON.parse(localStorage.getItem('usersData'))
    const newData = usersData.filter((user, i) => i !== index)
    localStorage.setItem('usersData', JSON.stringify(newData))
    setUsers(newData)
  }

  useEffect(() => {
    const localStorage = window.localStorage
    const usersData = JSON.parse(localStorage.getItem('usersData'))
    if (usersData && usersData.length > 0) setUsers(usersData)
  }, [])

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <Container classes="flex flex-col items-center flex-1 text-center justify-between md:justify-start">
      <Head>
        <title>Leo Frontend</title>
      </Head>

      <div className='w-full'>
        <Title>Usuários Registrados</Title>
        {users && users.length > 0 ?
          <table className='mt-6 w-full border-2'>
            <thead>
              <tr>
                <th>Nome</th>
                <th className='hidden md:table-cell'>CPF</th>
                <th className='hidden md:table-cell'>Telefone</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) =>
                <tr className={`${index % 2 === 0 && 'bg-gray-300'}`} key={index}>
                  <td>{user.name}</td>
                  <td className='hidden md:table-cell'>{user.cpf}</td>
                  <td className='hidden md:table-cell'>{user.phone}</td>
                  <td>
                    {isMobile ? <IoMail className='w-full h-5' /> : user.email}</td>
                  <td className='flex'>
                    <AiFillEdit onClick={() => router.push(`/edit/${index}`)} className='w-full h-5' />
                    <AiOutlineClose onClick={() => deleteUser(index)} className='w-full h-5' />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          :
          <Link href='/register'>
            <a>
              <p className="text-xl mt-5">
                Nenhum usuário registrado
              </p>
              <p> Clique aqui para cadastrar um usuário</p>
            </a>
          </Link>
        }
      </div>
      <Link href='/register'>
        <a className='w-full md:w-1/3 mt-20'>
          <Button>Registrar Usuário</Button>
        </a>
      </Link>
    </Container>
  )
}
