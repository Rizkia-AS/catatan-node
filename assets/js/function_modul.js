// import
const fs = require(`fs`);
const { stdout } = require("process");
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: stdout,
});
// akhir import





// RUN
let data = null;
data = JSON.parse(fs.readFileSync(`data/contact.json`).toString());
// akhir RUN




//function module
function daftarSw(nama, kelas) {
    this.nama = nama,
        this.kelas = kelas
}

const daftarDanUp = (nama, kelas) => {
    data.unshift(new daftarSw(nama, kelas));
    if (data.length > 3) { data.pop() }

    // write filesynch (menuliskan string ke file secara synchronous)
    try {
        fs.writeFileSync(`data/contact.json`, JSON.stringify(data));
    } catch (e) { console.log(e); }
}

// membuat promise
const pertanyaan = (soal) => {
    return new Promise((resolve, reject) => {
        rl.question(`${soal} : `, (jawaban) => { resolve(jawaban); });
    });
}

const bertanya = async () => {
    const nama = await pertanyaan(`Nama`);
    const kelas = await pertanyaan(`Kelas`);

    daftarDanUp(nama, kelas);
    rl.close();
};



// EXPORT
module.exports = {fs, bertanya};