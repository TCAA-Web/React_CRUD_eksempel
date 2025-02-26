import { Typography } from '@mui/material'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Form } from '../components/Form'
import { postLogin } from '../api/postLogin'

export const LoginPage = () => {
  // Bruger data states som lever i UserContext
  const { setUserData, userData } = useContext(UserContext)

  // Strukturen på login formen i et array, som sendes ind form komponentet
  const loginForm = [
    { label: 'Email', name: 'username', id: 'username-field' },
    { label: 'Password', name: 'password', id: 'password-field' },
  ]

  return (
    <div>
      {userData && (
        <Typography variant='h3'>Velkommen {userData.firstname}</Typography>
      )}
      <Form
        formAction={() => postLogin(event, setUserData)}
        formArray={loginForm}
        formTitle={'Login'}
      />
    </div>
  )
}
