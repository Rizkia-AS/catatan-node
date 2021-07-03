//      NodeJS NPM
/*
npm adalah sebuah tempat dimana para programer nodejs menyimpan modul modul mereka, dan kita dapat menggunakannya
npmjs.com
npm digunakan untuk menyimpan project oper source
*/ 
console.log(`oke`);

const vtr = require(`validator`);
const chalk = require(`chalk`);
const scr = require(`./script.js`);
// const mon = require(``)

// console.log(vtr);

console.log(vtr.isEmail(`rizkia.as.ac@gmail.com`));
console.log(vtr.isMobilePhone(`084548943521`, 'id-ID'));
console.log(chalk.magenta(`andini afrianti`));

scr.helo(`dini`, 12);