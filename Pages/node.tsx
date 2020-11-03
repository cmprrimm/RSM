var express = require('express');
var router = express.Router()
var mysql = require('mysql');

const connection = mysql.createPool({
    host        :   'localhost',
    database    :   'id15127755_rsmcovidapp',
    user        :   'id15127755_rsmadmin',
    password    :   '7@8uepqI(J^VKt6pOghE'
});

router.get('/', function(req, res, next) {
    var email = req.body.email; 
    var password = req.body.password;

    connection.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password], function(err, row, fields) {
        if (err) console.log(err);

        if (row.length > 0) {
          res.send({'success': true, 'message': row[0].email});
        } else {
          res.send({'success': false, 'message': 'User not found, please try again'});
        }
      });

});

module.exports = router;





