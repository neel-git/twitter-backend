# Assignment Overview

This project is designed to create a scalable backend system using Node.js as the runtime environment and MongoDB as the database. The main objectives are to design MongoDB collections for users and tweets, develop RESTful APIs using Express.js for user registration, posting tweets, and fetching timelines, and implement basic user authentication using JWT tokens. The project also incorporates Domain-Driven Design (DDD) principles and cursor-based pagination for fetching user timelines.

# How to Run the Application

Follow these steps to set up and run the application locally:

1. Clone the repository

`git clone https://github.com/neel-git/twitter-backend`
`cd Healthflex `

2. Install dependencies
   `npm install`

3. Environment variables
   PORT = 3000
   JWT_SECRET=37fe335dc45426f65e2ecbe2c705974547cebcd0c7676ef4573205211268144c

4. Run the application
   `node index.js`

# Dependencies

-> Node.js
-> Express.js
-> Mongoose
-> bcryptjs
-> jsonwebtoken
-> dotenv

# Testing

Using POSTMAN

1. Register a new user
   Endpoint: POST /api/auth/register
   Body :
   {
   "username": "testuser",
   "password": "password123"
   }

2. Login with the registered user:
   Endpoint: POST /api/auth/login
   Body :
   {
   "username": "testuser",
   "password": "password123"
   }

3. Post a tweet:
   Endpoint : POST /api/tweets
   Headers:
   Authorization: Bearer your_jwt_token_here
   Body:
   {
   "text": "Hello World!"
   }

4. Fetch user timeline
   Endpoint: GET /api/users/:userId/timeline
   Headers:
   Authorization: Bearer your_jwt_token_here
   Query Params: (optional)
   cursor: <last_tweet_id>
   limit: 10

# Issues and Troubleshooting

MongoDB connection error:
Ensure MongoDB is running and the MONGO_URI in the .env file is correct.

Missing environment variables:
Ensure all required variables (PORT, MONGO_URI, JWT_SECRET) are set in the .env file.

Invalid JWT token:
Ensure the token is correctly passed in the Authorization header as Bearer your_jwt_token_here.

Dependencies issues:
Run npm install to ensure all dependencies are installed correctly

# Contact Information

Name : Neelkamal
Email : neelkamalsinghthegisb@gmail.com
GitHub : https://github.com/neel-git
