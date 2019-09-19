export const clamp = (actual, min, max) =>
    Math.min(Math.max(actual, min), max);

/* { x, y, width, height } */
export const getHitRect = (a, b) => {
    const rect = {
        x: Math.max(a.x, b.x),
        y: Math.max(a.y, b.y),
        width: b.width - Math.abs((a.x + a.width) - (b.x + b.width)),
        height: b.height - Math.abs((a.y + a.height) - (b.y + b.height))
    };

    rect.hit = rect.width > 0 && rect.height > 0;

    return rect;
};