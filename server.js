var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article1':{
    title: 'Uk page 1 article',
    heading:'This is article 1 using external css',
    date:'date 1',
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
},
'article2':{ 
    title: 'Uk page 2 article',
    heading:'This is article 2 using external css',
    date:'date 2',
    para:` <p>
                Just a demo content.Just a demo content.
            </p>
            <p>
                hey all say heloooooooooooooooooooooooooo.
            </p>
        </div>
        <hr/>
        <div>
            <a href="https://www.facebook.com/">Facebook login here</a>
        </div>`},
'article3':{
    title: 'Uk page 3 article',
    heading:'This is article 3 using external css',
    date:'date 3',
    para:` <p>
                Just a demo content.Just a demo content.
            </p>
            <p>
                hey all say heloooooooooooooooooooooooooo.
            </p>
        </div>
        <hr/>
        <div>
            <a href="https://www.facebook.com/">Facebook login here</a>
        </div>`},
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
        <link href="/ui/style.css" rel="stylesheet" />
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

app.get('/:articlename', function(req,res)
{
    //articlename==article1
    var articlename=req.params.articlename;
   res.send(createtemplate(articles[articlename])); 
});

//app.get('/article2', function(req,res)
//{
  //  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));  
//});

//app.get('/article3', function(req,res)
//{
//  res.sendFile(path.join(__dirname, 'ui', 'article3.html')); 
//});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
