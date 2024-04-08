import React from "react";
import '../../css/HomePage.css';
import { Link } from "react-router-dom";


export default function HomePagePage() {

  const button_vamos= {
    backgroundImage: 'linear-gradient(0deg, rgba(240, 0, 0, 0.2), rgba(240, 0, 0, 0.2)), linear-gradient(90deg, rgba(246, 86, 201, 0.58) 0%, rgba(255, 230, 0, 0.58) 99.99%, rgba(255, 230, 0, 0.58) 100%, rgba(255, 39, 246, 0.58) 100%)',
    color: '#000000', 
    padding: '10px 20px 20px 10px', 
    borderRadius: '1px', 
    width: '478.12px',
    height: '200px'
  };

  return(
    <>
      <div className="body">
        <div className="homePageTitle">
          Pet Shop Calculator
        </div>    
        <div>
            <img src="images/dog1_image.png" alt="dog1"  style = {{width: 258, height: 272, position: 'absolute', top: 580, left: 2029}}/>
            <img src="images/bath_image.png" alt="bath" style = {{width: 280, height: 302, position: 'absolute', top: 560, left: 2632}}/>
            <img src="images/coins_image.png" alt="coins" style = {{width: 298, height: 282, position: 'absolute', top: 560, left: 3235}}/>
        </div>

        <div className="homePageText">
          vamos descobrir o seu pet shop ideal?
        </div>    

        <div>
          <div className="button_vamos">
            <Link to = "/datapage">
              <button style={button_vamos}>vamos!</button>            
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}