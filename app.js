var cont_p = 0;

document.getElementById("form-p").addEventListener('submit', function(event){
    event.preventDefault();

    var name_p = document.getElementById('name-p').value;
    var age_p = document.getElementById('age-p').value;
    var cry_p = document.getElementById('cry-p').value;
    
    const names = ["Nicolas", "Laura", "Matias", "Carolina", "Sergio",
                    "Susana", "Victor", "Diana", "Luis", "Angel"];
    const ages = [25, 20, 22, 23, 30,
                    28, 34, 65, 89, 35];

    const crys = ["Arañas", "Agujas", "Encierro", "Oscuridad", "Socializar",
                    "Alturas", "Lluvias", "Trabajar", "Calor", "Frio"];
    
                    
    if (name_p == ""){
        var random = Math.floor(Math.random() * 10);
        name_p = names[random];
        var random = Math.floor(Math.random() * 10);
        age_p = ages[random];
        var random = Math.floor(Math.random() * 10);
        cry_p = crys[random];
    }

    cont_p ++;

    var people = {
        n_p: cont_p,
        name: name_p,
        age: age_p,
        cry: cry_p
    };

    console.log(people);

    var list_p = document.getElementById('lists-p');
    var new_p = document.createElement('li');
    new_p.textContent = "Persona:" + people.n_p + " Nombre:" + people.name + " Edad:" + people.age + " Miedo:" + people.cry; 
    // new_p.textContent = "Nombre:" + people.name + " Edad:" + people.age + " Miedo:" + people.cry; 
    list_p.appendChild(new_p);

    document.getElementById('name-p').value='';
    document.getElementById('age-p').value='';
    document.getElementById('cry-p').value='';
});

function theme_bKC() {
    var bGC = document.querySelector("body");
    var text_bTheme = document.getElementById('b-theme');
    if (text_bTheme.innerHTML == "Dark") {
        text_bTheme.innerHTML = "Light"

        bGC.style.backgroundColor = "black";
        bGC.style.color = "white";
    } else {
        text_bTheme.innerHTML = "Dark"

        bGC.style.backgroundColor = "white";
        bGC.style.color = "black";
    }
}