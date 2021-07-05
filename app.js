// mengambil argumen dari command line/terminal
// variabel process menyimpan semua data berkenaan dengan proses yang terjadi di dalam node js ketika aplikasi dijalankan

// process.argv berisi argumen yang dikirimkan oleh command line ketika aplikasi dijalankan
// console.log(process.argv[2]);

// - import
const { daftarDanUp, listSiswa, deleteData} = require(`./assets/js/function_modul.js`);
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
    handler(argv) { daftarDanUp(argv.nama, argv.kelas, argv.email); },
})
.demandCommand();

yargs.command({
    command : `list`,
    describe : `menampilkan semua nama dan email`,
    handler() { listSiswa(); }
});

yargs.command({
    command: `detail`,
    builder : {
        nama : {
            describe : `nama`,
            demandOption : true,
            type: `string`
        }
    },
    describe: `menampilkan informasi lengkap seseorang`,
    handler(argv) { listSiswa(`find`, argv.nama); }
});

yargs.command({
    command: `delete`,
    builder: {
        nama: {
            describe: `nama`,
            demandOption: true,
            type: `string`
        }
    },
    describe: `menghapus siswa dari list`,
    handler(argv) { deleteData(argv.nama); }
});

yargs.parse();