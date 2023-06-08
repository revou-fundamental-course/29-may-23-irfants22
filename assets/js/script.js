var nama = prompt("Masukkan nama anda!");
document.getElementById("nama").innerText = nama;

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const pesan = document.forms["message-form"]["pesan"].value;
    const phone = document.forms["message-form"]["telp"].value;
    const email = document.forms["message-form"]["e-mail"].value;

    if (name == "" || email == "" || phone == "" || pesan == "") {
        alert("Diharuskan mengisi semua kotak form!!!");
        return false;
    }

    setSenderUI(name, email, phone, pesan);

    return false;
}

function setSenderUI(name, email, phone, pesan) {
    document.getElementById("sender-fn").innerHTML = name;
    document.getElementById("sender-em").innerHTML = email;
    document.getElementById("sender-tl").innerHTML = phone;
    document.getElementById("sender-ms").innerHTML = pesan;
}