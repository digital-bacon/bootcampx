SELECT COUNT(cohort_id)
FROM students
WHERE cohort_id IN (
  SELECT id
  FROM cohorts
  ORDER BY start_date
  FETCH FIRST 3 ROWS ONLY
)
;