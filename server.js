const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Idi mana ATTENDANCE DATA - Students list store avthundi ikkada
let students = [];

app.get('/', (req, res) => {
  res.send('Attend-Ease Attendance Backend Running 🚀');
});

// ATTENDANCE ki kottha Student add cheyyadaniki
app.post('/add-student', (req, res) => {
  const { name, rollNo } = req.body;
  students.push({ name, rollNo, attendance: 0 });
  res.json({ message: 'Student Added to Attendance Successfully', data: students });
});

// Andaru Students Attendance list chudataniki
app.get('/students', (req, res) => {
  res.json(students);
});

app.listen(5000, () => {
  console.log('Attendance Backend running on http://localhost:5000');
});
