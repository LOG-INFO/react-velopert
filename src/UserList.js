import React, { useEffect } from "react";

// https://react.vlpt.us/basic/11-render-array.html

const UserElement = ({ user, onDelete, onToggle }) => {
    const { id, username, email, active } = user

    useEffect(
        ()=> {
            console.log('컴포넌트가 화면에 나타났거나 user 값이 변경됨')
            console.log(user)
            // cleanup 함수
            return () => {
                console.log('컴포넌트가 화면에서 사라졌거나 user가 바뀌기 전(?)')
                console.log(user)
            }
        }, [user]
    )

    return (
        <div>
            <b style={{ cursor: 'pointer', color: active ? "green" : "red" }} onClick={() => onToggle(id)}>{username}</b>
            <span>({email})</span>
            <button onClick={() => onDelete(id)}>삭제</button>
        </div>
    )
}

const UserList = ({ users, onDelete, onToggle }) => {
    return (
        <div >
            {/* key가 없으면 경고메시지가 뜨면서, list의 index가 자동으로 삽입됨 <= 렌더링 효율성 이슈 */}
            {users.map(user => (<UserElement key={user.id} user={user} onDelete={onDelete} onToggle={onToggle} />))}
        </div>
    )
}

UserList.defaultProps = {
    users: []
}

export default UserList;