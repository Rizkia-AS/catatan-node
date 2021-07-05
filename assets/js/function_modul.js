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
    const obj = {nama,kelas,email}
    return obj;
}

const loadData = () => { return JSON.parse(fs.readFileSync(`data/contact.json`).toString()); }

const daftarDanUp = (nama, kelas, email) => {
    let data = null;
    data = loadData();

    if(data.find((data) => data.nama === nama)) {
        console.log(KESALAHAN` sudah ada, gunakan yang lain `);
        return false;
    }

    if (!vtr.isEmail(email)) {
        console.log(KESALAHAN` email salah `);
        return false;
    }

    data.unshift(daftarSw(nama, kelas, email));
    if (data.length > 5) { data.pop() }

    // write filesynch (menuliskan string ke file secara synchronous)
    try {
        fs.writeFileSync(`data/contact.json`, JSON.stringify(data));
    } 
    catch (e) { console.log(e); }
    console.log(BENAR` Data berhasil di input `)
}

const listSiswa = (state,nama) => {
    let datas = null;
    if(state == `find`) { datas = findDatas(nama); } 
    else { datas = loadData();}

    if (datas.length <= 0) { return console.log(KESALAHAN` ${nama} tidak ada `); }

    datas.map((data,i) => {
        console.log(chalk`{bgYellowBright.black ${i + 1}.Nama : ${data.nama}} ==> {bgYellowBright.black Kelas : ${data.kelas}} ==> {bgYellowBright.black Email : ${data.email}}`);
    });
}

const findDatas = (nama) => {
    datas = loadData().filter((data) => data.nama.toLowerCase().includes(nama.toLowerCase()));
    return datas
}


const deleteData = (nama) => {
    // let pos = null;
    // loadData().forEach((d,i) => {
    //     if(d.nama == nama) { pos = i; }
    // });

    // const datas = loadData();
    // datas.splice(pos,1);

    // atau bisa juga dengan metode filter
    let datas = loadData().filter(data => data.nama.toLowerCase() !== nama.toLowerCase());

    if(datas.length == loadData().length) { return console.log(KESALAHAN` ${nama} tidak ada `);}

    try {
        fs.writeFileSync(`data/contact.json`, JSON.stringify(datas));
        console.log(BENAR` Data ${nama} berhasil dihapus `)
    } catch (e) { console.log(e); }
}




// EXPORT
module.exports = { daftarDanUp, listSiswa, deleteData};







// sekali readline dibuat maka harus ada rl.close() agar command line nya tidak terus menerus berjalan tanpa berhenti
// const readline = require(`readline`);
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: stdout,
// });

// rl.close();