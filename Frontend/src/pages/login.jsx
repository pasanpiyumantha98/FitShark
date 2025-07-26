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
import Navbar1 from "../components/navbar1.jsx"




function Login()
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
   
    
    <Navbar1/>
    
  
    
    <div class="main-banner" id="top">
        <video autoplay muted loop id="bg-video">
            <source src={video} type="video/mp4" />
        </video>

        <div class="video-overlay header-text">
            <div class="caption">
                <h6>work harder, get stronger</h6>
                <h2>easy with our <em>gym</em></h2>
                <div class="main-button scroll-to-section">
                    <a href="#features">Become a member</a>
                </div>
            </div>
        </div>
    </div>



        </>
    )
}
export default Login