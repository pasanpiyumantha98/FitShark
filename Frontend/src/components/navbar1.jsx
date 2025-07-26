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
import { Link } from "react-router-dom"



function Navbar1()
{

return (  
<>
<header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        
                        <a href="index.html" class="logo">Fit<em> Shark</em></a>
                        
                       
                        <ul class="nav">
                           <li class="scroll-to-section"> <Link to="/signup">Home </Link></li>
                            
                           <li class="scroll-to-section"> <Link to="/signup">Support </Link></li>
                           <li class="main-button"> <Link to="/signup">Sign Up</Link> </li>
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                       
                    </nav>
                </div>
            </div>
        </div>
    </header>
    
    </>
    
    )


}

export default Navbar1