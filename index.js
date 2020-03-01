const express = require('express');
const bodyParser = require('body-parser');
const dateFormat = require('dateformat');


var items =['item 1', 'item 2', 'item 3'];
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res){
  var date = new Date();
  //var today = dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  var today = dateFormat(date, "dddd, mmmm dS, yyyy"); 
  res.render('list', {value:today, newItem: items});
});

app.post('/', function(req, res){
    var {addItem} = req.body;
    if(addItem != '')
    {
       items.push(addItem);
      res.redirect('/');
      console.log(addItem);
    }
});

app.listen(3000, function(){
  console.log('server listen to port 3000')
})