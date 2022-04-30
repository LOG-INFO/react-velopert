import Counter from './Counter'
import Hello from './Hello'
import Wrapper from './Wrapper'
import InputSample from './InputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'
import { useRef, useState } from 'react'

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
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const [users, setUsers] = useState(defaultUsers)

  const nextId = useRef(4)
  const defaultUser = {
    username: "익명",
    email: "-",
  }
  const [user, setUser] = useState(defaultUser)
  const onChange = ({ target }) => {
    const newUser = {
      ...user,
      [target.name]: target.value
    }
    console.log(newUser)
    setUser(newUser)
  }

  console.log(users)

  const onCreate = () => {
    const newUser = {
      id: nextId.current++,
      username: user.username,
      email: user.email
    }
    console.log(newUser)
    // setUsers([...users, newUser])
    setUsers(users.concat(newUser))

    setUser(defaultUser)
  }

  const onDelete = (userId) => {
    setUsers(users.filter(e => e.id !== userId))
  }

  return (
    <>
      <h2>Array 렌더링</h2>
      <UserList users={users} onDelete={onDelete} />
      <CreateUser user={user} onChange={onChange} onCreate={onCreate} />
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
