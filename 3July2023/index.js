
var express = require('express');
var app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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")

app.use(express.json());

app.post("/forgotPassword", function (req, res) {

    var email = req.body.email;



    const msg = {
        to: email, // Change to your recipient
        from: 'Katikalaanusha023@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
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
});

app.listen(9011, () => {
    console.log("server started");
})

/*

   Create a list of products and find the products whose price is less than 10,000. 


   10 products ->  6 less than 10k, 4 gt  10k.

   

*/