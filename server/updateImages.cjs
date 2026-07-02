require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const Project = require('./models/Project');

async function update() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    await Project.updateOne(
      { title: /Vision Assistant/i }, 
      { $set: { liveUrl: 'https://ocr-for-impaired-user.vercel.app/' } }
    );
    
    console.log('Unipreneur link successfully added to MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

update();
