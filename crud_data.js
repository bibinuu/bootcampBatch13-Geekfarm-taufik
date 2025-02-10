const fs = require('fs')

// save data
function saveContact (data) {
    if (!fs.existsSync('data/contacts.json')){
        fs.mkdirSync("data");
        fs.writeFileSync("data/contacts.json", '[]');
    }
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(data);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
}



module.exports = {
    saveContact,
    readContact,
};