// 'use strict'
//
// const express = require('express');
// const router = express.Router();
//
// const query = require('./query')
//
// // ** if ('/:author_id') is correct will be in question for now.
// router.post('/add-author', (req, res, next)=>{
//
//   query.createNewAuthors(req.body.authorFirstN, req.body.authorLastN, req.body.author_bio, req.body.author_1_pic_url)
//     .then((data)=>{
//     res.redirect('/authors')
//   })
//   .catch((err)=>{
//     return next(err);
//   })
// })
//
// // *****Dunno For sure if '/add-author' is correct for this process. Confirm.
// router.get('/add-author', (req,res,next)=>{
//
// //not sure about line below
//     let authorId = req.params.authors_table_id;
//
//     if(!parseInt(authorId)) {
//       next();
//     }
//     query.getAuthorById(authorId)
//     .then((data)=>{
//       res.render('indv-author'), {data: data[0], user: req.user})
//     })
//     .catch((err)=>{
//       return next(err);
//     })
// })
//
// module.exports = router;
