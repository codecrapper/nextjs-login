import fetch from 'node-fetch'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

const userInitialState = {
  loading: false,
  userData: null
}

// REDUCERS
// export const reducer = (state = exampleInitialState, action) => {
//   switch (action.type) {
//     case actionTypes.TICK:
//       return Object.assign({}, state, {
//         lastUpdate: action.ts,
//         light: !!action.light
//       })
//     case actionTypes.INCREMENT:
//       return Object.assign({}, state, {
//         count: state.count + 1
//       })
//     case actionTypes.DECREMENT:
//       return Object.assign({}, state, {
//         count: state.count - 1
//       })
//     case actionTypes.RESET:
//       return Object.assign({}, state, {
//         count: exampleInitialState.count
//       })
//     default:
//       return state
//   }
// }

export const reducer = (state = userInitialState, action) => {
  switch(action.type) {
    case 'FETCH_USER_DATA':
      return {
        ...state,
        userData: action.payload
      }
      case 'START_FETCHING':
        return {
          ...state,
          loading: true
        }
      case 'FINISH_FETCHING':
        return {
          ...state,
          loading: false
        }
      case 'USER_LOG_OUT':
        return {
          ...state,
          userData: null
        }
    default: 
      return state
  }
}

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
  return setInterval(() => {
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

// fetch user data action
export const fetchUserData = () => async dispatch => {
  dispatch(startFetching())
  let res = await fetch(`https://api.scrapethis.io/crapper/`)
  let data = await res.json()
  dispatch(finishFetching())

  return dispatch({ type: 'FETCH_USER_DATA', payload: data})
}

export const startFetching = () => {
  return { type: 'START_FETCHING' }
}

export const finishFetching = () => {
  return { type: 'FINISH_FETCHING' }
}

export const userLogOut = () => dispatch => {
  return dispatch({ type: 'USER_LOG_OUT' })
}

// export function initializeStore (initialState = exampleInitialState) {
//   return createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   )
// }

export function initializeStore (initialState = userInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
