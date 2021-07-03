//  					NodeJS Core Modules

/*
belajar menggunakan module bawaan NodeJS
1. selalu buka dokumentasi untuk melihat cara penggunaan https://nodejs.org/dist/latest-v14.x/docs/api/
*/ 

// A. file system

// - import
const fs = require(`fs`);
const { stdout } = require("process");


// menuliskan string ke file async

// fs.writeFile(`data/mesage.text`,`coba`, (e) =>{
//     if(e) console.log(e);
//     console.log(`sukses`)
// })


// membaca string ke file async

// const buku =fs.readFileSync(`data/tesfile.txt`,(e,data) => {
//     if(e) throw e;
//     return data;
// })

// membaca string ke file sync

let data = null;
data = JSON.parse(fs.readFileSync(`data/contact.json`).toString());

// B. Readline
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: stdout,
});

rl.question(`Nama : `,(nama) =>{
    rl.question(`Kelas : `, (kelas) => {

        data.unshift(new daftarSw(nama, kelas));
        if(data.length > 3) { data.pop()}

        // write filesynch (menuliskan string ke file secara synchronous)
        try {
            fs.writeFileSync(`data/contact.json`, JSON.stringify(data));
        } catch (e) { console.log(e); }

        rl.close();
    })
})



// C. OS
const os = require(`os`);
console.log(os.type()); 







function daftarSw(nama,kelas) {
    this.nama = nama,
    this.kelas = kelas
} 