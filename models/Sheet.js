const mongoose = require('mongoose');
const sheetSchema = new mongoose.Schema({
    name: String,
    created_by: String,
    date: { type: Date, default: Date.now() },
    mdate: { type: Date, default: Date.now() },
    doc_type: { type: String, default: "sheets" },
    document_name: String,
    contentCells: [
        {
            row: Number,
            col: Number,
            value: String,
            properties: String
        }
    ],
}, {
    timestamps: true
});

const Sheet = mongoose.model('Sheet', sheetSchema);
module.exports = Sheet;