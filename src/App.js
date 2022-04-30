import Counter from './Counter'
import Hello from './Hello'
import Wrapper from './Wrapper'
import InputSample from './InputSample'
import UserList from './UserList'

const App = () => {
  const bye = "안녕히 계세요"
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
    <h2>Array 렌더링</h2>
    <UserList />
    <hr />
    <h2>useRef</h2>
    <InputSample/>
    <hr/>
    <h2>useState</h2>
    <Counter/>
    <hr/>
    <h2>style, props</h2>
    <Wrapper>
      {/* isBold만 써주면 true로 간주 */}
      <Hello name="희찬" color="red" isBold/>
      <Hello name="11" color="blue" isBold={true} />
      <Hello name="22" color="green" />
      <Hello />
      <Hello name="33" isBold={true}  />
      <Hello  color="green" isBold={true} />
      <div style={style}>{bye}</div>
    </Wrapper> 
    </>
  )
}

export default App;
