const sgMail = require('@sendgrid/mail')
exports.sendEmail = function (toEmail) {
    // code
    sgMail.setApiKey("");
    const msg = {
        to: toEmail, // Change to your recipient
        from: 'katikalaanusha023@gmail.com', // Change to your verified sender
        subject: 'ECommerce - Registration Successful',
        text: 'Thank you for registering with us. You are successfully created your account',
        html: '<strong>Thanks for the registration</strong>',
    }
    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
}


