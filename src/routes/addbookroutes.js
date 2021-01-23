const express = require('express');
const addbooksRouter = express.Router();
const bookdata = require('../model/bookdata');
const multer= require('multer')
const storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./public/images');
    },
    filename:function(req,file,callback){
        callback(null,Date.now() + file.originalname);
    },
});

const upload = multer({
    storage:storage,
    limits:{
        fieldSize:1024 * 1024 *3,
    },
})



function router(nav)
{
    
     addbooksRouter.get('/',function(req,res){
         res.render("addbooks",{
             nav,
             title:'Library'
         });
     });
    //  addbooksRouter.get('/updatebooks',function (req,res) {
    //      res.render("updatebook",{
    //          nav,
    //          title:'Library'
    //      });
        
    //  });
   
    addbooksRouter.post('/addbook',upload.single('image'),function(req,res){
        console.log(req.file);
         var item={
       title:  req.body.title,
       author:  req.body.author,
       genre: req.body.genre,
       image:  req.file.filename,
       desc: req.body.desc
         }
        var book = bookdata(item);
        book.save();//saving to the database
        res.redirect('/books');
    });


    addbooksRouter.get('/delete/:i', function(req,res){
        const id = req.params.i
        bookdata.deleteOne({_id:id})
        .then(function(){
            res.redirect('/books');
        })
    
    });
    
    // addbooksRouter.post('/updatebooks/:i', function(req,res){
    //     var id = req.params.i
    //     var item = { $set : req.body }
    //     bookdata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.redirect('/books');
    //         }
    //     });
    // });
    


    // addbooksRouter.get('/delete/:id',function(req,res){
    //     const id= req.params.id
    //     bookdata.deleteOne({_id:id})
    //     .then(function(){res.render("books",{
    //         nav,
    //         title: 'Library',
    //         books
    //     });

    //     })
    // })
      return addbooksRouter;
    
}


module.exports = router;