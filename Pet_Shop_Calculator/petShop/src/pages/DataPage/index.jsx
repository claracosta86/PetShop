import React, { useState } from "react";
import '../../css/DataPage.css';
import { Link } from "react-router-dom";
import axios from "axios"; 

export default function DataPage() {

  const button_ok= {
    backgroundImage: 'linear-gradient(0deg, rgba(240, 0, 0, 0.2), rgba(240, 0, 0, 0.2)), linear-gradient(90deg, rgba(246, 86, 201, 0.58) 0%, rgba(255, 230, 0, 0.58) 99.99%, rgba(255, 230, 0, 0.58) 100%, rgba(255, 39, 246, 0.58) 100%)', 
    color: '#000000', 
    padding: '10px 20px 20px 10px', 
    borderRadius: '1px', 
    width: '478.12px',
    height: '200px'
  };

  const [date, setDate] = useState("");
  const [smallDogs, setSmallDogs] = useState("");
  const [bigDogs, setBigDogs] = useState("");

  const handleSubmit = async () => {

    console.log("Date:", date);
    console.log("Small Dogs:", smallDogs);
    console.log("Big Dogs:", bigDogs);

    try {
      const response = await axios.post("/", {
        date,
        smallDogs,
        bigDogs
      });

      console.log("Response data:", response.data);
  
      if (response.status === 200) {
        const { petShop, preco } = response.data;
        window.location.href = `/resultpage?petShop=${petShop}&preco=${preco}`;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="body">
        <div className= "title">
          Pet Shop Calculator
        </div>    

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <img src="images/calendar_image.png" alt="calendar" style = {{width: 292, height: 260, position: 'absolute', top: 533.5, left: 971.5}}/>
            <img src="images/dog2_image.png" alt="dog2" style = {{width: 291, height: 317, position: 'absolute', top: 911, left: 971.5}}/>
            <img src="images/dog3_image.png" alt="dog3" style = {{width: 254, height: 254, position: 'absolute', top: 1350, left: 971.5}}/>
           </div>
        </div>

        <div className="bath">
          insira a data do banho:
        </div>

        <input
          name = "date"
          type="text"
          className="type1"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ fontSize: "116px", background: "#FFFFFF" }}
          placeholder="dd/mm/aaaa"
        />

        <div className="smalls">
          quantos cachorros pequenos?
        </div>

        <input
          name = "smalls"
          type="number"
          className="type2"
          value={smallDogs}
          onChange={(e) => setSmallDogs(e.target.value)}
          style={{ fontSize: "116px", background: "#FFFFFF" }}
          placeholder="digite um número..."
        />

        <div className="bigs">
          quantos cachorros grandes?
        </div>

        <input
          name = "bigs"
          type="number"
          className="type3"
          value={bigDogs}
          onChange={(e) => setBigDogs(e.target.value)}
          style={{ fontSize: "116px", background: "#FFFFFF" }}
          placeholder="digite um número..."
        />

        <div>
          <div className="button_ok">
            <Link to = "/resultpage">
              <button style ={button_ok}>OK!</button>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}