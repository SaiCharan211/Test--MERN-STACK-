import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [email,setEmail]=useState() 
    const [password,setPassword]=useState()    
    const [error,setError]=useState()  
    const navigate=useNavigate()

   const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3021/login',{email,password})
    .then(result=>{
        console.log(result)
        if(result.data==="Success"){
            navigate('/home')
        }else{
            setError(result.data)
        }
        
    })
    .catch(err=>console.log(err))
   }

    return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
       <div className="bg-white p-3 rounded w-25">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>

            <div className="m-3">
                <label htmlFor="email"> <strong>E-mail</strong></label>
                <input type="email"  className="form-control  "
                name="email" placeholder="Enter Email"
                onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="m-3 ">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password"  className="form-control " 
                name="password" placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)} />
                
            </div>
            <button type="submit" className="btn btn-success w-100 ">Login</button>
        </form>
        
            <p> New User</p>
            <Link to='/' className="btn btn-default border w-100 ">Register</Link>
            
            
        <p className="p1">{error}</p>
       </div>
    </div>
    </div>
  )
}

export default Signup