/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const { User } = require('../../model');
const db = require('../../db/testDbConnection');

const userData = {
    firstName: 'Trace',
    middleName: 'Charlie',
    lastName: 'Reynolds',
    mobile: '(861) 515-3368 x8503',
    dateOfBirth: '2023-01-11T15:20:06.832Z',
    notificationToken: 'c2b065c0-e40d-4f29-acc7-2281f2e0a82b',
    notificationType: 'APNS',
    email: 'Leopold61@yahoo.com',
    password: 'KASzdgEIJj8wYOD',
    termsAndConditions: true,
    address: '7988 Davin Passage',
    employmentWorkType: 'selfEmployed',
};
beforeAll(async () => {
    await db.setUp();
});

afterEach(async () => {
    await db.dropCollections();
});

afterAll(async () => {
    await db.dropDatabase();
});

describe('User model', () => {
    it('should Create and save user successfully', async () => {
        const newUser = new User(userData);
        const savedUser = await newUser.save();

        expect(savedUser._id).toBeDefined();
        expect(savedUser.firstName).toBe(userData.firstName);
        expect(savedUser.lastName).toBe(userData.lastName);
        expect(savedUser.email).toBe(userData.email.toLowerCase());
        expect(savedUser.role).toBe('customer');
        expect(savedUser.status).toBe('pending');

        expect(savedUser).toBeDefined();
    });

    it('should update user successfully', async () => {
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        const user = await User.findById(savedUser._id);
        user.firstName = 'Test';
        const updatedUser = await user.save();
        expect(updatedUser.firstName).toBe('Test');
    });

    it('should find user by id successfully', async () => {
        const newUser = new User(userData);
        const savedUser = await newUser.save();

        const user = await User.findById(savedUser._id);
        expect(user.firstName).toBe(userData.firstName);
        expect(user.lastName).toBe(userData.lastName);
        expect(user.email).toBe(userData.email.toLowerCase());
        expect(user.role).toBe('customer');
        expect(user.status).toBe('pending');
    });

    it('should throw error if i set role to empty string', async () => {
        const user = new User({ ...userData, role: '' });
        let err;
        try {
            await user.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(Error);
    });

    it('should throw error if i send status value to empty string or not', async () => {
        const user = new User({ ...userData, status: '' });
        let err;
        try {
            await user.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(Error);
    });

    it("should throw error if if role is not 'customer', 'admin', 'superadmin'", async () => {
        const user = new User({ ...userData, role: 'test' });
        let err;
        try {
            await user.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(Error);
    });

    it('should throw error if if role is one or two length', async () => {
        const user = new User({ ...userData, role: 'te' });
        let err;
        try {
            await user.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(Error);
    });

    it('should throw error if if status is not "pending","approved" or "rejected"', async () => {
        const user = new User({ ...userData, role: 'test' });
        let err;
        try {
            await user.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(Error);
    });

    it('should throw error if i send to empty string for any required field', async () => {
        const user = new User({ ...userData, mobile: '' });
        let err;
        try {
            await user.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(Error);
    });
});
