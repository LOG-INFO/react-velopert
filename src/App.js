import Counter from './Counter'
import Hello from './Hello'
import Wrapper from './Wrapper'
import InputSample from './InputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'
import { useCallback, useMemo, useRef, useState } from 'react'

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...')
  return users.filter(user => user.active).length
}

const App = () => {
  const bye = "안녕히 계세요"
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
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

  const [users, setUsers] = useState(defaultUsers)

  const nextId = useRef(4)
  const defaultUser = {
    username: "익명",
    email: "@",
    active: false
  }
  const [user, setUser] = useState(defaultUser)
  const { username, email } = user;

  const onChange = useCallback( ({ target }) => {
    const newUser = {
      ...user,
      [target.name]: target.value
    }
    console.log(newUser)
    setUser(newUser)
  },[user])

  console.log(users)

  const onCreate = useCallback(() => {
    const newUser = {
      id: nextId.current++,
      username: username,
      email: email
    }
    console.log(newUser)
    // setUsers([...users, newUser])
    setUsers(users.concat(newUser))

    setUser(defaultUser)
  }, [users, username, email])

  const onDelete = useCallback ((userId) => {
    setUsers(users.filter(e => e.id !== userId))
  }, [users]);

  const onToggle = useCallback ((userId) => {
    setUsers(users.map(e => {
      return e.id === userId ? { ...e, active: !e.active } : e
    }))
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <h2>Array 렌더링</h2>
      <CreateUser user={user} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
      <hr />
      <h2>useRef</h2>
      <InputSample />
      <hr />
      <h2>useState</h2>
      <Counter />
      <hr />
      <h2>style, props</h2>
      <Wrapper>
        {/* isBold만 써주면 true로 간주 */}
        <Hello name="희찬" color="red" isBold />
        <Hello name="11" color="blue" isBold={true} />
        <Hello name="22" color="green" />
        <Hello />
        <Hello name="33" isBold={true} />
        <Hello color="green" isBold={true} />
        <div style={style}>{bye}</div>
      </Wrapper>

    </>
  )
}

export default App;
