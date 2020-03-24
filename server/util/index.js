const _ = require("lodash");

const renameKeys = (keysMap, obj) =>
    Object.keys(obj).reduce(
        (acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] }
        }),
        {}
    );

const normalizeData = (keys, data) => {

    // 1: convert array of arrays to array of objects
    let converted = data.map(entry => {
        return _.toPlainObject(entry);
    });

    // 2: replace numbered keys with the actual keys
    let replaced = converted.map(entry => {
        return renameKeys(keys, entry);
    });

    return replaced;
}

module.exports = {
    normalizeData
}