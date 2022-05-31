// Code your solution here
function findMatching(array, name) {
    return array.filter(element => element.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array, name) {
    return array.filter(element => element.startsWith(name))
}

function matchName(array, name) {
    return array.filter(element => element.name === name)
}