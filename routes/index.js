var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { logo: 'GR', title: 'Galvanize Reads'  });
});


router.post('/add-book', (req,res,next)=>{

  query.createNewBooks(req.body.bookTitle, req.body.bookGenre, req.body.bookDescription, req.body.bookCoverUrl)
    .then((data)=>
    {res.redirect('/books')
  })
  .catch((err)=>{
    return next(err);
  })
})

router.get

router.get('/add-book', (req,res,next)=>{

// not sure about line below
  let bookId = req.params.books_table_Id;

  if(!parseInt(bookId)) {
    next();
  }
  query.getBookbyId(bookId)
  .then((data)=>{
    //what does it need to be below instead of req.user?
    res.render('indv-book'), {data: data[0], user: req.user}
  })
  .catch((err)=>{
    console.error("Getting an ERROR from the database");
    return next(err);
  })
})



module.exports = router;
