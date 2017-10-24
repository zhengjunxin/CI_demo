exports.add = num => {
    if (typeof num === 'number') {
        return num + 1
    }
    else {
        return 0;
    }
}
exports.min = num => {
    if (typeof num === 'number') {
        return num - 1
    }
    else {
        return 0
    }
}