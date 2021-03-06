import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import customer from './customer'
import singleCustomer from './singleCustomer'
import businesses from './business/getBusiness'
import businessCreate from './business/createBusiness'
import subscription from './business/subscription'
import business from './business/singleBusiness'
import businessUpdate from './business/updateBusiness'

const reducer = combineReducers({
  user,
  customer,
  business,
  businessCreate,
  subscription,
  singleCustomer,
  businesses,
  businessUpdate
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
