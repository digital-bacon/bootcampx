const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const [ execPath, filePath, cohortName, limitResults ] = process.argv;

const query = {
  text: `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
FETCH FIRST $2 ROWS ONLY;
`,
  values: [`%${cohortName}%`, (limitResults ? Number(limitResults) : 5)],
}

pool
  .query(query)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack))
  .finally(pool.end())
  .then(() => console.log('>> pool has ended'));
