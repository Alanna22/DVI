import React from 'react'
import './Middle.css';
import Susie from './img/SusieSmith.jpg'
import Blueberry from './img/blueberry.png'
import Coffee from './img/coffee.png'
import PB from './img/peanut-butter.png'
import Chocolate from './img/chocolate.png'

function Middle() {

      
    return (

        
        <>
        
        <div className="middleBG">
            <div class="middleContainer">
                <div class="row">
                    <div class="col-6">
                        <img class="athlete" src={Susie}></img>
                    </div>
                    <div class="text col-6">
                        <h1>Susie Smith &nbsp; &nbsp; &nbsp; &nbsp;<i class="fab fa-instagram"></i>&nbsp;<i class="fab fa-twitter"></i></h1> 
                        <h4>Meet our newest athlete </h4>

                        <p>A big welcome to Susie who is new to our team of parkour athletes. Originally from Edinburgh Susie found her love of Parkour at her local training center. <span class="bold">Come along and see her skills this summers festivals.</span></p>
                        <br></br>
                        <h5>Can you guess which JusJax flavour is Susie's favourite?</h5>

                        <div class="flavours">
                            <ul>
                                <li>
                                    <img class="flavourItem" src={Blueberry} onclick="show()"></img>
                                    
                                </li>
                                <li>
                                    <img class="flavourItem" src={Coffee} onclick="show()"></img>
                                </li>
                                <li>
                                    <img class="flavourItem" src={PB} onclick="show()"></img>
                                </li>
                                <li>
                                    <img class="flavourItem" src={Chocolate} onclick="show()"></img>
                                </li>
                            </ul>
                        </div>
                        <div id="answer">
                            <p STYLE="display:none">Susie can't decide!! She loves every flavour (except Banana).</p>
                        </div>
                    </div>

                    
                
                </div>
            </div>
        </div>
        
        </>
    )
}



export default Middle