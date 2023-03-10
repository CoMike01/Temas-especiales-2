const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

const DEFAULT_LIMIT = 20;


router.get('/', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const teachers = [];

  for (let i = 0; i < limit; i++) {
    const teacher = {
      id: `0000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: getRandomIntInclusive(),
      email: faker.internet.email(),
      tel: `0000000000${i + 1}`,
      address: faker.name.lastName() + '-' + faker.random.numeric()
    };
    
    teachers.push(teacher);
  }

  res.send(teachers);
});
app.get('/random', (_, res) => {
  res.send({
    age: getRandomIntInclusive(26, 99)
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    message: `searching the id: ${id}`
  });
});
 function age(AGE26-){
 return AGE26- >=26 : age (AGE26 - 1) +age(AGE26 -2); } 
function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1 )+ min);
}


module.exports = router;
