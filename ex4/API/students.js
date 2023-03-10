// const router = require('express').Router();
const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

const DEFAULT_LIMIT = 20;

router.get('/', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const students = [];
  let regular = Math.random();
  let holder = Math.random() ;
  
  if((regular>=6.1)&&(regular>=10))
      {
          console.log(`Is regular :${PORT}`);
       }
  else{
      console.log(`Is Holder :${PORT}`);
      }
  
  for (let i = 0; i < limit; i++) {
    const student = {
      id: `0000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),

      age: Math.floor(Math.random()),
      grade: Math.floor(Math.random()),
      email: faker.internet.email(),
      is_regular: regular,
      is_sholder: holder
    };
    
    students.push(student);
  }

  res.send(students);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    message: `searching the id: ${id}`
  });
});

app.get('/random', (_, res) => {
  res.send({
    age: getRandomIntInclusive(18, 28),
    grade: getRandomIntInclusive(1, 9)
  });
});

function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1 )+ min);
}


module.exports = router;
