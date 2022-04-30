import React from "react";

// https://react.vlpt.us/basic/11-render-array.html

const UserElement = ({ user, onDelete, onToggle }) => {
    const { id, username, email, active } = user

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