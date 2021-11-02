const mongoose = require('mongoose');
const config = require('../utils/config');

mongoose.connect(config.MONGO_URI, (err) => {
    if(err) {
        throw new Error(`Ma'lumot omboriga ulanishda xatolik yuz berdi: ${err.message}`);
    }
    console.log(`Ma'lumotlar omboriga ulanildi!`);
});