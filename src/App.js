import { Logo } from './tools/console/logo';
import { showResults } from './tools/showResults';
import { validateUpdateType } from './tools/validateUpdateType';

import { increaseBuildNumber } from './apps/increaseBuildNumber';
import { increaseProjectVersion } from './apps/increaseProjectVersion';
import { updateSwitchCases } from './apps/updateSwitchCases';

const NO_COMMAND_SPECIFIED = !process.argv.slice(2).length;

async function App(program) {
    console.log(Logo);

    let showResultsTable = false;

    const initialFilesInfo = showResults();

    if (NO_COMMAND_SPECIFIED) {
        // console.log('NO COMMANDS');
        showResultsTable = true;
        await updateSwitchCases(initialFilesInfo);
    }

    if (program.build) {
        showResultsTable = true;
        increaseBuildNumber(program);
    }

    if (program.update && validateUpdateType(program.update)) {
        showResultsTable = true;
        increaseProjectVersion(program);
    }

    if (showResultsTable) {
        console.log('');
        showResults();
    }
}

export default App;
