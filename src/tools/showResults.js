import { renderFilesInfo } from './files/renderFilesInfo';
import { getFilesInfo } from './files/getFilesInfo';

/** 
 * [Tool] Render table with current versions
 */
export function showResults(title) {
    const fileInfo = getFilesInfo();
    renderFilesInfo(fileInfo, title);

    return fileInfo;
}
