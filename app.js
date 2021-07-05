// - import
const {fs,bertanya} = require(`./assets/js/function_modul.js`)
// akhir import


// RUN
if (!fs.existsSync(`data/Contact.json`)) {
    fs.writeFileSync(`data/contact.json`, `[]`, `utf-8`);
}

bertanya();