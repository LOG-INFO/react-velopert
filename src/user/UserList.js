import React, { useContext, useEffect } from 'react'
import { UserDispatch } from './UserDashboard'

// https://react.vlpt.us/basic/11-render-array.html

const UserElement = React.memo(({ user }) => {
  const dispatch = useContext(UserDispatch)
  const { id, username, email, active } = user
  console.log('ID: ' + id)

  useEffect(() => {
    console.log('컴포넌트가 화면에 나타났거나 user 값이 변경됨')
    console.log(user)
    // cleanup 함수
    return () => {
      console.log('컴포넌트가 화면에서 사라졌거나 user가 바뀌기 전(?)')
      console.log(user)
    }
  }, [user])

  return (
    <div>
      <b
        style={{ cursor: 'pointer', color: active ? 'green' : 'red' }}
        onClick={() => dispatch({ type: 'TOGGLE_USER', toggledUserId: id })}
      >
        {username}
      </b>
      <span>({email})</span>
      <button
        onClick={() => dispatch({ type: 'DELETE_USER', deletedUserId: id })}
      >
        삭제
      </button>
    </div>
  )
})

const UserList = ({ users }) => {
  return (
    <div>
      {/* key가 없으면 경고메시지가 뜨면서, list의 index가 자동으로 삽입됨 <= 렌더링 효율성 이슈 */}
      {users.map((user) => (
        <UserElement key={user.id} user={user} />
      ))}
    </div>
  )
}

UserList.defaultProps = {
  users: [],
}

export default React.memo(UserList)
