export const clamp = (actual, min, max) =>
    Math.min(Math.max(actual, min), max);

export const isPointHit = (target, { x, y }) =>
    getHitRect(target, {x, y, width: 1, height: 1});

/* { x, y, width, height } */
export const getHitRect = (a, b) => {
    // const rect = {
    //     x: Math.max(a.x, b.x),
    //     y: Math.max(a.y, b.y),
    //     width: b.width - Math.abs((a.x + a.width) - (b.x + b.width)),
    //     height: b.height - Math.abs((a.y + a.height) - (b.y + b.height))
    // };

    if (a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y) {
        return { hit: true };
    }

    return { hit: false };
};