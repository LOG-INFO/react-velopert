import React from "react";

const CreateUser = ({ user, onChange, onCreate }) => {
    return (
        <>
            <form onSubmit={(event)=> {event.preventDefault(); onCreate(event)}}>
                <input name="username" placeholder="계정명" value={user.username} onChange={onChange}></input>
                <input name="email" placeholder="이메일" value={user.email} onChange={onChange}></input>
                <input type="submit" value="생성"></input>
            </form>
        </>
    )
}

export default React.memo(CreateUser)