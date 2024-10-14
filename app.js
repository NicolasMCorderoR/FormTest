var cont_p = 0;

function getRandomPerson() {
    const names = ["Nicolas", "Laura", "Matias", "Carolina", "Sergio",
                   "Susana", "Victor", "Diana", "Luis", "Angel"];
                    
    const ages = [25, 20, 22, 23, 30,
                   28, 34, 65, 89, 35];

    const crys = ["Arañas", "Agujas", "Encierro", "Oscuridad", "Socializar",
                   "Alturas", "Lluvias", "Trabajar", "Calor", "Frio"];
    
    var randomIndex = Math.floor(Math.random() * 10);
    var randomName = names[randomIndex];
    
    randomIndex = Math.floor(Math.random() * 10);
    var randomAge = ages[randomIndex];
    
    randomIndex = Math.floor(Math.random() * 10);
    var randomCry = crys[randomIndex];

    var newOR = { 
        name: randomName, 
        age: randomAge, 
        cry: randomCry 
    };

    return newOR;
}

document.getElementById("form-p").addEventListener('submit', function(event) {
    event.preventDefault();

    var name_p = document.getElementById('name-p').value;
    var age_p = document.getElementById('age-p').value;
    var cry_p = document.getElementById('cry-p').value;

    if (name_p == "") {
        var randomPerson = getRandomPerson();
        name_p = randomPerson.name;
        age_p = randomPerson.age;
        cry_p = randomPerson.cry;
    }

    cont_p++;

    var people = {
        n_p: cont_p,
        name: name_p,
        age: age_p,
        cry: cry_p
    };

    var list_p = document.getElementById('lists-p');
    var new_p = document.createElement('li');
    new_p.textContent = "Persona:" + people.n_p + " Nombre:" + people.name + " Edad:" + people.age + " Miedo:" + people.cry; 
    list_p.appendChild(new_p);

    document.getElementById('name-p').value = '';
    document.getElementById('age-p').value = '';
    document.getElementById('cry-p').value = '';
});

function theme_bKC() {
    var bGC = document.querySelector("body");
    var text_bTheme = document.getElementById('b-theme');
    if (text_bTheme.innerHTML == "Dark") {
        text_bTheme.innerHTML = "Light";

        bGC.style.backgroundColor = "black";
        bGC.style.color = "white";
    } else {
        text_bTheme.innerHTML = "Dark";

        bGC.style.backgroundColor = "white";
        bGC.style.color = "black";
    }
}
