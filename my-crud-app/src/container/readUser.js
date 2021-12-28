import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getUser,deleteUser} from '../features/redux/userAction'
import { Link } from "react-router-dom";
import './readUser.css'

export const ReadUser = (props) => {

    useEffect(() => {

        props.getUser() 
        //Runs only on the first render
      },[]);


      return (
        <div>
            <div>
                <h1>CUSTOMER MANAGEMENT PORTAL</h1>
                {/* <button id="read" onClick={ props.getUser}>Click Here</button> */}
            </div>
            <div>
                <table>
                    <thead>
                       
                            <tr id="title">
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>DELETE</th>
                            <th>EDIT</th>
                            </tr>
                        
                    </thead>
                    <tbody>
                        {props.user.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td><button id="read" onClick={()=>props.deleteUser(item)}>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                        </button> </td>
                                    <td><button id="read">
                                        <Link to='/update'
                                            state={{user:item}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </Link>
                                    </button></td>
                                </tr>
                            )
                            })}
                    </tbody>

                </table>
                <br/>
            </div>    
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user, 
    //userp: state.userReducer.userpost, //state.ReducerName.stateName
    type:state.userReducer.type
})

const mapDispatchToProps =dispatch => {
    return{
        getUser: ()=> dispatch(getUser()),
        deleteUser: (item) => dispatch(deleteUser(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadUser)
