var siswa = new Object();
siswa.namaDepan = "demian";
siswa.namaBelakang = "najwan";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

alert("Nama : " + siswa.namaLengkap());

//function namaLengkap() {

// // }