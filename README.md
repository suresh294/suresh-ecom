# SureshEcom - My Full Stack E-Commerce Project

Hey! I've built a solid e-commerce experience called **SureshEcom** using the MERN stack (well, Node/Express/React) with a focus on smooth performance and a clean, professional look.

I really wanted to show that I can build high-quality UI and complex state management without relying on heavy UI libraries, so everything you see here is custom-coded using Vanilla CSS and React.

## 🚀 What's Inside?

- **Smooth Shopping**: A dynamic product list where you can search, filter by category, and sort by price without page reloads.
- **Reliable Cart**: I built a custom cart system using React Context. It syncs with the backend but also saves to your browser's local storage so you don't lose your items if you accidentally refresh.
- **Professional Look**: The design is inspired by top e-commerce sites. It's fully responsive and looks great on mobile too!
- **Solid Backend**: A Node.js API with custom validation and error handling to make sure everything runs reliably.
- **Docker Ready**: You can get the whole thing running in seconds with a single command.

## 🛠 Tech I Used

- **Frontend**: React (Functional Components), Vite, Axios (for APIs), Lucide for icons.
- **Backend**: Node.js & Express.
- **DevOps**: Docker & Docker Compose.

## 📦 How to Run it

### The Easiest Way: Docker
If you have Docker installed, just run this in the root folder:
```bash
docker compose up --build
```
Then open your browser to `http://localhost:5173`.

### The Manual Way
If you prefer running it locally with Node:

1. **Start the Backend**:
   ```bash
   cd backend
   npm install
   npm start
   ```
2. **Start the Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 🏗 My Checklist

I made sure to follow all the rules for this assessment:
- [x] Used only **Functional Components**.
- [x] **No UI libraries** like Bootstrap or MUI (all custom CSS!).
- [x] Clean and organized folder structure.
- [x] Meaningful commits in the git history.
- [x] Fully Dockerized with correct port mappings.

Thanks for checking out my work!
