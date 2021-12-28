import { call,put,takeEvery } from 'redux-saga/effects'; //take
import axios from 'axios';
import { POST_USER_INFO , POST_USER_INFO_SUCCESS,GET_USER_INFO,GET_USER_INFO_SUCCESS,DELETE_USER_INFO,UPDATE_USER_INFO} from './userTypes'
// import { all } from "redux-saga/effects"

//------------------------------------------------------------------------------------------------POST
function* putUserSaga(action){
    try{
        const udata = action.payload;
        //console.log("user saga :",udata);
        const res = yield call(axios.post,"http://localhost:8000/user",udata); //"https://jsonplaceholder.typicode.com/users"
        //console.log("response :",res.data);
        yield put({type:POST_USER_INFO_SUCCESS,response : res.data});
      }
      catch (e) { console.log('error',e) }
}

//--------------------------------------------------------------------------------------------------GET
function fectchUserData() {
  // alert("get saga")
  return axios({
      method: 'get',
      url: 'http://localhost:8000/user'
  })
}
function* getUserSaga(){
  const response =yield call(fectchUserData);
  // console.log("...saga",response.data);
  yield put({
      type:GET_USER_INFO_SUCCESS,
      userInfo: response.data
  });
}
//--------------------------------------------------------------------------------------------------DELETE
function* deleteUserSaga(action){
  alert("inside delete")
  try{
      const deldata = action.payload;
      //console.log("Delete saga :",deldata.id,deldata.name);
      const res = yield call(axios.delete,"http://localhost:8000/user/"+deldata.id); 
      //console.log("delete response :",res.data);
      yield put({type:GET_USER_INFO});
    }
    catch (e) { console.log('error',e) }
}
//--------------------------------------------------------------------------------------------------UPDATE/PUT
function* updateUserSaga(action){
  try{
      const putdata = action.payload;
      //console.log("Update saga :",putdata.id);
      const res = yield call(axios.put,"http://localhost:8000/user/"+putdata.id,putdata); 
      //console.log("update response :",res.data);
      yield put({type:GET_USER_INFO});
    }
    catch (e) { console.log('error',e) }
}
//--------------------------------------------------------------------------------------------------WATCH
export function* watchUserContainer(){
        yield takeEvery(POST_USER_INFO,putUserSaga);
        yield takeEvery(GET_USER_INFO,getUserSaga);
        yield takeEvery(DELETE_USER_INFO,deleteUserSaga);
        yield takeEvery(UPDATE_USER_INFO,updateUserSaga);

}

