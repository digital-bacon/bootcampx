SELECT COUNT(*), teachers.name AS name
FROM assistance_requests
JOIN teachers
  ON teachers.id = assistance_requests.teacher_id
GROUP BY name
  HAVING name = 'Waylon Boehm'
;