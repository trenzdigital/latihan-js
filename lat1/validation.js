// function validasi() {
//     if(document.formulir.namaDepan.value == "") {
//         alert('Masukan nama depan!');
//         return false;
//     }
//     if(document.formulir.namaBelakang.value == "") {
//         alert('Masukan nama belakang');
//         return false;
//     } 
//     return (true);
// }

function validasi() {
    var namaLengkap;
    if(document.formulir.namaDepan.value == "") {
        alert('Masukan nama depan!');
        return false;
    }
    if(document.formulir.namaBelakang.value == "") {
        alert('Masukan nama belakang');
        return false;
    } 

    namaLengkap = namaDepan + ' ' + namaBelakang;
    return (namaLengkap);
}

document.write(namaLengkap);