require('dotenv').config({ path: './server/.env' });
const mongoose = require('mongoose');
const Project = require('./server/models/Project');

async function update() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    await Project.updateOne(
      { title: /Gym Management System/i }, 
      { $set: { imageUrl: '/gym.png' } }
    );
    
    await Project.updateOne(
      { title: /Schex/i }, 
      { $set: { imageUrl: '/schex.png' } }
    );
    
    await Project.updateOne(
      { title: /Vision Assistant/i }, 
      { $set: { imageUrl: '/vision.png' } }
    );
    
    console.log('Images successfully updated in MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

update();
