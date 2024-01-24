const { Asset } = require('../../model');

const findAsset = async (id) => Asset.findById(id);

const findByIdAndUserId = async (id, userId) => Asset.findOne({ _id: id, userId });

module.exports = { findAsset, findByIdAndUserId };
