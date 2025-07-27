import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.css"
import "../assets/css/templatemo-training-studio.css"
import "../assets/js/jquery-2.1.0.min.js"
//import "../assets/js/popper.js"
import "../assets/js/bootstrap.min.js"
import "../assets/js/scrollreveal.min.js"
//import "../assets/js/waypoints.min.js"
import "../assets/js/jquery.counterup.min.js"
import "../assets/js/imgfix.min.js"
import "../assets/js/mixitup.js"
import "../assets/js/accordions.js"
import "../assets/js/custom.js"
import video from "../assets/images/gym-video.mp4"
import Navbar2 from "../components/navbar1.jsx"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";




function Signup()

{

  const navigate = useNavigate()

const [fname,setFname] = useState("")
const [lname,setLname] = useState("")
const [email,setEmail] = useState("")
const [pass,setPass] = useState("")
const [gender,setGender] = useState("")


async function submitreg(e)
{   
    e.preventDefault();
    
    if(gender==="")
    {
        alert("Please Fill all the detailes!")
    } else 
    {

        const response = await axios.post('http://localhost:8080/api/user/signup',{firstName:fname,lastName:lname,email:email,password:pass,gender:gender})
        
        if(response.data==="Done")
        {
            navigate('/login')
        } else 
        {
            toast.error("Reg failed")
        }


    }
   
}




    return (


        



        <>

      
    <div id="js-preloader" class="js-preloader">
      <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
   
    
    <Navbar2/>
    
  
    
    <div class="main-banner" id="top">
        <video autoplay muted loop id="bg-video">
            <source src={video} type="video/mp4" />
        </video>
        <br></br>
        <div class="video-overlay header-text">
            <div class="caption1">
               
                <div class="jumbotron rounded">
                
                <h1>Join Us</h1>
                <br></br>
               <form >
 <div className="form-group row">
  <div className="col-md-6">
    <label htmlFor="firstName">First Name</label>
    <input type="text" className="form-control" placeholder="Enter first name" id="firstName" value={fname} onChange={e=>setFname(e.target.value)} required/>
  </div>
  <div className="col-md-6">
    <label htmlFor="lastName">Last Name</label>
    <input type="text" className="form-control" placeholder="Enter last name" id="lastName" value={lname} onChange={e=>setLname(e.target.value)} required/>
  </div>
</div>

<div className="form-group">
  <label htmlFor="email">Email address</label>
  <input type="email" className="form-control" placeholder="Enter email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
</div>

<div className="form-group">
  <label htmlFor="password">Password</label>
  <input type="password" className="form-control" placeholder="Enter password" id="password" value={pass} onChange={e=>setPass(e.target.value)} required/>
</div>



<div className="form-group">
  <label htmlFor="gender">Gender</label>
  <select className="form-control" id="gender" onChange={e=>setGender(e.target.value)} value={gender} required>
     <option value="select" >Select</option>
    <option value="male" >Male</option>
    <option value="female" >Female</option>
    <option value="other" >Other</option>
  </select>
</div>
 
  <button type="submit" class="btn btn-danger" onClick={submitreg}>Sign Up</button>
</form>
                </div> 
            </div>
        </div>
    </div>



        </>
    )
}
export default Signup