import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import Spinner from './Spinner'

import { useUser } from '../features/authentication/useUser'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  // we are only allowed to use `navigate` inside some other function like in callback or in useEffect. Not at the to level of the component.
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser()

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login')
    },
    [isAuthenticated, isLoading, navigate]
  )

  // 3. While loadin, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )
  //4. If there IS a user, render the app
  if (isAuthenticated) return children
}

export default ProtectedRoute
