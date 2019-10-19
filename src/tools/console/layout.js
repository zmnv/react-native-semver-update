function LayoutLine(str = '', width = 15, fill = ' ', color = a => a) {
    let outStr = '';
    let count = 0;

    while (count < width) {
        const currentChar = str[count] || fill;
        outStr = outStr.concat(currentChar);
        count += 1;
    }

    if (str.length > width) outStr = outStr.replace(/.$/, '…');

    return color(outStr);
}

export {
    LayoutLine,
};
