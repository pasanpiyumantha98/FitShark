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




function Signup()
{
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
               <form action="/action_page.php">
 <div className="form-group row">
  <div className="col-md-6">
    <label htmlFor="firstName">First Name</label>
    <input type="text" className="form-control" placeholder="Enter first name" id="firstName" />
  </div>
  <div className="col-md-6">
    <label htmlFor="lastName">Last Name</label>
    <input type="text" className="form-control" placeholder="Enter last name" id="lastName" />
  </div>
</div>

<div className="form-group">
  <label htmlFor="email">Email address</label>
  <input type="email" className="form-control" placeholder="Enter email" id="email" />
</div>

<div className="form-group">
  <label htmlFor="password">Password</label>
  <input type="password" className="form-control" placeholder="Enter password" id="password" />
</div>



<div className="form-group">
  <label htmlFor="gender">Gender</label>
  <select className="form-control" id="gender">
    <option value="">Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>
 
  <button type="submit" class="btn btn-danger">Sign Up</button>
</form>
                </div> 
            </div>
        </div>
    </div>



        </>
    )
}
export default Signup