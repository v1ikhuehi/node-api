const Loan = require("../models/loanModel");

const getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find({});
        res.status(200).json(loans);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const createLoan = async (req, res) => {

    const {name, amount, interest, duration} = req.body;
    try {
        const loan = await Loan.create({name, amount, interest, duration});
        res.status(201).json(loan);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getLoanById = async (req, res) => {
    const {id} = req.params;
    try {
        const loan = await Loan.findById(id);  
        res.status(200).json(loan);
    } catch (error) {
        res.status(500).json({message: error.message})
    }}

module.exports = {getAllLoans, createLoan, getLoanById};