const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');
const servicesRoute = require('./routes/services');
const contactRoute = require('./routes/contact');


app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);
app.use('/services', servicesRoute);
app.use('/contact', contactRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
    res.status(404).send('404: Page Not Found');
});
