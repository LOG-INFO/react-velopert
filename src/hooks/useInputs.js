import { useCallback, useReducer } from 'react'

function reduce(state, action) {
  switch (action.type) {
    case 'CHANGE':
      const { name, value } = action.change
      return { ...state, [name]: value }
    case 'RESET':
      return action.initialInputs
    default:
      return state
  }
}

function useInputs(initialInputs) {
  console.log('initialInputs: ' + JSON.stringify({ ...initialInputs }))
  const [state, dispatch] = useReducer(reduce, initialInputs)
  const onChange = useCallback((e) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE', change: { name, value } })
  }, [])
  const reset = useCallback(
    () => dispatch({ type: 'RESET', initialInputs: initialInputs }),
    [initialInputs],
  )
  console.log('state:' + JSON.stringify(state))
  return [state, onChange, reset]
}

export default useInputs
