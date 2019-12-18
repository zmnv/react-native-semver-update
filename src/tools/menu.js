import { prompt } from 'inquirer';
import { CONSTANTS } from './constants';

async function askAboutType() {
    const answers = await prompt([
        {
            type: 'list',
            name: 'updateFor',
            message: 'What do you want to update?',
            choices: [
                CONSTANTS.UPDATE.BUILD_NUMBER_VARIANT,
                CONSTANTS.UPDATE.PROJECT_VERSION_VARIANT,
            ],
        },
    ]);

    return answers;
}

async function askAboutPlatform(updateFor) {
    let choices = [
        CONSTANTS.PLATFORM.ALL,
        CONSTANTS.PLATFORM.PACKAGE,
        CONSTANTS.PLATFORM.ANDROID,
        CONSTANTS.PLATFORM.IOS,
    ];

    if (updateFor === CONSTANTS.UPDATE.BUILD_NUMBER_VARIANT) {
        delete choices[1];
        choices = choices.filter(Boolean);
    }

    const answers = await prompt([
        {
            type: 'list',
            name: 'platform',
            message: 'Choose the platform:',
            choices: choices.filter(Boolean),
        },
    ]);

    return answers;
}

async function askVersionText(message) {
    const answer = await prompt([
        {
            type: 'input',
            name: 'version',
            message,
        },
    ]);

    return answer;
}

export {
    askVersionText,
    askAboutType,
    askAboutPlatform,
};
