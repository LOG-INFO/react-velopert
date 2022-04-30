import React from "react";

// https://react.vlpt.us/basic/11-render-array.html

const users = [
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

const UserElement = ({ user }) => {
    const { id, username, email } = user
    return (
        <div>
            <b>{username}</b> <span>({email})</span> 
        </div>
    )
}

const UserList = () => {
    return (
        <div >
            {/* key가 없으면 경고메시지가 뜨면서, list의 index가 자동으로 삽입됨 <= 렌더링 효율성 이슈 */}
            {users.map(user => (<UserElement key={user.id} user={user}/> ))}
        </div>
    )
}

export default UserList;