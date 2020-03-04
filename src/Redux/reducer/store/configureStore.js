import { compose, applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'

export default (rootReducer) => {
  let enhancers = []
  let middleware = []

  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

  // add our normal middleware to the list
  enhancers.push(applyMiddleware(...middleware))

  // a function which can create our store and auto-persist the data
  const store = createStore(rootReducer, applyMiddleware(thunk), composeEnhancers(...enhancers))

  return { store }
}
