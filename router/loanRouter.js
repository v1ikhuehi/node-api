const express = require("express");
const { getAllLoans, createLoan, getLoanById } = require("../controller/loanController");

const loanRouter = express.Router();

loanRouter.get('/', getAllLoans);
loanRouter.post('/', createLoan);
loanRouter.get('/:id', getLoanById);
   


module.exports = {loanRouter};