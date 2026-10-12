
const express = require('express');
const app = express();
const PORT = 3000;

// GET /hello
app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello from college-football-stats!'
  });
});

// GET /project

app.get('/members/:id', (req, res) => {
  const members = [
    {
      id: 1,
      name: 'ธีรภัทร ช่วงชาวนา',
      role: 'Developer / Project Leader'
    }
  ];

  const id = Number(req.params.id);
  const member = members.find((m) => m.id === id);

  if (!member) {
    return res.status(404).json({
      message: 'ไม่พบข้อมูลสมาชิก'
    });
  }

  res.status(200).json(member);
});

app.get('/project', (req, res) => {
  res.json({
    team: 'college-football-stats',
    project: 'เว็บประชาสัมพันธ์การแข่งขันฟุตบอลและติดตามสถิตินักกีฬาในวิทยาลัย',
    problem: 'ช่วยให้ติดตามตารางแข่งขัน ผลการแข่งขัน และสถิตินักกีฬาได้สะดวก',
    users: ['นักศึกษา', 'ครูอาจารย์', 'ผู้ดูแลระบบ'],
    members: [
      {
        id: 1,
        name: 'ธีรภัทร ช่วงชาวนา',
        role: 'Developer / Project Leader'
      }
    ]
  });
});

// GET /members/:id
app.get('/members/:id', (req, res) => {
  const members = [
    {
      id: 1,
      name: 'ธีรภัทร ช่วงชาวนา',
      role: 'Developer / Project Leader'
    }
  ];

  const member = members.find(
    (m) => m.id === Number(req.params.id)
  );

  if (!member) {
    return res.status(404).json({
      message: 'ไม่พบข้อมูลสมาชิก'
    });
  }

  res.json(member);
});

// GET /ideas
app.get('/ideas', (req, res) => {
  res.json({
    endpoints: [
      'GET /hello',
      'GET /project',
      'GET /members/:id',
      'GET /ideas'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});