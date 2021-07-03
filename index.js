

// 						NodeJS Modules
/*
1. Core Modules = modul yang sudah dimiliki nodejs di dalam librarynya. tidak perlu eksports dan require

2. Local Modules = modul yang kita bikin sendiri (file js yg kita buat sendiri). perlu eksports dan require

3. Third Party Modules (NPM modules) = modul yang dibuat oleh orang lain. tidak perlu eksports dan require


require()
fungsi require mencari modul dengan urutan sebagai berikut :
1. Core Modules
2. File atau direktori (./ atau / atau ../) atau Local Modules
3. folder`node_modules` untuk Third Party Modules
*/ 

// const fs = require(`fs`) // Core Modules  
// const local = require(`./script.js`); // local module
// const moment = require(`moment`); // TP module / npm module / node_modules

console.log(`helo selamat pagi ini file utama`);

// function require(`path folder yang ingin dijalankan bersamaan`) digunakan untuk memanggil file lain. atau juga digunakan untuk mengimport code dari file lain.
const {helo,nama} = require(`./script.js`);

console.log(nama);

console.log(helo(nama,17));


