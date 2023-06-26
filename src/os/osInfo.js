import { EOL, cpus, homedir, userInfo, arch } from 'os';

export const osInfo = async (key) => {
try {
    switch (key) {
      case '--EOL':
        console.log(JSON.stringify(EOL));
        break;
      case '--cpus':
        console.log(`\nOverall amount of CPUS: ${cpus().length}\n`);
        console.table(cpus().map((rate) => ({
            model: rate.model,
            'clock rate': `${+rate.speed / 1000} GHz`,
          }))
        );
        break;
      case '--homedir':
        console.log(homedir());
        break;
      case '--username':
        console.log(userInfo().username);
        break;
      case '--architecture':
        console.log(arch());
        break;
      default:
        console.log('Invalid input');
    }
} catch (error) {
    throw new Error('Operation failed');
}
};