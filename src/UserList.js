import React from "react";

// https://react.vlpt.us/basic/11-render-array.html

const UserElement = ({ user }) => {
    const { id, username, email } = user
    return (
        <div>
            <b>{username}</b> <span>({email})</span> 
        </div>
    )
}

const UserList = ({users}) => {
    return (
        <div >
            {/* key가 없으면 경고메시지가 뜨면서, list의 index가 자동으로 삽입됨 <= 렌더링 효율성 이슈 */}
            {users.map(user => (<UserElement key={user.id} user={user}/> ))}
        </div>
    )
}

UserList.defaultProps = {
    users: []
}

export default UserList;