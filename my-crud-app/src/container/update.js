import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { updateUser} from '../features/redux/userAction'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router';

const Update = (props) => {

    const updateUser=useLocation()
    const {user} =updateUser.state
    let navigate = useNavigate();
    
    const [udata,setUpdate]=useState({
        name:user.name,
        email:user.email,
        id:user.id
    })
    
    const handleSubmit=() =>{
        navigate('/')        
    }
    const handleC=(e)=>{
        const name=e.target.name
        setUpdate
        (
            {
                ...udata,
                [name]:e.target.value
            }
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <div className="form_group row">
                        <label className="col-sm-2">Name</label>
                        <div className="col-sm-10">
                            <input type="text" name="name" value={udata.name} onChange={handleC}/> 
                        </div>
                    </div>
                    <div className="form_group row">
                        <label className="col-sm-2">Email</label>
                        <div className="col-sm-10">
                            <input type="email" name="email" value={udata.email} onChange={handleC}/>  
                        </div>
                    </div>   
                    <div className="container-fluid">
                        <div className="form_group row">
                            <button id="write" onClick={()=>props.updateUser(udata)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="uIcon" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            </button>
                        </div>
                    </div> 
                </form>
        </div>
    )
}

const mapStateToProps=(state)=>
{
    return{
        type:state.userReducer.type,
        //user: state.userReducer.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updateUser: (udata)=>dispatch(updateUser(udata)),
    }   
}
export default connect(
                mapStateToProps,
                mapDispatchToProps
            )(Update)
