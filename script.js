// start segitiga
function keliling() {
    var sisi1 = document.getElementById("sisi1").value;
    var sisi2 = document.getElementById("sisi2").value;
    var sisi3 = document.getElementById("sisi3").value;
    var keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
    var result = document.getElementById("result");
    result.innerHTML = "Kelilingnya adalah : " + keliling;
}

function luas() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const luas = 0.5 * alas * tinggi;

    document.getElementById("hasil").innerHTML = "Luasnya adalah : " + luas;
}
// end segitiga

// start jajargenjang
function kelilingjargen() {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const kelilingjargen = 2 * (sisiA + sisiB);

    document.getElementById("hasil1").innerHTML = "Kelilingnya adalah : " + kelilingjargen;
}

function luasjargen() {
    const a = parseFloat(document.getElementById("a").value);
    const t = parseFloat(document.getElementById("t").value);
    const luasjargen = a * t;

    document.getElementById("hasil2").innerHTML = "Luasnya adalah : " + luasjargen;
}
// end jajargenjang

// reset button
let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});
