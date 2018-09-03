const { Medicament } = require('../models');

const mongoUploadMed = name => {
    const newMedicament = new Medicament({
        nom: name,
        createdAt: new Date(),
    });

    newMedicament.save()
    .then(newMed => {
        console.log(newMed);
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = mongoUploadMed;