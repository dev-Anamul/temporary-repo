/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const { User } = require('../../../model');
const { createUser, getUserById } = require('../../../lib/user');

describe('lib/user', () => {
    const userData = {
        firstName: 'Scottie',
        middleName: 'Phoenix',
        lastName: 'Prosacco',
        mobile: '252-408-1295 x093',
        dateOfBirth: '2023-09-16T07:27:36.354Z',
        notificationToken: 'eb4d71f1-0dbc-420b-b9d1-42b5f1a12d53',
        notificationType: 'APNS',
        email: 'Titus_Kuvalis@yahoo.com',
        password: 'qH351NdpUAsTKg7',
        termsAndCondition: false,
        address: '1621 Matilda Burg',
        employmentWorkType: 'selfEmployed',
    };
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('createUser', () => {
        it('should create a user', async () => {
            const mockUser = new User(userData);

            const saveMock = jest.fn().mockResolvedValue(mockUser);
            User.prototype.save = saveMock;
            const createdUser = await createUser(userData);

            expect(createdUser).toBeInstanceOf(User);
            expect(createdUser.firstName).toEqual(userData.firstName);
            expect(createdUser.lastName).toEqual(userData.lastName);
            expect(createdUser.email).toEqual(userData.email.toLowerCase());
            expect(createdUser.role).toEqual('customer');
            expect(createdUser.status).toEqual('pending');
            expect(createdUser._id).toBeDefined();

            expect(saveMock).toHaveBeenCalled();
        });

        it('should set role to customer if it is empty or undefined', async () => {
            const mockUser = new User(userData);

            const saveMock = jest.fn().mockResolvedValue(mockUser);
            User.prototype.save = saveMock;
            const createdUser = await createUser({ ...userData, role: '' });

            expect(createdUser).toBeInstanceOf(User);
            expect(createdUser.firstName).toEqual(userData.firstName);
            expect(createdUser.lastName).toEqual(userData.lastName);
            expect(createdUser.email).toEqual(userData.email.toLowerCase());
            expect(createdUser.role).toEqual('customer');
            expect(createdUser.status).toEqual('pending');
            expect(createdUser._id).toBeDefined();

            expect(saveMock).toHaveBeenCalled();
        });
    });

    it('should get user by id', async () => {
        const user = {
            firstName: 'Scottie',
            middleName: 'Phoenix',
            lastName: 'Prosacco',
            mobile: '252-408-1295 x093',
            dateOfBirth: '2023-09-16T07:27:36.354Z',
            notificationToken: 'eb4d71f1-0dbc-420b-b9d1-42b5f1a12d53',
            notificationType: 'APNS',
            email: 'Titus_Kuvalis@yahoo.com',
            password: 'qH351NdpUAsTKg7',
            termsAndCondition: false,
            address: '1621 Matilda Burg',
            employmentWorkType: 'selfEmployed',
        };

        const mockUser = new User(user);

        const findByIdMock = jest.fn().mockResolvedValue(mockUser);

        User.findById = findByIdMock;
        const createdUser = await getUserById(user._id);

        expect(createdUser).toBeInstanceOf(User);
        expect(createdUser.firstName).toEqual(user.firstName);
        expect(createdUser.lastName).toEqual(user.lastName);
        expect(createdUser.email).toEqual(user.email.toLowerCase());
        expect(createdUser.role).toEqual('customer');
        expect(createdUser.status).toEqual('pending');
        expect(createdUser._id).toBeDefined();
    });
});

// todo: replace this with what i want to update
describe('update user', () => {
    const userData = {
        firstName: 'Scottie',
        middleName: 'Phoenix',
        lastName: 'Prosacco',
        mobile: '252-408-1295 x093',
        dateOfBirth: '2023-09-16T07:27:36.354Z',
        notificationToken: 'eb4d71f1-0dbc-420b-b9d1-42b5f1a12d53',
        notificationType: 'APNS',
        email: 'Titus_Kuvalis@yahoo.com',
        password: 'qH351NdpUAsTKg7',
        termsAndCondition: false,
        address: '1621 Matilda Burg',
        employmentWorkType: 'selfEmployed',
    };
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should update user successfully', async () => {
        const mockUser = new User(userData);

        const saveMock = jest.fn().mockResolvedValue(mockUser);
        User.prototype.save = saveMock;
        const createdUser = await createUser(userData);

        expect(createdUser).toBeInstanceOf(User);
        expect(createdUser.firstName).toEqual(userData.firstName);
        expect(createdUser.lastName).toEqual(userData.lastName);
        expect(createdUser.email).toEqual(userData.email.toLowerCase());
        expect(createdUser.role).toEqual('customer');
        expect(createdUser.status).toEqual('pending');
        expect(createdUser._id).toBeDefined();

        expect(saveMock).toHaveBeenCalled();
    });

    it('should update user successfully', async () => {
        const mockUser = new User(userData);

        const saveMock = jest.fn().mockResolvedValue(mockUser);
        User.prototype.save = saveMock;
        const createdUser = await createUser(userData);

        expect(createdUser).toBeInstanceOf(User);
        expect(createdUser.firstName).toEqual(userData.firstName);
        expect(createdUser.lastName).toEqual(userData.lastName);
        expect(createdUser.email).toEqual(userData.email.toLowerCase());
        expect(createdUser.role).toEqual('customer');
        expect(createdUser.status).toEqual('pending');
        expect(createdUser._id).toBeDefined();

        expect(saveMock).toHaveBeenCalled();
    });
});
