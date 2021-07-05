// import
const fs = require(`fs`);
const chalk = require(`chalk`);
const vtr = require(`validator`);
const { stdout } = require("process");
// akhir import





// chalk
const KESALAHAN = chalk.red.inverse.bold;
const BENAR = chalk.green.inverse.bold;
// akhir chalk





//function module
const daftarSw = (nama, kelas, email) => {
    const obj = {
        nama,
        kelas,
        email
    }
    return obj;
}

const daftarDanUp = (nama, kelas, email) => {
    let data = null;
    data = JSON.parse(fs.readFileSync(`data/contact.json`).toString());

    const duplikat = data.find((data) => data.nama === nama);
    if(duplikat) {
        console.log(KESALAHAN` sudah ada, gunakan yang lain `);
        return false;
    }

    if (!vtr.isEmail(email)) {
        console.log(KESALAHAN` email salah `)
        return false;
    }

    data.unshift(daftarSw(nama, kelas, email));
    if (data.length > 3) { data.pop() }

    // write filesynch (menuliskan string ke file secara synchronous)
    try {
        fs.writeFileSync(`data/contact.json`, JSON.stringify(data));
    } 
    catch (e) { console.log(e); }

    console.log(BENAR` Data berhasil di input `)
}








// EXPORT
module.exports = {daftarDanUp};







// sekali readline dibuat maka harus ada rl.close() agar command line nya tidak terus menerus berjalan tanpa berhenti
// const readline = require(`readline`);
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: stdout,
// });

// rl.close();