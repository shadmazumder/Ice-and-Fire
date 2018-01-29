export function camelToNormalCase(text) {
    let result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}

export function renderListIfNecessary(value) {
    if (value instanceof Array) {
        return value.join(', ')
    }
    return value

}