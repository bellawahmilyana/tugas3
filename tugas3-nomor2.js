let nilai = prompt("masukkan nilai");

if (nilai > 100) {
        alert("masukkan rentang nilai 1-100");
}
else if (nilai > 89) {
        alert("lulus dengan nilai A");
}
else if (nilai > 74) {
        alert("lulus dengan nilai B");
}
else if (nilai > 59) {
        alert("lulus dengan nilai C");
}
else if (nilai > 49) {
        alert("lulus dengan nilai D");
}
else if (nilai < 0) {
        alert("masukkan rentang nilai 1-100");
}
else {
        alert("tidak lulus");
}
