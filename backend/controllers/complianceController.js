const fs = require('fs');
const path = require('path');
const pdfParser = require('pdf-parse');
const complianceRules = require('../utils/complianceRules');

// Validate PDF rules
const validatePDF = (filePath) => {
    const issues = [];
    const stats = fs.statSync(filePath);

    // Check file size
    if (stats.size > complianceRules.maxFileSize * 1024 * 1024) {
        issues.push(`File size exceeds ${complianceRules.maxFileSize} MB.`);
    }

    return issues;
};

// Validate content rules
const validateContent = async (filePath) => {
    const issues = [];
    const dataBuffer = fs.readFileSync(filePath);

    try {
        const pdfData = await pdfParser(dataBuffer);

        // Extract text from PDF
        const text = pdfData.text;

        // Check required fields
        complianceRules.requiredFields.forEach((field) => {
            if (!text.includes(field)) {
                issues.push(`Missing required field: ${field}`);
            }
        });

        // Check prohibited words
        complianceRules.prohibitedWords.forEach((word) => {
            if (text.includes(word)) {
                issues.push(`Prohibited word found: "${word}".`);
            }
        });

        // Validate APEDA standards
        if (!text.includes(complianceRules.apedaStandards.quality)) {
            issues.push('APEDA quality standard not met (no visible defects).');
        }

        // Packaging standards validation
        if (!text.includes(complianceRules.packaging.type)) {
            issues.push(`Packaging type does not match: Expected "${complianceRules.packaging.type}".`);
        }
        if (!text.includes(complianceRules.packaging.material)) {
            issues.push(`Packaging material does not match: Expected "${complianceRules.packaging.material}".`);
        }
    } catch (error) {
        issues.push('Failed to parse PDF content.');
    }

    return issues;
};

// Combined compliance validation
const validateCompliance = async (filePath) => {
    const issues = [...validatePDF(filePath), ...(await validateContent(filePath))];

    return {
        compliant: issues.length === 0,
        issues,
    };
};

// Controller to check compliance
const checkCompliance = async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    const filePath = file.path;

    try {
        // Validate the uploaded file
        const validationResult = await validateCompliance(filePath);

        // Delete the uploaded file after validation
        fs.unlinkSync(filePath);

        return res.json(validationResult);
    } catch (error) {
        fs.unlinkSync(filePath);
        return res.status(500).json({ error: 'Error validating compliance.' });
    }
};

module.exports = {
    checkCompliance,
};
