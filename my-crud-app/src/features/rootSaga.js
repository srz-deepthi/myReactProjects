import { all } from "redux-saga/effects"
import  {watchUserContainer} from './redux/userSaga'

export function* rootSaga(){
    yield all([
        watchUserContainer(),
    ])
}