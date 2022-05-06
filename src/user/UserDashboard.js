import React, { useCallback, useMemo, useReducer, useRef } from 'react'
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...')
  console.log(JSON.stringify(users))
  return users.filter(user => user.active).length
}

const defaultUser = {
    username: "익명",
    email: "@",
    active: false
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
    }
  ];

function UserDashboard() {
    const [state, dispatch] = useReducer(reduce, { user: defaultUser, users: defaultUsers })
    const { users, user } = state
    const nextId = useRef(4)
    const { username, email } = user;
    const count = useMemo(() => countActiveUsers(users), [users]);
  
    function reduce(state, action) {
      const { type } = action
      const { user, users } = state
      switch (type) {
        case 'CHANGE_INPUT':
          const { name, value } = action
          return {
            user: {
              ...state.user,
              [name]: value
            },
            users: users,
          }
        case 'CREATE_USER':
          const {newUser} = action
          return {
            user: defaultUser,
            users: users.concat(newUser),
          }
        case 'DELETE_USER':
          const { deletedUserId } = action
          return {
            user: user,
            users: users.filter(e => e.id !== deletedUserId)
          }
        case 'TOGGLE_USER':
          const { toggledUserId } = action
          console.log('toggledUserId: ' + toggledUserId)
          return {
            user: user,
            users: users.map((user) => {
              if (user.id == toggledUserId) {
                return { ...user, active: !user.active }
              }
              return user
            })
          }
      }
      return state
    }
  
    const onChange = useCallback(({ target }) => {
      const { name, value } = target
      dispatch({ type: 'CHANGE_INPUT', name: name, value: value })
    }, [])
  
  
    const onCreate = useCallback(() => {
      const newUser = {
        id: nextId.current++,
        username: username,
        email: email,
        active: false,
      }
      dispatch({ type: 'CREATE_USER', newUser: newUser })
    }, [username, email])
  
    const onDelete = useCallback((userId) => {
      dispatch({ type: 'DELETE_USER', deletedUserId: userId })
    }, []);
  
    const onToggle = useCallback((userId) => {
      dispatch({ type: 'TOGGLE_USER', toggledUserId: userId })
    }, []);

    return (
        <>
            <h2>Array 렌더링</h2>
            <CreateUser user={user} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
            <div>활성 사용자 수: {count}</div>
        </>
    )
}

export default React.memo(UserDashboard)