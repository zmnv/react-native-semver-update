import chalk from 'chalk';

/** Render message in console */
export function versionUpdateErrorMessage(unitName) {
    const message = chalk.redBright(`[rnsemup] Project version: not increased
– Invalid version unit name "${chalk.bold(chalk.white(unitName))}". It must be ${chalk.white('major')}, ${chalk.white('minor')} or ${chalk.white('patch')}.`);

    console.log(message);
}

/** Render message in console */
export function showBuildNumberIncreased() {
    const message = chalk.greenBright('[rnsemup] Build number: increased');
    console.log(message);
}

/** Render message in console */
export function showProjectVersionUnitIncreased(unitName) {
    const message = chalk.greenBright(`[rnsemup] Project version: ${chalk.bold(chalk.white(unitName))} increased`);
    console.log(message);
}
