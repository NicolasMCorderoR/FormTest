var contPeople = 0;
document.getElementById('form-people').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var cry = document.getElementById('cry').value;
    var people = {
        name: name,
        age: age,
        cry: cry
    };
    contPeople ++;
    console.log('Objeto creado: ', people);
    var listPeople = document.getElementById('list-people');
    var newPeople = document.createElement('li');
    newPeople.textContent = 'Persona: ' + contPeople + ' Nombre: ' + people.name + ' Edad: ' + people.age + ' Miedo: ' + people.cry;
    listPeople.appendChild(newPeople);
    document.getElementById('name').value='';
    document.getElementById('age').value='';
    document.getElementById('cry').value='';
});