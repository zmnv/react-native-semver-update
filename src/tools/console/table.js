import chalk from 'chalk';
import { LayoutLine } from './layout';

const renderTable = ({ m1 = '', m2 = '', m3 = '', m4 = '', m5 = '' } = {}) => {
    const width = 11;

    const h1 = LayoutLine('Package', width, undefined, chalk.yellowBright);
    const h2 = LayoutLine('Android', width, undefined, chalk.greenBright);
    const h3 = LayoutLine('iOS', width, undefined, chalk.cyanBright);

    const r1 = LayoutLine('Project Version', 16, undefined, chalk.whiteBright);
    const r2 = LayoutLine('Build Number', 16, undefined, chalk.whiteBright);

    const v11 = LayoutLine(m1, width, undefined, chalk.yellowBright);
    const v12 = LayoutLine(m2, width, undefined, chalk.greenBright);
    const v13 = LayoutLine(m3, width, undefined, chalk.cyanBright);

    const v22 = LayoutLine(m4, width, undefined, chalk.greenBright);
    const v23 = LayoutLine(m5, width, undefined, chalk.cyanBright);

    return chalk.gray(`\
┌──────────────────┬─────────────┬─────────────┬─────────────┐
│                  │ ${h1} │ ${h2} │ ${h3} │
├──────────────────┼─────────────┼─────────────┼─────────────┤
│ ${r1} │ ${v11} │ ${v12} │ ${v13} │
├──────────────────┼─────────────┼─────────────┼─────────────┤
│ ${r2} │ -           │ ${v22} │ ${v23} │
└──────────────────┴─────────────┴─────────────┴─────────────┘
`);
};

export {
    renderTable,
};
