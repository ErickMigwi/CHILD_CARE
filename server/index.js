const express = require('express');
const app = express();
const port = 3500;
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('./Config/sessions')
const cookieParser = require('./Config/cookieParser')
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));

const userRoute = require('./routes/user');
const scheduleRoute = require('./routes/schedule')
app.use(session)
app.use(cookieParser)
app.use("/uploads", express.static("./uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRoute);
app.use('/schedule', scheduleRoute)
app.listen(port, () => {
    console.log(`Running on Port:${port}`);
});
