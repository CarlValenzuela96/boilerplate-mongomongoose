require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema, model } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true }, // String is shorthand for {type: String}
  age: Number,
  favoriteFoods: [{ type: String }],
});

let Person = model('Person', personSchema);

const createAndSavePerson = (done) => {
  let person = new Person({
    name: "carlos",
    age: 12,
    favoriteFoods: ['pera']
  })

  person.save(function (err, data) {
    if (err) done(err)
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create([
    {
      name: "carlos",
      age: 12,
      favoriteFoods: ['pera']
    },
    {
      name: "carlos",
      age: 12,
      favoriteFoods: ['pera']
    }
  ], function (err, people) {
    if (err) done(err);
    done(null, people);
  })
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
