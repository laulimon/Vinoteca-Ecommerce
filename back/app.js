const db = require("./db/db")
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const Router = require("./routes/index")
const cookieParser = require('cookie-parser');
const session = require("express-session");
const app = express();
require("./passport/passport")

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey("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");

// const msg = {
//     to: 'imercs96@gmail.com',
//     from: 'test@example.com',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

// sgMail.send(msg);

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(cookieParser());

app.use(session({
    secret: "cats",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});

app.use("/", Router)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/' + 'index.html')
})
db.sync({
    logging: false,
    force: false
})
    .then(() => {
        app.listen(3000, function () {
            console.log('Server is listening on port 3000!');
        });
    })
    .catch(err => console.log(err))