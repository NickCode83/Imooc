var express = require('express');
var port =  process.env.PORT || 3000;
var app = express();

app.set('views', './views');        //设定视图文件夹位置
app.set('view engine', 'jade');    //设定模板引擎为JADE

app.listen(port);
console.log('imooc started on Port: ' + port);


//index router
app.get('/', function(req, res){

    res.render('index', {
        title: "imooc 首页"
    });
});

//detail router
app.get('/detail', function(req, res){

    res.render('detail', {
        title: "imooc 电影详情页"
    });
});

//admin router
app.get('/admin/movie', function(req, res){

    res.render('admin', {
        title: "imooc 后台录入页"
    });
});

//list router
app.get('/admin/list', function(req, res){

    res.render('list', {
        title: "imooc 列表页"
    });
});