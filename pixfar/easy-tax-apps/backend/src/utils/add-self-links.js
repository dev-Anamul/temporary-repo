const addSelfLinks = (data = [], baseUrl = '/') => {
    if (!Array.isArray(data)) return data;

    return data.map((item) => ({
        ...item,
        links: {
            self: `${baseUrl}/${item.id}`,
        },
    }));
};

module.exports = { addSelfLinks };
