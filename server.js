var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title: 'Uk page 1 article',
    heading:'This is article 1 using embedded/internal css',
    date:'date',
    para:` <p>
                Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.Just a demo content.
            </p>
            <p>
                hey all say heloooooooooooooooooooooooooo.
            </p>
        </div>
        <hr/>
        <div>
            <a href="https://www.facebook.com/">Facebook login here</a>
        </div>`
};



function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var para=data.para;
var HtmlTemplate = `<html>
    <head>
        <title> ${title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <style>
            .internal{
                max-width: 700px;
    margin: 0 auto;
    color: #b7122f;
    padding-top: 100;
    padding-left: 10;
    padding-right: 10;
            }
        </style>
    </head>
    <body>
        <div class="internal">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <div>
            ${date}
        </div>
        <h2>
            ${heading}
        </h2>
        <div>
           ${para}
        </div>
    </body>
</html>
`;
return HtmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1', function(req,res)
{
   res.send(createtemplate(articleone)); 
});

app.get('/article2', function(req,res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article2.html'));  
});

app.get('/article3', function(req,res)
{
  res.sendFile(path.join(__dirname, 'ui', 'article3.html')); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
