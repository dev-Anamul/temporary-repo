const { promisify } = require('util');
const jwt = require('jsonwebtoken');

// generate jwt token
const generateToken = async ({
    payload,
    jwtSecret = process.env.JWT_SECRET,
    algorithm = 'HS256',
    expiresIn = process.env.JWT_EXPIRES_IN,
}) => {
    const sign = promisify(jwt.sign);
    const token = await sign(payload, jwtSecret, { algorithm, expiresIn });
    return token;
};

const generateTokenWithOutExpire = async ({
    payload,
    jwtSecret = process.env.JWT_SECRET,
    algorithm = 'HS256',
}) => {
    const sign = promisify(jwt.sign);
    const token = await sign(payload, jwtSecret, { algorithm });
    return token;
};
// compare jwt token
const verifyToken = async ({ jwtSecret = process.env.JWT_SECRET, algorithm = 'HS256', token }) => {
    const verify = promisify(jwt.verify);
    const payload = await verify(token, jwtSecret, { algorithm });
    return payload;
};

module.exports = {
    generateToken,
    verifyToken,
    generateTokenWithOutExpire,
};
