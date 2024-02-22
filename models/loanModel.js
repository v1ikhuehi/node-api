const mongoose = require('mongoose');

const loanSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a product name"]
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    interest: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    }
},
{
    timestamps: true
}
)

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
