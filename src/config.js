const dotenv = require('dotenv');
dotenv.config();

module.exports = {
apiKey: process.env.GOOGLE_MAPS_API_KEY
};