const convertFromCamelCase = (string) => {
    return string
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str) { return str.toUpperCase(); });
}

module.exports = {
    convertFromCamelCase
}