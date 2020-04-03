const { program } = require('commander');

program
  .command('set')
  .description('Set API key -- Get at https://nomics.com')
  .action(() => console.log('Hello from set'));

program
  .command('show')
  .description('Show API key')
  .action(() => console.log('Hello from show'));

program
  .command('remove')
  .description('Remove API key')
  .action(() => console.log('Hello from remove'));

program.parse(process.argv);
