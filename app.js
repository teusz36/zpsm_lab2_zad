const { forEach } = require('lodash');
var _ = require('lodash');

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}

const licz_srednia = function () {
    let srednia_wazona = 0;
    let suma_wag = 0;
    for (let i = 0; i < user.allGrades.length; i++) {
        let srednia = 0;
        for (let j = 0; j < user.allGrades.at(i).grades.length; j++) {
            srednia += user.allGrades.at(i).grades.at(j);
        }
        srednia /= user.allGrades.at(i).grades.length;
        srednia_wazona += srednia * user.allGrades.at(i).weight;
        suma_wag += user.allGrades.at(i).weight;
    }
    srednia_wazona /= suma_wag;
    console.log(user.name, user.surname, srednia_wazona);
}

licz_srednia();

console.log(_.find(user.allGrades, { 'weight': 1 }));


















setTimeout(function () {
    process.exit();
}, 60000);