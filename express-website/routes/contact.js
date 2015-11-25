var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '',
      pass: ''
    }
  });

  var mailOptions = {
    from: "John Doe <johndoe@outlook.com>",
    to: '',
    subject: 'Website Submission',
    text: 'You have a new submission with the following details... Name: '+ req.body.name + 'Email:' + req.body.email+ 'Message: ' + req.body.message,
    html: '<p>You have a new submission with the following details...</p><ul>Name: '+req.body.name+'</ul><ul>Email: '+req.body.email+'</ul><ul>Message: '+req.body.message+'</ul>'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Sent'+info.response);
      res.redirect('/');
    }
  })
});

module.exports = router;
