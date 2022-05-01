# React란

[Document](https://reactjs.org/)

> A JavaScript library for building user interfaces
> UI를 생성하기 위한 JavaScript 라이브러리

## 특징

### '컴포넌트' 기반

### 한 번 배워서, 어디든 써먹는다?

대충 웹페이지 뿐만 아니라 모바일 등에서 쓸 수 있다는 뜻인 듯

### Single Web Page 

- index.html밖에 없음
- 알아서(?) 업데이트 해주는 것
- Virtual DOM을 이용해 매번 싹 다 날리고 싹 다 다시 생성
  - Virtual DOM: 메모리에 가상으로 존재하는 DOM
  - JS객체기 때문에 실제 DOM보여주는 속도보다 훨씬 빠름
  - State가 업데이트 되면, 업데이트가 필요한 곳의 UI를 Virtual DOM을 통해 렌더링
    - 실제 DOM과 비교해서 차이가 있는 곳을 감지한 후 실제 DOM에 패치시켜줌

### 선언적

React를 사용하면 반응형 UI를 쉽게 만들 수 있다. 애플리케이션의 각 상태에 대한 간단한 View를 디자인하면 데이터가 변경될 때 React가 효율적으로 올바른 컴포넌트를 업데이트하고 렌더링한다

## 컴포넌트 구현 방식 (class vs functional)

- 요즘은 functional 방식을 많이 쓴다고 한다
- functional 방식
  - 함수명 반드시 대문자 (소문자시작은 html 태그, 대문자시작은 custom 태그)
  - 더 간결하고 가독성있음
  - Hooks
  - Props를 받을 수 있다
    - `Element(props){console.log(props.myProp)}`
    - `<Element myProp="Hello"/>`
  - Prop vs State
    - Prop: 컴포넌트를 사용하는 외부자를 위한 데이터
    - State: 컴포넌트를 만드는 내부자를 위한 데이터
- class 방식

# Next.js

[Document](https://nextjs.org/)

> The React Framework for Production
> 프로덕션을 위한 React의 프레임워크

> Next.js gives you the best developer experience with all the features you need for production: hybrid static & sserver rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
> Next.js는 프로덕션을 위해 당신이 필요로 하는 모든 기능들을 통해 최고의 개발자 경험을 제공한다. 설정은 필요 없다.

## 특징

### Image Optimization

### i18m Routing

# TypeScript

[Document](https://www.typescriptlang.org/)

> TypeScript is JavaScript with syntax for types

# Hooks

Hook은 Class Component에서만 쓸 수 있었던 `State`와 `Life Cycle` 기능을 Functional Component에서도 사용할 수 있도록 해주는 기능이다.

## 왜 필요한가?

- 함수형 컴포넌트들은 기본적으로 리렌더링이 될때, 함수 안에 작성된 모든 코드가 다시 실행됨
- 이는 함수형 컴포넌트들이 기존에 가지고 있던 상태(state)를 전혀 관리(기억)할 수 없게 만듦
- Hook의 등장으로, 브라우저에 메모리를 할당 함으로써, 함수형 컴포넌트가 상태(state)를 가질 수 있게 함

단, Hook은 브라우저의 메모리 자원을 사용하기에 함부로 남발하면 오히려 성능저하를 불러올 수 있다.

## 종류

### useState

### useEffect

## 명령어
### 프로젝트 생성
$ npx create-react-app .

### 실행
$ npm start

### 빌드
$ npm run build

### 빌드 결과물 실행
serve -s build
(serve: 웹서버, -s: 사용자가 어떤 경로로 들어오든 index.html을 반환)

## Tag

- display
  - inline: 딱 content 감쌀만큼의 크기만 차지 (default)
  - block: 한 줄 전부 차지함
  - inline-block: 한 줄 전부 차지하지 않고, 크기 지정 가능
  - none: 보여지지 않음. 공간을 차지하지 않음


## 상태 관리 도구(State Management Tools)
### props drilling 문제
- 컴포넌트 A -> B -> C -> D가 있을 때 A에서 관리하는 상태를 D가 써야한다면 B, C, D를 거쳐 받아야한다.

### 자식 Component간 메시지 전달이 불가능하다

### 해결
- 전역 상태 저장소를 제공한다
  - redux
  - recoil
  - context-api

## npm trends
- NPM 모듈들의 트렌드릴 관리해준다

## yarn
요즘은 성능 등의 문제로 npm 대신 yarn을 쓰는 것 같다