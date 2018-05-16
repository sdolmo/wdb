// Todo list schema
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});

// Todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
