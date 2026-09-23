const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    position: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    loginAttempts: {
        type: Number,
        default: 0
    },

    lockUntil: {
        type: Date,
        default: null
    }
});


const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;




