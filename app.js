const express = require('express');
const app = express();
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Add Book'
    }
    
    ];
const nav2 = [
    
        {
            link:'/login',name:'Login'
        },
        {
            link:'/signup',name:'Sign Up'
        }
       
    
];
const nav3 = [
    {
        link:'/back',name:'Back'
    }
];

const booksRouter= require('./src/routes/bookroutes')(nav)
const authorsRouter=require('./src/routes/authorroutes')(nav)
const loginRouter=require('./src/routes/loginroutes')(nav2)
const signupRouter=require('./src/routes/signuproutes')(nav2)
const addbooksRouter=require('./src/routes/addbookroutes')(nav)
// const signoutRouter=require('./src/routes/signoutroutes')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbooksRouter);
// app.use('/signout',signoutRouter);
app.get('/',function(req,res)
{
    nav,
    res.render("index",{
        nav,nav2,nav3,
        title: 'Library'
    });
});
app.listen(3423);