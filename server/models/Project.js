const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a project title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a project description'],
    },
    problem: {
      type: String,
      default: '',
    },
    technologies: {
      type: [String],
      required: true,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    githubUrl: {
      type: String,
      default: '',
    },
    liveUrl: {
      type: String,
      default: '',
    },
    contribution: {
      type: String,
      default: '',
    },
    challenges: {
      type: String,
      default: '',
    },
    lessonsLearned: {
      type: String,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
