SELECT (
  SELECT COUNT(assignments)
  FROM assignments
) - COUNT(assignment_submissions) AS total_incomplete
FROM assignment_submissions
JOIN students
  ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel'
;