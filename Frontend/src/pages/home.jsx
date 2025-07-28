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
import { useEffect, useState } from "react"
import axios from "axios"
import Navbar3 from "../components/navbar3.jsx"
import { Modal, Button } from "react-bootstrap";

function Home ()
{

    const [name,setName] = useState("") 
    const [gender,setGender] = useState("")
    const [stat,setStat] = useState("")
    const [show, setShow] = useState(false)
    const [act,setAct] = useState("")
    const[hours,setHours]=useState("0")
    const[minutes,setMinutes]=useState("0")
    const [uid,setUid] = useState("")


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{

    setName("Pasan");
    setGender("male")

    if(gender==="male")
    {
        setStat("Mr.")
    } else
    {
        setStat("Ms.")
    }

    },[gender])

    async function submitAct()
    {

        const response = axios.post('',{user_id:useId,})


    }
   
   

    return(
<>
<Navbar3/>
 <section class="section" id="features">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Welcome, <em>{stat} {name} !</em></h2>
                       <br></br>
                        <p>"Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website."</p>
                    <div class="main-button scroll-to-section">
                         <br></br>
                            <a onClick={handleShow}>Log Activity</a>

                            
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <center><Modal.Title>Log Activity</Modal.Title></center>
            </Modal.Header>
            <Modal.Body>
              
              <form>

              <div className="form-group">
                <label htmlFor="gender">Acitivity Type</label>
                <select className="form-control" id="gender" onChange={e=>setAct(e.target.value)} value={act} required>
                <option value="select" >Select</option>
                <option value="male" >Ran</option>
                <option value="female" >Swimmed</option>
                <option value="other" >Cricket</option>
                <option value="other" >Gym</option>
                <option value="other" >Football</option>
                <option value="other" >Walking</option>
                <option value="other" >Hiking</option>
                <option value="other" >Other</option>
                </select>

                <br></br>
                
                <label htmlFor="gender">Duration</label>
               <div className="d-flex gap-2">
                <input type="number" className="form-control" placeholder="Hours" value={hours} onChange={e=>setHours(e.target.value)} />
                 <input type="number" className="form-control" placeholder="Minutes" value={minutes} onChange={e=>setMinutes(e.target.value)}/>
                </div>          </div>
            
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
                        </div>
                    
                    </div>
                </div>
                <div class="col-lg-6">
                    <ul class="features-items">
                        <li class="feature-item">
                            <h2>Past Sessions</h2>
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src="assets/images/features-first-icon.png" alt="second one"/>
                            </div>
                            <div class="right-content">
                                <h4>New Gym Training</h4>
                                <p>If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.</p>
                               
                            </div>
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src="assets/images/features-first-icon.png" alt="third gym training"/>
                            </div>
                            <div class="right-content">
                                <h4>Basic Muscle Course</h4>
                                <p>Credit goes to <a rel="nofollow" href="https://www.pexels.com" target="_blank">Pexels website</a> for images and video background used in this HTML template.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <ul class="features-items">
                        <li class="feature-item">
                            
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src="assets/images/features-first-icon.png" alt="training fifth"/>
                            </div>
                            <div class="right-content">
                                <h4>Yoga Training</h4>
                                <p>This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src="assets/images/features-first-icon.png" alt="gym training"/>
                            </div>
                            <div class="right-content">
                                <h4>Body Building Course</h4>
                                <p>Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

  

    <section class="section" id="call-to-action">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <h2>What <em>we </em>think <em>about</em> your  <em>patterns !</em></h2>
                        <p>Your consistency can be improved!</p>
                        <div class="main-button scroll-to-section">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



</>
    )


}

export default Home