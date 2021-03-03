

let username = document.register_form.username;
let email = document.register_form.email;
let lozinka = document.register_form.password;
let ponovljena_lozinka = document.register_form.password_confirm;
let ime = document.register_form.first_name;
let prezime = document.register_form.last_name;
let adresa = document.register_form.address;
let grad = document.register_form.town;
let drzava = document.register_form.country;
let broj_kartice = document.register_form.card_number;

function Provjera_maila(email) {
    let regex = /^[a-z_]+@([a-z]+\.)+[a-z]{2,3}$/g;
    if (regex.test(email)) {
        return true;
    }
    return false
}

function Provjera_lozinke(lozinka) {
    let regex = /^(?=.*[A-z])(?=.*\d)[A-z\d]{6,}$/;
    if (regex.test(lozinka)) {
        return true;
    }
    return false
}

function Provjera_ponovljene_lozinke(lozinka, confirm) {
    if (lozinka == confirm) {
        return true;
    }
    return false;
}

function Provjera_kartice(kartica) {
    let regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    if (regex.test(kartica)) {
        return true;
    }
    return false;
}

function IsAlphanumeric(value) {
    let regex = /[A-z0-9]/g;
    if (regex.test(value)) {
        return true;
    }
    return false;
}
function IsFormValid() {

    username.addEventListener("input", function () {
        let poruka = document.getElementById("username_error");
        if (username.value.length >= 4 && username.value.length <= 10 && IsAlphanumeric(username.value)) {
            poruka.innerHTML = "";
        }
        else {
            poruka.innerHTML = "Ime mora imati najmanje 4 slova,najvise 10, bez brojeva";
        }
    });

    email.addEventListener("input", function () {
        let poruka = document.getElementById("email_error");
        if (Provjera_maila(email.value)) {
            poruka.innerHTML = "";
        }
        else {
            poruka.innerHTML = "Mail mora biti nesto@nesto.com.";
        }
    });

    lozinka.addEventListener("input", function () {
        let poruka = document.getElementById("password_error");
        if (Provjera_lozinke(lozinka.value)) {
            poruka.innerHTML = "";
        }
        else {
            poruka.innerHTML = "Lozinka mora biti duljine barem 6 znakova i sadrzavati barem jedan broj i barem jedno veliko slovo.";
        }
    });

    ponovljena_lozinka.addEventListener("change", function () {
        let poruka = document.getElementById("password_confirm_error");
        if (Provjera_ponovljene_lozinke(lozinka.value, ponovljena_lozinka.value)) {
            poruka.innerHTML = "";
        }
        else {
            poruka.innerHTML = "Lozinke moraju biti jednake.";
        }
    });


    broj_kartice.addEventListener("input", function () {
        let poruka = document.getElementById("card_number_error");
        if (Provjera_kartice(broj_kartice.value)) {
            poruka.innerHTML = "";
        }
        else {
            poruka.innerHTML = "Broja kartice mora sadrzavati samo po 4 brojke i crtice. (1111-2222-3333-4444)";
        }
    });

     console.log(products.options[products.selectedIndex].text);

}

function CheckForm() {
    let content = document.getElementById("content");

    if ((username.value.length >= 4 && username.value.length <= 10 && IsAlphanumeric(username.value))
        && Provjera_maila(email.value)
        && Provjera_lozinke(lozinka.value)
        && Provjera_ponovljene_lozinke(lozinka.value, ponovljena_lozinka.value)
        && Provjera_kartice(broj_kartice.value)) {

        content.innerHTML = "Username: " + username.value + "<br>Email: " + email.value + "<br>Ime: " +
            ime.value + "<br>Prezime: " + prezime.value + "<br>Adresa: " + adresa.value +
            "<br>Grad: " + grad.value + "<br>Postanski broj: " + postal.value + "<br>Drzava: " +
            drzava.value;

    } else {
        content.innerHTML = "Morate unijeti pravilan mail, username, lozinke i broj kartice";
    }


}




IsFormValid();