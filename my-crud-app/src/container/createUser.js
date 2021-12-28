import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addUser } from '../features/redux/userAction' //, changeUser
import { useNavigate } from 'react-router';

import './user.css'

const CreateUser = (props) => {
    
    console.log("type:",props.type)
    let navigate = useNavigate();

    const [user,setUser]=useState({
        name:" ",
        //age:"",
        email:""
    })
    
    
    const handleSubmit=() =>{
        // e.preventDefault()
        // props.changeUser() 
        navigate('/')        
    }
    const handleC=(e)=>{
        const name=e.target.name
        setUser(
            {
                ...user,
                [name]:e.target.value
            }
        )
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form_group row">
                        <label className="col-sm-2">Name</label>
                        <div className="col-sm-10">
                            <input type="text" name="name" value={user.name} onChange={handleC} required/>
                        </div>
                    </div>
                    <div className="form_group row">
                        <label className="col-sm-2">Email</label>
                        <div className="col-sm-10">
                            <input type="email" name="email" value={user.email} onChange={handleC}/>
                        </div>
                    </div>   
                    <div className="container-fluid">
                        <div className="form_group row">
                            <button id="write" onClick={()=>props.addUser(user)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="aIcon" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                        </button>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>
{
    return{
        type:state.userReducer.type,
        user: state.userReducer.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addUser: (user)=>dispatch(addUser(user)),
        // changeUser: ()=>dispatch(changeUser())
    }
}
export default connect(
                mapStateToProps,
                mapDispatchToProps
            )(CreateUser)
