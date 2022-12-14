const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const [ execPath, filePath, cohortName ] = process.argv;

const query = {
  text: `
SELECT
DISTINCT teachers.name AS teacher,
  cohorts.name AS cohort
FROM assistance_requests
JOIN teachers
  ON teachers.id = assistance_requests.teacher_id
JOIN students
  ON students.id = assistance_requests.student_id
JOIN cohorts
  ON cohorts.id = students.cohort_id
WHERE cohorts.name = $1
ORDER BY teacher
;`,
  values: [cohortName],
}

pool
  .query(query)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    })
  })
  .catch(err => console.error('query error', err.stack))
  .finally(pool.end())
  .then(() => console.log('>> pool has ended'));
