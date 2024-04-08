import React, { useState }  from "react";
import '../../css/ResultPage.css';
import { Link } from "react-router-dom";
import axios from "axios"; 

export default function ResultPage() {
  const button_refresh= {
    backgroundImage: 'linear-gradient(0deg, rgba(240, 0, 0, 0.2), rgba(240, 0, 0, 0.2)), linear-gradient(90deg, rgba(246, 86, 201, 0.58) 0%, rgba(255, 230, 0, 0.58) 99.99%, rgba(255, 230, 0, 0.58) 100%, rgba(255, 39, 246, 0.58) 100%)', 
    color: '#000000', 
    padding: '10px 20px 20px 10px', 
    borderRadius: '1px', 
    width: '478.12px',
    height: '165px'
  };

  const urlParams = new URLSearchParams(window.location.search);
  const petShop = urlParams.get("petShop");
  const preco = urlParams.get("preco");
  return (
    <>
      <div className="body">
        <div className= "title">
          Pet Shop Calculator
        </div>   

        <div className= "pet_shop">
          o seu pet shop ideal é... {petShop}
        </div>  


        <div className= "preco">
          por apenas: {preco}
        </div>    

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <img src="images/bills_image.png" alt="bills" style ={{width: 512, height: 512, position: 'absolute', top: 891, left: 1217}}/>
          </div>
        </div>

        <div>
          <div className="button_refresh">
            <Link to = "/">
              <button style={button_refresh}>done!</button>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
