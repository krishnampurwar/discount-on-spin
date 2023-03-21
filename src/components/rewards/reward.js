import React, { useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import './styles.css'
const Rewards = () => {
   

    let { reward } = useParams();
    console.log(reward);
    function handleClickCopy() {
        navigator.clipboard.writeText("XAXPDF20");
        alert("code coppied to the clipboard");
    }
    const navigate = useNavigate();
    function handleClick() {
        navigator.clipboard.writeText("XAXPDF20");
        alert("code coppied to the clipboard");
        navigate('/')
    }
    return (
        <>
            <div className="container">
                <p style={{ fontSize: "18px", fontWeight: "700", marginBottom: "0" }}>Congrats! You Won:</p>
                <p style={{ fontSize: "28px", lineHeight: "35px", marginTop: "5px", width: "90%", marginLeft: "5%" }}>{reward}</p>
                <div className="coupon">XAXPDF20
                    <span className="copyButton"  onClick={() => {handleClickCopy()}}>copy</span></div>
                <button className="button" onClick={() => {handleClick()}}>Close Panel and copy</button>
                <p style={{
                    fontWeight: "200", fontSize: "10px", marginTop: "10px",
                    color: "#146531", fontFamily: "Noto Sans", fontStyle: "italic"
                }}>*You can claim your coupon for 10 minutes only!</p>
            </div>
           
        </>
    )
}

export default Rewards;