import chalk from 'chalk';
import { existsSync } from 'fs';

import { PATHS } from '../paths';
import { colorByBoolean } from '../console/colorByBoolean';

/**
 * Returns `true` if any required file in `PATHS` not exist
 * and show warning in console.
 * @returns boolean
 */
function validateImportantFilesExist() {
    let isError = false;
    const meta = {};

    Object.keys(PATHS).forEach(key => {
        const isFileExist = existsSync(PATHS[key]);
        meta[key] = {
            path: PATHS[key],
            isFound: isFileExist,
        };

        if (!isFileExist) {
            isError = true;
        }
    });

    if (isError) {
        console.log(
            chalk.redBright('[Error] Some of files not found:\n'),
        );

        Object.keys(PATHS).forEach(key => {
            console.log(key);
            console.log('– path:', meta[key].path);
            console.log('– is found:', colorByBoolean(meta[key].isFound));
            console.log('');
        });
    }

    return isError;
}

export {
    validateImportantFilesExist,
};
