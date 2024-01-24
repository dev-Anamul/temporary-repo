/* eslint-disable no-undef */
const bcrypt = require('bcryptjs');
const { compareHash, generateHash } = require('../../../utils/hashing');

jest.mock('bcryptjs', () => ({
    genSalt: jest.fn(),
    hash: jest.fn(),
    compare: jest.fn(),
}));

describe('describe utils hashing', () => {
    it('should generateHash based on given function  ', async () => {
        const password = 'password';
        const salt = 'salt';
        const hash = 'hashedPassword';
        bcrypt.genSalt.mockResolvedValue(salt);
        bcrypt.hash.mockResolvedValue(hash);

        const result = await generateHash(password);
        expect(result).toEqual(hash);
        expect(bcrypt.genSalt).toHaveBeenCalledWith(10);
        expect(bcrypt.hash).toHaveBeenCalledWith(password, salt);
    });

    it('should return true if password and hash are the same', async () => {
        const password = 'password';
        const hash = 'hashedPassword';
        bcrypt.compare.mockResolvedValue(true);

        const result = await compareHash(password, hash);
        expect(result).toEqual(true);
        expect(bcrypt.compare).toHaveBeenCalledWith(password, hash);
    });

    it('should return false if password and hash are not the same', async () => {
        const password = 'password';
        const hash = 'hashedPassword';
        bcrypt.compare.mockResolvedValue(false);

        const result = await compareHash(password, hash);
        expect(result).toEqual(false);
        expect(bcrypt.compare).toHaveBeenCalledWith(password, hash);
    });

    it('should compare actual password', async () => {
        const password = 'password';
        const hash = await generateHash(password);

        const result = await compareHash(password, hash);
        console.log('result', result);
        expect(result).toEqual(true);
        expect(bcrypt.compare).toHaveBeenCalledWith(password, hash);
    });
});
