require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 8088;

console.log('PORT', PORT);

app.set('trust proxy', true);

app.use(cookieParser());


app.use(session({  // 2
  secret: 'keyboard cat',  // 암호화
  resave: false,
  saveUninitialized: true,
  // name: 'chatbot-session',
  cookie: {
    secure: false,
    httpOnly: true,
  },
}));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const staticFilePrefixes = ['/', '/cb', '/kr', '/cn', '/cb/kr', '/cb/cn', '/static', '/cb/static'];
staticFilePrefixes.forEach((p) => {
  app.use(p, express.static(path.join(__dirname, 'public')));
});

// app.use(globalErrorHandlerMiddleware);
app.get('/',(req, res)=>{
  console.log('get/');
  res.send("app.server")
})

app.listen(PORT, ()=>console.log('app.js started'))

global.testmode = true;
global.builder_host = 'http://localhost:2580';
global.count = 1;
