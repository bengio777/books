'use strict'

const express = require('express');
const router = express.Router();

const query = require('./query')

// ** if ('/:author_id') is correct will be in question for now.
router.get('/:id', (req,res,next)=>{

    let authorId = req.params.author_tableid;

    if(!parseInt(authorId)) {
      next();
    }
    query.get
})
