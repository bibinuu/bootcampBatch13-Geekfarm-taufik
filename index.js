const yargs = require("yargs");
const {
    saveContact,
    readContact,
} = require('./crud_data.js')

// create contact 
yargs.command ({
    command: "add",
    describe: "add new contact",
    builder: {
        name : {
            describe : "contact name",
            demandOption : true,
            type: "string",
        },
        phone : {
            describe : "contact phone",
            demandOption : true,
            type: "string",
        },
        email : {
            describe : "contact email",
            demandOption : false,
            type: "string",
        },
    },
    
    handler(argv){
        const contact = {
            name : argv.name,
            phone : argv.phone,
            email : argv.email,
        }
        saveContact(contact);
    },
});

// read contact



yargs.parse();

