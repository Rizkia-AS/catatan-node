// mengambil argumen dari command line/terminal
// variabel process menyimpan semua data berkenaan dengan proses yang terjadi di dalam node js ketika aplikasi dijalankan

// process.argv berisi argumen yang dikirimkan oleh command line ketika aplikasi dijalankan
// console.log(process.argv[2]);

// - import
const {daftarDanUp} = require(`./assets/js/function_modul.js`);
// akhir import


// NPM yargs
const yargs = require(`yargs`);

// console.log(yargs.argv);

yargs.command({
    command: `add`,
    describe: `menambahkan kontak baru`,
    builder: {
        nama : {
            describe : `Nama`,
            demandOption : true,
            type : `string`
        },
        kelas: {
            describe: `Kelas`,
            demandOption: true,
            type: `string`
        },
        email: {
            describe: `email`,
            demandOption: true,
            type: `string`
        }
    },
    handler(argv) {

        daftarDanUp(argv.nama, argv.kelas, argv.email);
    },
});

yargs.parse();













// RUN
// if (!fs.existsSync(`data/Contact.json`)) {
//     fs.writeFileSync(`data/contact.json`, `[]`, `utf-8`);
// }

// daftarDanUp();
// bertanya();