SELECT
  avg(total_students) AS average_students
FROM (
  SELECT
    count(students) AS total_students,
    cohorts.name AS cohort_name
  FROM students
  JOIN cohorts
    ON cohorts.id = cohort_id
  GROUP BY cohorts.name
) AS totals_table
;