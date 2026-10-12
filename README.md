# 💚 Healers

Healers is a web application that connects donors with patients and helps patients keep a healthy lifestyle. It was built by a team of four during the immersive full-stack program at [ReBoot Kamp (RBK)](https://rbk.org/).

## 🎬 Demo

[![Watch the Healers demo on YouTube](https://img.youtube.com/vi/tioAC7slp20/hqdefault.jpg)](https://www.youtube.com/watch?v=tioAC7slp20)

▶️ [Watch the demo on YouTube](https://www.youtube.com/watch?v=tioAC7slp20)

## ✨ Features

### 🏥 Hospital bills
A patient who can't afford a hospital bill creates a post with:
- the cost and a photo of the bill,
- their phone number,
- a phone number for the hospital, so donors can confirm the bill is real.

Users browse bills from different hospitals and choose which ones to help pay.

### 🥗 Food prescriptions
Dietitians, or anyone who knows healthy recipes, post meals suited to patients with **diabetes**, **high blood pressure** or **colon conditions** (for example, no spicy, hot or fried ingredients). Each post includes a phone number for questions. Recipes are grouped by condition in tabs.

### 👤 Accounts
- Sign up, log in and log out.
- A profile page with your own posts.
- Share buttons for posts.

## 🛠️ Built With

| Layer | Technology |
| --- | --- |
| Frontend | React 16, Material UI, React Router, Axios |
| Backend | Node.js, Express, Multer (image uploads), JSON Web Tokens, Nodemailer |
| Database | MongoDB with Mongoose |
| Testing | Mocha |
| Deployment | Heroku |

## 🗂️ Project Structure

```
Healers/
├── healersapp/          # React frontend
│   └── src/components/  # login, signup, profile, hospital bill, food posts, navbar...
├── server-side/         # Express server (port 8000) and routes
│   └── routes/          # hospost.js, foodpost.js, users.js
├── db/mongo.js          # Mongoose models and connection
└── test/                # Mocha tests: saving, finding, updating, deleting
```

## 🚀 Getting Started

**Requirements:** Node.js v14.4.0 or newer and MongoDB.

```bash
git clone https://github.com/YoumnaSalloum/Healers.git
cd Healers
npm install
```

1. Set your MongoDB connection string in `db/mongo.js`.
2. Start the server:
   ```bash
   cd server-side
   nodemon server.js          # runs on http://localhost:8000
   ```
3. In a second terminal, start the React app:
   ```bash
   cd healersapp
   npm install
   npm start                  # runs on http://localhost:3000
   ```
4. Run the tests from the root folder:
   ```bash
   npm test
   ```

## 👥 Team

| Role | Name |
| --- | --- |
| Product Owner | Amneh Hammami |
| Scrum Master | Youmna Salloum |
| Developers | Mayis Mazin, Lubna HajHussein |

### Who did what
- **Frontend** (components with Material UI): Amneh and Mayis
- **Backend** (Express server and database connection): Youmna and Lubna
- **Schema design, Mocha tests and deployment:** the whole team

## 🔀 Workflow

1. The scrum master created the organization and the repo.
2. Each team member forked the repo and worked on features, fixes and refactors.
3. Every change went through a pull request reviewed by the scrum master for clean, working code.
4. The scrum master requested changes when needed, resolved conflicts, and merged approved pull requests.
