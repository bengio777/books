// 'use strict'
//
// var express = require('express');
// var router = express.Router();
// var knex = require('../db/knex')
// var query = require('./query')
//
//
//
//
//
//
// router.post('/add-book', (req,res,next)=>{
//
//   query.createNewBooks(req.body.bookTitle, req.body.bookGenre, req.body.bookDescription, req.body.bookCoverUrl)
//     .then((data)=>
//     {res.redirect('/books')
//   })
//   .catch((err)=>{
//     return next(err);
//   })
// })
//
// router.get
//
// router.get('/add-book', (req,res,next)=>{
//   // console.log('hello');
//   res.send('hello') });
// // not sure about line below
// //   let bookId = req.params.books_table_Id;
// //
// //   if(!parseInt(bookId)) {
// //     next();
// //   }
// //   query.getBookbyId(bookId)
// //   .then((data)=>{
// //     //what does it need to be below instead of req.user?
// //     res.render('indv-book'), {data: data[0], user: req.user})
// //   })
// //   .catch((err)=>{
// //     console.error("Getting an ERROR from the database");
// //     return next(err);
// //   })
// // })
//
// router.get('/')
//
//
//   console.log(getUser().username)
//     getUser()
//     .insert({
//        username: req.body.newUsername,
//        password: bcrypt.hashSync(req.body.newPassword.toLowerCase(), 10)
//      })
//      .then(function(data){
//        console.log("Putting in THIS HASH: ", bcrypt.hashSync(req.body.newPassword, 10), "for this user:   ", req.body.newUsername, "HERE IS THE SAME HASH AGAIN:  ", bcrypt.hashSync(req.body.newPassword, 10))
//        res.redirect("/")
//      })
// })
//
//
//
//
//
// module.exports = router;
