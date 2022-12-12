SELECT
  cohorts.name,
  COUNT(students.id) AS total_students
FROM cohorts
JOIN students
  ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
  HAVING COUNT(students.id) >= 18
ORDER BY COUNT(students.id) DESC
;