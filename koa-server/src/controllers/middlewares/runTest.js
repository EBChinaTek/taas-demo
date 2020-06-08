import {exec} from 'child_process';
import  util from 'util'

const execute = util.promisify(exec);

export default async ()=> {
    let cmd = "npm test"
    let path = 'cd ../jsgauge/'
    let options = {
        encoding: 'utf8',
        timeout: 0,
        maxBuffer: 200 * 1024,
        killSignal: 'SIGTERM',
        cwd: null,
        env: null
    };

    const  { error,stdout, stderr } =  await execute(`${path}　&& ${cmd} `, options);
    return error?stderr:stdout

}
