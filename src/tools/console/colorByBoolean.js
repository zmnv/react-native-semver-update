import chalk from 'chalk';

function colorByBoolean(input) {
    if (input) return chalk.greenBright(input);

    return chalk.redBright(input);
}

export {
    colorByBoolean,
};
