// seed.js
const mongoose = require('mongoose');
const faker = require('@faker-js/faker').faker;
const User = require('./User'); // Import your User model
const ConnectionRequest = require('./ConnectionRequest'); // Import your ConnectionRequest model

// Function to generate random users
const generateUsers = (num) => {
  const users = [];
  for (let i = 0; i < num; i++) {
    users.push({
      firstName: "user"+faker.person.firstName(),
      lastName: "user"+faker.person.lastName(),
      emailId: faker.internet.email(),
      password: 'Strongpassword!' + faker.number.int({ min: 1000, max: 9999 }), // Generate random password
      age: faker.number.int({ min: 18, max: 65 }),
      gender: faker.helpers.arrayElement(['male', 'female', 'other']),
      photoUrl: faker.image.avatar(),
      about: faker.lorem.sentence(),
      skills: [faker.hacker.noun(), faker.hacker.noun(), faker.hacker.noun()],
    });
  }
  return users;
};

// Function to generate random connection requests
const generateConnectionRequests = (users) => {
  const connectionRequests = [];
  for (let i = 0; i < users.length - 1; i++) {
    connectionRequests.push({
      fromUserId: users[i]._id,
      toUserId: users[i + 1]._id,
      status: faker.helpers.arrayElement(['ignored', 'interested', 'accepted', 'rejected']),
    });
  }
  return connectionRequests;
};

// Connect to MongoDB
const connectURL = process.env.MONGO_URI || "mongodb://localhost:27017/InternetFusion"
mongoose.connect(connectURL);

mongoose.connection.once('open', async () => {
  console.log('Connected to the database');

  try {
    // Generate random users and insert them into the database
    const users = generateUsers(100); // You can specify how many users you want to create
    const createdUsers = await User.insertMany(users);

    // Generate connection requests
    const connectionRequests = generateConnectionRequests(createdUsers);

    // Insert connection requests into the database
    await ConnectionRequest.insertMany(connectionRequests);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error occurred during seeding:', err);
  } finally {
    mongoose.connection.close();
  }
});
