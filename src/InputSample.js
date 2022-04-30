import React, { useRef, useState } from "react";

const InputSample = () => {
    const defaultPerson = {
        name: "익명",
        nickname: "익명"
    }

    const [person, setPerson] = useState(defaultPerson)
    const nameInput = useRef() // Ref 객체 생성 - current라는 하나의 property를 갖는 객체

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
        // Q. focus 말고 뭐가 있을까?
        // <input>
        // - dom.cuurent.focusTextInput
        // - dom.cuurent.disabled = false
        // - dom.cuurent.value = ""
        // <audio>
        // - dom.current.play()
        // - dom.current.pause()
        // - 
        // - 
        nameInput.current.focus();
    }

    // ref: 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있음
    // - 특정 엘리먼트의 크기를 가져와야 한다던지
    // - 스크롤바 위치를 가져오거나 설정해야 된다던지
    // - 포커스를 설정해줘야 된다던지
    // - D3, chart.js 같은 외부 라이브러리를 사용해야 할 때에도 특정 DOM 에다 적용하기 때문에 DOM 을 선택해야 함
    // 함수형에서는 'useRef'라는 Hook 함수를 사용함

    return (
        <div>
            <input onChange={onChange} name="name" placeholder="이름" value={name} ref={nameInput} /*원하는 DOM에 Ref 할당*/ />
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