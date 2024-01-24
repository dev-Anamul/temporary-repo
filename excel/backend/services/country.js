const Country = require('../models/country');
const AppError = require('../utils/AppError');

/**
 * @description get all country
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.getAllCountry = () => Country.find();

/**
 * @description get a country by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.getCountryById = async (id) => {
    const country = await Country.findById(id);
    if (!country) throw new AppError('No country found with that id', 404);
    return country;
};

/**
 * @description get a country by property
 * @param {Object} property
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.getCountryByProperty = async (property) => {
    const country = await Country.find(property);
    if (!country) {
        throw new AppError('No country found with that property', 404);
    }
    return country;
};

/**
 * @description get a single country by property
 * @param {Object} property
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.getSingleCountryByProperty = async (property) => {
    const country = await Country.findOne(property);
    if (!country) {
        throw new AppError('No country found with that property', 404);
    }
    return country;
};

/**
 * @description create a new country
 * @param {Object} country
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.createCountry = async (country) => {
    const newCountry = new Country(country);
    await newCountry.save();
    return newCountry;
};

/**
 * @description update a country
 * @param {Object} country
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.updateCountry = async (id, countryPayload) => {
    const country = await this.getCountryById(id);

    Object.assign(country, countryPayload);

    await country.save();

    return country;
};

/**
 * @description delete a country
 * @param {Object} country
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */

exports.deleteCountry = async (id) => {
    const country = await this.getCountryById(id);

    await country.deleteOne();

    return country;
};
