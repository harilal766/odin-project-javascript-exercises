const findTheOldest = function(peopleArray) {
    // initiate oldest lifespan as zero and olders person as null
    let currentOldestPerson = null; let currentOldestLifeSpan = 0;    
    // loop through the array and calculate the lifespan of each person;
    peopleArray.forEach(person => {
        let yod = person.yearOfDeath || new Date().getFullYear();
        let lifespan = yod - person.yearOfBirth ;
        if (currentOldestLifeSpan < lifespan){
            currentOldestLifeSpan = lifespan;
            currentOldestPerson = person;
        }
    });
    console.log(currentOldestPerson);
    return currentOldestPerson;
    // if comes across a lifespan greater than the current one change the oldest person
};

// Do not edit below this line
module.exports = findTheOldest;
