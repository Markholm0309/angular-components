export const Intersection = (a, b) => {
    return a.filter((item) => b.indexOf(item) !== -1);
}

export const Not = (a, b) => {
    return a.filter((item) => b.indexOf(item) === -1);
}