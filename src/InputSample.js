import React, { useState } from "react";

const InputSample = () => {
    const defaultPerson = {
        name: "익명",
        nickname: "익명"
    }

    const [person, setPerson] = useState(defaultPerson)

    const {name, nickname} = person

    const onChange = (e) => {
        const {name, value} = e.target
        setPerson ({
            // spread 문법: 기존 객체를 펼쳐서 복사해줌
            // 기존 객체를 직접 수정하면 안 됨 ex) person[name]='newName'
            // 불변성을 지켜주어야 리액트 컴포넌트에서 상태가 업데이트 되었음을 감지할 수 있고 리렌더링 진행
            // 불변성을 지켜주어야 컴포넌트 업데이트 성능 최적화를 제대로 할 수 있음
            ...person,
            [name]: value,
        })
    }

    const onReset = (e) => {
        setPerson(defaultPerson)
    }

    return (
        <div>
            <input onChange={onChange} name="name" placeholder="이름" value={name}/>
            <input onChange={onChange} name="nickname" placeholder="닉네임" value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {person.name}({person.nickname})
            </div>
        </div>
    )
}

export default InputSample;