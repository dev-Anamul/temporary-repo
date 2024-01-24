const bcrypt = require('bcrypt');

const generateHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

const compareHash = async (password, hash) => {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
};

module.exports = {
    generateHash,
    compareHash,
};
