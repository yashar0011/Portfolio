/* 
   File name: projects.js
   Student’s Name: Yashar Ghasempour
   StudentID: 301285824
   Date: October 1, 2023
*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('projects');
});

module.exports = router;