// Initialize EmailJS
(function(){
    emailjs.init("4mSAkXw5nbJ4HmG_P");
})();

let generatedOTP;

function sendOTP() {
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    
    // Validate email and mobile number
    if (!validateEmail(email) || !validateMobile(mobile)) {
        alert("Please enter a valid email and mobile number.");
        return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    const templateParams = {
        to_email: email,
        otp: generatedOTP
    };

    emailjs.send('service_i0x7tdf', 'template_tahe8wp', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('otpSection').style.display = 'block';
        }, function(error) {
            console.log('FAILED...', error);
        });
}

function verifyOTP() {
    const enteredOTP = document.getElementById('otp').value;

    if (enteredOTP === generatedOTP) {
        alert("OTP Verified Successfully!");
        // Perform further registration process here
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateMobile(mobile) {
    const re = /^[0-9]{10}$/;
    return re.test(mobile);
}
