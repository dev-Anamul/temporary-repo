const crypto = require('crypto');

function generateCryptoToken(length) {
    return crypto.randomBytes(length).toString('hex');
}

module.exports = {
    generateCryptoToken,
};
