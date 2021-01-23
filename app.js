const express = require('express');
const app = express();
const port = process.env.PORT || 3423;

const nav = [
    {
        link:'/admin',name:'User'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/add',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
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
            link:'/userbooks',name:'Books'
        },
        {
            link:'/userauthors',name:'Authors'
        },
    
];

const booksRouter= require('./src/routes/bookroutes')(nav)
const authorsRouter=require('./src/routes/authorroutes')(nav)
const loginRouter=require('./src/routes/loginroutes')(nav2)
const signupRouter=require('./src/routes/signuproutes')(nav2)
const addbooksRouter=require('./src/routes/addbookroutes')(nav)
const adminRouter= require('./src/routes/adminroutes')(nav)
const userRouter= require('./src/routes/userroutes')(nav3)
const userbookRouter= require('./src/routes/userbookroutes')(nav3)
const userauthorRouter= require('./src/routes/userauthorroutes')(nav3)

const addauthorRouter=require('./src/routes/addauthorroutes')(nav)
const addcontentRouter=require('./src/routes/addcontentroutes')(nav)
const updatebookRouter=require('./src/routes/updatebookroutes')(nav)
const updatebookformRouter=require('./src/routes/updateformroutes')(nav)
const updateauthorRouter=require('./src/routes/updateauthorroutes')(nav)



 const signoutRouter=require('./src/routes/signoutroutes')(nav)



app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/add',addbooksRouter);
app.use('/admin',adminRouter);
app.use('/addauthor',addauthorRouter);
app.use('/addcontent',addcontentRouter);
app.use('/updatebook',updatebookRouter);
app.use('/updateauthor',updateauthorRouter);
app.use('/user',userRouter);
app.use('/userbooks',userbookRouter);
app.use('/userauthors',userauthorRouter);


app.use('/updateform',updatebookformRouter);

// app.use('/delete',addbooksRouter);


 app.use('/signout',signoutRouter);
app.get('/',function(req,res)
{
    nav,
    res.render("index",{
        nav,nav2,nav3,
        title: 'Library'
    });
});
app.listen(port,()=>{console.log("Server ready at "+ port)});