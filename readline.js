
const validator = require('validator');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const fs = require('fs');
// const { mkdir } = require('node:fs');
const rl = readline.createInterface({ input, output });

if (!fs.existsSync('data/contacts.json')){
    fs.mkdirSync("data");
    fs.writeFileSync("data/contacts.json", '[]');
} 

rl.question('What is your name? ', (name) => {
    rl.question('Whar is your phone number? ', (number) => {
        rl.question('What is your email? ', (email) => {
            const valNumber = validator.isMobilePhone(number,['id-ID']);
            const data = {name, number, email};  
            const file = fs.readFileSync("data/contacts.json", "utf-8")
            const contacts = JSON.parse(file);
            
            console.log(`Your name ${name}`);
            if (valNumber) {
                console.log(`Your number ${number}`);
            } else {
                console.log('Your number is false');
                
            }
            const valEmail = validator.isEmail(email);
            if (valEmail) {
                console.log(`Your number ${email}`);
            } else {
                console.log('Your email is false');
            }


        
            contacts.push(data);
            fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));


            rl.close();
          });
      });
});