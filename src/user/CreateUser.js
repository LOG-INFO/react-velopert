import React, { useContext, useRef } from 'react'
import useInputs from '../hooks/useInputs'
import { UserDispatch } from './UserDashboard'

const CreateUser = ({ user }) => {
  const nextId = useRef(4)

  const [inputs, onChange, reset] = useInputs({
    username: 'test',
    email: 'test@test.test',
  })

  console.log(
    'inputs: ' + JSON.stringify(useInputs({ username: '', email: '' })),
  )
  const inputUserName = inputs.username
  const inputEmail = inputs.email
  const resetInput = reset

  const dispatch = useContext(UserDispatch)
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          //   onCreate(event)
          const newUser = {
            id: nextId.current++,
            username: inputUserName,
            email: inputEmail,
            active: false,
          }
          dispatch({
            type: 'CREATE_USER',
            newUser: newUser,
            resetInput: resetInput,
          })
        }}
      >
        <input
          name="username"
          placeholder="계정명"
          value={inputUserName}
          onChange={onChange}
        ></input>
        <input
          name="email"
          placeholder="이메일"
          value={inputEmail}
          onChange={onChange}
        ></input>
        <input type="submit" value="생성"></input>
      </form>
    </>
  )
}

export default React.memo(CreateUser)
