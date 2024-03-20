const findTheOldest = function(people) {
    return people = people.reduce((oldestPerson, person) => {

        if (oldestPerson.yearOfDeath == undefined) {
            oldestPerson.yearOfDeath = 2024;
        }

        if (person.yearOfDeath  == undefined) {
            person.yearOfDeath = 2024;
            }

        if ((person.yearOfDeath - person.yearOfBirth) > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)) {
            oldestPerson = person;
        }
        return oldestPerson;
    })
}

// Do not edit below this line
module.exports = findTheOldest;
