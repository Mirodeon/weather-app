
//dynamic URL
export const getImageUrl = (name) => {
    return new URL(`../../src/img/${name}.png`, import.meta.url).href
};