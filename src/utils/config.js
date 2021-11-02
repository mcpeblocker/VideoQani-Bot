require('dotenv').config();

const config = {
    NODE_ENV: process.env.NODE_ENV,
    BOT_TOKEN: process.env.BOT_TOKEN,
    MONGO_URI: process.env.MONGO_URI,
    OWNER: parseInt(process.env.OWNER)
};

module.exports = config;