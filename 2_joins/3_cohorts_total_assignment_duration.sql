SELECT
  SUM(duration)
FROM assignment_submissions
JOIN students
  ON assignment_submissions.student_id = students.id
WHERE cohort_id = (
  SELECT id
  FROM cohorts
  WHERE name = 'FEB12'
)
;