const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        commentBody: {
            type: String,
            required: true,
            minlength: 1,
        },
        author: {
            type: String,
            required: true,
        },
        character: {
            type: Schema.Types.ObjectId,
            ref: 'Character'
        },
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        // }
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;