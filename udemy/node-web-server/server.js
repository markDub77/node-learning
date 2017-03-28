const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');




// middleware
app.use((req, res, next) => {
   var now = new Date().toString();
   var log = `${now}: ${req.method} ${req.url}`;

   console.log(log);
   fs.appendFile('server.log', log + '\n', (err) => {
      if (err) {
         console.log('Unable to append to server.log')
      }
   });
   next();
});

// middleware
app.use((req, res, next) => {
   res.render('maintenance.hbs');
   // no next()
});

// middleware
app.use(express.static(__dirname + '/public'));





hbs.registerHelper('getCurrentYear', () => {
   return new Date().getFullYear();
});

app.get('/', (req, res) => {
   
   //// send a string
   // res.send('Hello Express!');
   
   //// send an object
   // res.send({
   //    name: 'Mark',
   //    likes: [
   //      'sterios',
   //      'games'
   //    ]
   // });

   // render a handlebars template
   res.render('home.hbs', {
      pageTitle: 'Home Page',
      currentYear: new Date().getFullYear(),
      welcomeMessage: 'Welcome'
   });
   
});

app.get('/about', (req, res) => {
   
   // res.send('About Page');
   
   res.render('about.hbs', {
      pageTitle: 'About Page',
      currentYear: new Date().getFullYear()
   });
});

app.get('/bad', (req, res) => {
   res.send({
      errorMessage: 'Unable to handle request'
   });
});


app.listen(3030, () => {
   console.log('Server is up on port 3030')
});
