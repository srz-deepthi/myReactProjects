import { createStore , applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import  {rootSaga} from './rootSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleWare= createSagaMiddleware()

const store = createStore(
    rootReducer,applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(rootSaga)
export default store           