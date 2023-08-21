const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoute');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) Midlleware
app.use(morgan('dev'));

app.use(express.json());

// create middleware -> insert middleware function to stack using app.use()
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

// 2) Route Handler

// 3) Route => using middleware
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// : to assign, ? to optisional
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// 4) Start Server

module.exports = app;
