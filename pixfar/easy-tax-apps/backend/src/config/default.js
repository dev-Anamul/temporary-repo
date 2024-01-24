const config = {
    page: 1,
    limit: 15,
    order: 'desc',
    sort: 'createdAt',
    populate: '',
    search: '',
    fields: '',
    claimablePercentage: 0.15, // 15%
    isGSTClaimable: false,
    numOfDays: 7,
    numOfMonths: 11,
    type: 'receive',
};

module.exports = Object.freeze(config);
