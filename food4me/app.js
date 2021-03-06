var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session')
require('dotenv').config();
const dbConnectionTest = require('./utils/dbConnectionTest')

var localsCheck = require('./middlewares/localsCheck');
var cookieCheck = require('./middlewares/cookieCheck');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/products');
var adminRouter = require('./routes/adminRouter');
var superAdmin = require('./routes/superAdmin')


var app = express();
app.use(methodOverride('_method'));
dbConnectionTest();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret : "Secreto!!"
}));

app.use(cookieCheck);
app.use(localsCheck);

/* rutas */
app.use('/', indexRouter);
app.use('/products',productRouter)
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/superadmin', superAdmin);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
