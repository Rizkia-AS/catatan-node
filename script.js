// debug
const oke = `oke`;
const n = `dini`;
const u = 17;

const helo = (nama,umur) => console.log(`halo nama saya ${nama}, umur saya ${umur}`);

// module.exports berfungsi untuk mengekspor suatu variabel,objek, atau function agar dapat dijalankan pada file js lain yg menuliskan require pada alamat file js pengekspor 


// module.exports.helo = helo;
// module.exports.nama = n;

// atau bisa juga dengan sekali export dengan langusung mengeksport dengan dibungkus objek

module.exports = {
	helo,
	// pada es6 jika properti dan nilai properti memiliki nama yang sama maka hanya ditulis nama propertinya saja dan akan otomatis berisi sma dengan menuliskan helo : helo,
	nama : n
}