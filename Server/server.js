const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const userRouter = require('./routes/userRouter')
app.use('/users', userRouter);

app.use((req, res) => {
  console.log('The app.use block ran');
  res.send('Here is a generic response');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});