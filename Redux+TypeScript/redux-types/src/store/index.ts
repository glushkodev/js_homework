import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './reducers'

// @ts-ignore
export const store = createStore(
rootReducer,
composeWithDevTools(applyMiddleware(thunk))
)