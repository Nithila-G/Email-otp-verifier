function SendOTP(){
    const email = document.getElementById("email");
    const otpverify = document.getElementsByClassName("email-verify")[0];
    
    let otp_code = Math.floor(Math.random() * 10000);
    let emailbody = `<h1> Your OTP is </h1> ${otp_code}`;
    Email.send({
        SecureToken : "77bba0af-13bd-47fb-974e-bf1e806b7d11", 
        To : email.value,
        From : "gs.nithila@gmail.com",
        Subject : "Email OTP using Javascript",
        Body : Emailbody,
    }).then(
      message => {
        if(message ==="OK"){
          alert("OTp sent to your email " + email.value);
          
          otpverify.style.display ="flex";
          let otp_inp = document.getElementById("otp-input");
          let otp_btn = document.getElementById("btn-verify-otp");

          otp_btn.addEventListener("click", ()=>{

            if(otp_inp.value == otp_code){

              alert("Email address verified...");
              otpverify.style.display ="none";
              email.value ="";
              otp_inp.value =""; 
            }
            else{
              alert("Invalid OTP")
            }
          })
        }
      }
    );
}