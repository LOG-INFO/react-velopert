import Counter from './Counter'
import Hello from './Hello'
import Wrapper from './Wrapper'
import InputSample from './InputSample'
import UserDashboard from './user/UserDashboard'
import Button from './components/Button'

const App = () => {
  return (
    <>
      <UserDashboard />
      <InputSample />
      <Counter />
      <Wrapper>
        {/* isBold만 써주면 true로 간주 */}
        <Hello name="희찬" color="red" isBold />
        <Hello name="11" color="blue" isBold={true} />
        <Hello name="22" color="green" />
        <Hello />
        <Hello name="33" isBold={true} />
        <Hello color="green" isBold={true} />
        <div style={style}>{bye}</div>
      </Wrapper>
      <div className="buttons">
        <Button size="large">Button1</Button>
        <Button size="medium">Button2</Button>
        <Button size="small">Button3</Button>
      </div>
    </>
  )
}

const bye = '안녕히 계세요'
const style = {
  backgroundColor: 'black',
  color: 'aqua',
  fontSize: 24,
  padding: '1rem',
}

export default App
