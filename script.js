



function sendOTP() {
  
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (email === "") {
    message.style.color = "red";
    message.innerText = "Please enter email";
    return;
  }

  const generatedOTP = Math.floor(1000 + Math.random() * 9000);

 
  localStorage.setItem("otp", generatedOTP);

  console.log("OTP:", generatedOTP);

  message.style.color = "green";
  message.innerText = "OTP sent! (Check console for demo)";

  setTimeout(() => {
    window.location.href = "verify.html";
  }, 5000);
}
function verifyOTP() {
  const userOTP = document.getElementById("otp").value;
  const storedOTP = localStorage.getItem("otp");
  const msg = document.getElementById("msg");

  if (userOTP === storedOTP) {
    msg.style.color = "green";
    msg.innerText = "OTP Verified Successfully!";

    localStorage.removeItem("otp");
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid OTP";
  }
}

