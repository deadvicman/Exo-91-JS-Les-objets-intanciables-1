let Personne = function (lastName, firstName, dateOfBirth, placeOfBirth) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;

    this.getFullInfo = function() {
        return `La personne s'appelle ${this.firstName} ${this.lastName}, elle est né(e) le ${this.dateOfBirth} à ${this.placeOfBirth}.`
    }

    this.setBirth = function (date,place) {
        this.dateOfBirth = date;
        this.placeOfBirth = place;
    }
}

Coralie = new Personne("Ledieu", "Coralie", "27/05/1988", "Cambrai");
Victorien = new Personne("Bail", "Victorien", "15/09/1985","Avesnes sur Helpe");

document.getElementsByClassName("last-name")[0].innerText = Coralie.lastName;
document.getElementsByClassName("last-name")[1].innerText = Victorien.lastName;
document.getElementsByClassName("first-name")[0].innerText = Coralie.firstName;
document.getElementsByClassName("first-name")[1].innerText = Victorien.firstName;
document.getElementsByClassName("date-of-birth")[0].innerText = Coralie.dateOfBirth;
document.getElementsByClassName("date-of-birth")[1].innerText = Victorien.dateOfBirth;
document.getElementsByClassName("place-of-birth")[0].innerText = Coralie.placeOfBirth;
document.getElementsByClassName("place-of-birth")[1].innerText = Victorien.placeOfBirth;

document.getElementsByClassName("get-full-info")[0].innerText = Coralie.getFullInfo();
document.getElementsByClassName("get-full-info")[1].innerText =Victorien.getFullInfo();

Coralie.setBirth("27/05/1988", "Cambrai");
victorien.setBirth("15/09/1985", "Avesnes sur Helpe" );
document.getElementsByClassName("set-birth")[0].innerText = coralie.getFullInfo();
document.getElementsByClassName("set-birth")[1].innerText = victorien.getFullInfo();