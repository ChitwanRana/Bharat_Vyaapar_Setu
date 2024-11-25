module.exports = {
    maxFileSize: 5, // Max file size in MB
    prohibitedWords: ['confidential', 'forbidden'], // Prohibited words in the document
    requiredFields: [
        'Importer-Exporter Code (IEC)',
        'Invoice No.',
        'Bill of Lading No.',
        'Certificate of Origin No.',
        'Pesticide Residue within permissible limits',
        'Cold Chain Management',
        'FDA Prior Notice Reference No.',
        'TRACES NT Certificate'
    ], // Required fields to check in the PDF content
    apedaStandards: {
        weightMin: 200, // Min weight in grams
        weightMax: 500, // Max weight in grams
        quality: 'no visible defects'
    }, // APEDA compliance
    packaging: {
        type: 'Corrugated fiberboard boxes with ventilation holes',
        material: 'biodegradable material'
    }, // Packaging standards
};
