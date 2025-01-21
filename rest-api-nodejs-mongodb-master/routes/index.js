var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const express = require('express');
const router = express.Router();


// ... (ส่วนของ route อื่นๆ)

// Route สำหรับแก้ไขข้อมูลผู้ใช้
router.put('/users/:id', updateUser);

module.exports = router;