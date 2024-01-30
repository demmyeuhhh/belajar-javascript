var siswa = new Object();
siswa.namaDepan = "demian";
siswa.namaBelakang = "najwan";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

var siswa2 = {
    namaDepan : "Alvin",
    namaBelakang : "Sanjaya",
    alamat : "Bandung",
    namaLengkap : function() {
        return this.namaDepan + " " + this.namaBelakang;
    },
};
alert("Nama : " + siswa.namaLengkap());
alert("Nama : " + siswa2.namaLengkap());

//function namaLengkap() {

// // }