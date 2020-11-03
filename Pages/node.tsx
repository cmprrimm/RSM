var express = require('express');
var router = express.Router()
var mysql = require('mysql');

const connection = mysql.createPool({
    host        :   'https://www.000webhost.com/',
    database    :   'RSMCovidApp',
    user        :   'rsmgroupljmu@outlook.com',
    password    :   'rsmCovidapp'
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





