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
  Person.create(arrayOfPeople, function (err, people) {
    if (err) done(err);
    done(null, people);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, people) {
    if (err) done(err);
    done(null, people);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, people) {
    if (err) done(err);
    done(null, people);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, people) {
    if (err) done(err);
    done(null, people);
  })
};

const findEditThenSave = (personId, done) => {

  Person.findById(personId, function (err, people) {
    if (err) done(err);
    const foodToAdd = "hamburger";
    people.favoriteFoods.push(foodToAdd)
    people.save(function (err, data) {
      if (err) done(err)
      done(null, data);
    })
  })
};

const findAndUpdate = async (personName, done) => {
  const ageToSet = 20;
  let data = await Person.findOneAndUpdate({ name: personName }, { $set: { age: ageToSet } }, { new: true });
  done(null, data);
};

const removeById = async (personId, done) => {
  let data = await Person.findByIdAndRemove(personId)
  done(null, data);
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
