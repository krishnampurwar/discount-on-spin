import { React} from "react";
import { useNavigate } from "react-router-dom";
import email from '../../utils/email.png'
import phone from '../../utils/phone.png'

import './styles.css'
const LoginForm = () => {

   
   
    const navigate = useNavigate();

  

    const handleSubmit = () => {
       
       
        navigate('/game');
    }
   

    return (
        <div className="form-container">
            <p className="form-heading">This is how EngageBud looks like in action!</p>
            <form onSubmit={handleSubmit}>
               <div className="values">
                <div className="textfield">
                <img src={email}  style={{width:'15px', height:'12px' , marginRight:'15px'}}  />               
                    <div style={{ display: 'flex' , flexDirection:'column' ,margin:'0' }}>
                   <p style={{ fontSize: '11px' , fontWeight:'400' ,fontFamily:'noto sans' }} >Email</p>
                   
                <input type={"email"} required="required"  style={{ border: 'none'}}  placeholder={"abc@gmail.com"} />
                </div>
                </div>
                <div className="textfield" style={{ marginTop:'25px' }}>
                <img src={phone}  style={{width:'15px', height:'12px' , marginRight:'15px'}}  />               
                   <div style={{ display: 'flex' , flexDirection:'column'  }}>
                   <p style={{ fontSize: '11px' , fontWeight:'400' ,fontFamily:'noto sans' }} >Phone number</p>

                    
                <input type={"phone"} required="required" minLength={10} maxLength={12} style={{ border: 'none'}}  placeholder={"123-456-789"} />
                </div>
                </div>
               </div>

                <div className="checkbox-container">
                    <div style={{ width: "40px", float: "left" }}>
                    <input type={"checkbox"} required="required" style={{width:'20px' , height:'40px'}}></input>
                    </div>
                    <div style={{ width: "250px", float: "right" }}>
                   
                        <p style={{ marginBottom: "0" }}>
                          I agree to receiving recurring automated messages at the number I have provided.</p>
                        <p style={{ marginTop: "0" }}>Consent is not a condition to purchase.</p>
                    </div>
                </div>

                <button className="form-button" type="submit" >Try your Luck</button>
            </form>

            <p className="form-disclamer">*You can spin the wheel only once!&nbsp;*If you win, you can claim your coupon for 10 minutes only!</p>
            <p className="form-close">No, I don't feel lucky  </p>
        </div >
    )
}

export default LoginForm;