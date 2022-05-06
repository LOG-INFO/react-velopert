import React, { useMemo, useReducer } from 'react'
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

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>
      <h2>Array 렌더링</h2>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  )
}

export const UserDispatch = React.createContext(null)
export default React.memo(UserDashboard)
