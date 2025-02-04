
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What is your name? ', (name) => {
    rl.question('Whar is your phone number? ', (number) => {
        rl.question('What is your email? ', (email) => {
            console.log(`Your name ${name}`);
            console.log(`Your phone number ${number}`);
            console.log(`Your email ${email}`);
            rl.close();
          });

      });
});