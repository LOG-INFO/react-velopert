import React, { useCallback, useMemo, useReducer, useRef } from 'react'
import useInputs from '../hooks/useInputs'
import CreateUser from './CreateUser'
import UserList from './UserList'

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...')
  return users.filter((user) => user.active).length
}

function reduce(state, action) {
  const { type } = action
  const { users } = state
  switch (type) {
    case 'CREATE_USER':
      const { newUser, resetInput } = action
      resetInput()
      return {
        users: users.concat(newUser),
      }
    case 'DELETE_USER':
      const { deletedUserId } = action
      return {
        users: users.filter((e) => e.id !== deletedUserId),
      }
    case 'TOGGLE_USER':
      const { toggledUserId } = action
      return {
        users: users.map((user) => {
          if (user.id === toggledUserId) {
            return { ...user, active: !user.active }
          }
          return user
        }),
      }
    default:
      return state
  }
}

const defaultUsers = [
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com',
    active: true,
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com',
    active: false,
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com',
    active: true,
  },
]

function UserDashboard() {
  const [state, dispatch] = useReducer(reduce, { users: defaultUsers })
  const { users } = state
  const nextId = useRef(4)
  const count = useMemo(() => countActiveUsers(users), [users])

  const [inputs, onChange, reset] = useInputs({
    username: 'test',
    email: 'test@test.test',
  })
  const resetInput = reset
  console.log(
    'inputs: ' + JSON.stringify(useInputs({ username: '', email: '' })),
  )
  const inputUserName = inputs.username
  const inputEmail = inputs.email

  const onCreate = useCallback(() => {
    const newUser = {
      id: nextId.current++,
      username: inputUserName,
      email: inputEmail,
      active: false,
    }
    dispatch({ type: 'CREATE_USER', newUser: newUser, resetInput: resetInput })
  }, [inputUserName, inputEmail, resetInput])

  const onDelete = useCallback((userId) => {
    dispatch({ type: 'DELETE_USER', deletedUserId: userId })
  }, [])

  const onToggle = useCallback((userId) => {
    dispatch({ type: 'TOGGLE_USER', toggledUserId: userId })
  }, [])

  return (
    <>
      <h2>Array 렌더링</h2>
      <CreateUser user={inputs} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default React.memo(UserDashboard)
