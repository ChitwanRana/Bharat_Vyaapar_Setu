const express = require('express');
const multer = require('multer');
const { checkCompliance } = require('../controllers/complianceController');

const router = express.Router();

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// Define compliance check route
router.post('/check-compliance', upload.single('document'), checkCompliance);

module.exports = router;
