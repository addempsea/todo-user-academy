import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    title: {
      type: String, required: true, min: 3, max: 70,
    },
    isCompleted: { type: Boolean, default: false },
    user: { type: Schema.ObjectId, required: true, ref: 'user' },
  },
  { timestamps: true },
);

const TodoModel = mongoose.model('todo', todoSchema);

export default TodoModel;
