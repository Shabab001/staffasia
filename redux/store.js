import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./reducers/rootReducer"


const middleware= [thunk]
let composeEnhancers = null
if(process.env.NODE_ENV == 'development' ){
    composeEnhancers = composeWithDevTools( applyMiddleware(...middleware))

}
else{
    composeEnhancers =applyMiddleware(...middleware)
}

const store = createStore(rootReducer,composeEnhancers)

export default store;