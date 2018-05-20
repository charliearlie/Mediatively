const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes/index');
const users = require('./routes/users');
const movies = require('./routes/movies');
const shows = require('./routes/shows');
const person = require('./routes/person');

const app = express();

const movieSchema = require('./schemas/movieSchema');
const tvSchema = require('./schemas/tvSchema');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin:true,credentials: true}));

app.use('/movie', graphqlHTTP({
  schema: movieSchema,
  graphiql: true,
}));

app.use('/show', graphqlHTTP({
  schema: tvSchema,
  graphiql: true,
}));

app.use('/', index);
app.use('/users', users);
app.use('/movies', movies);
app.use('/shows', shows);
app.use('/person', person);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
