🎓 Quiz Management App

A modern and responsive Quiz Management System built with React.js and Tailwind CSS, designed for seamless interaction between students and lecturers.
This application allows students to take quizzes, view their scores, and stores results locally — while lecturers can log in to view all student submissions in an elegant dashboard.

🚀 Features
👨‍🎓 Student Side

Simple and interactive quiz interface

Auto-calculated scores and performance remarks

Real-time percentage display

Local storage of quiz data (no backend required)

👩‍🏫 Lecturer Dashboard

Secure lecturer login

Displays all submitted quiz results

Each student’s record appears in a separate styled container

View name, registration number, score, percentage, and remarks

Clean, minimal UI powered by Tailwind CSS

🧠 Technologies Used
Technology	Purpose
React.js	Frontend logic and dynamic routing
Tailwind CSS	Styling and responsive layout
LocalStorage API	Persistent client-side data storage
Vite (optional)	Fast React development environment
📸 Screenshots

(You can add screenshots here once you push your project — for example: the quiz page, result page, and lecturer dashboard.)

📁 src/
 ┣ 📂 assets/
 ┣ 📂 components/
 ┣ 📂 pages/
 ┃ ┣ 📜 QuizPage.jsx
 ┃ ┣ 📜 ResultPage.jsx
 ┃ ┣ 📜 LecturerDashboard.jsx
 ┣ 📜 App.jsx
 ┣ 📜 main.jsx

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/<your-username>/<your-repo-name>.git


Navigate into the folder

cd <your-repo-name>


Install dependencies

npm install


Run the development server

npm run dev


Open your browser at
👉 http://localhost:5173

🧩 How It Works

Students log in and take quizzes.

Their results are stored in localStorage as an array of records (quizResults).

The Lecturer Dashboard fetches and displays these results neatly.

The lecturer can log out securely at any time.

🎨 UI Highlights

Gradient backgrounds and card-based layouts

Responsive grid for student results

Smooth hover and transition effects

Clean typography and consistent color palette

🧑‍💻 Author

Ameyaw Williams Kyere
🎓 BSc Computer Science – University of Cape Coast
💡 Passionate about web development, UI/UX, and innovation through tech.

🌐 LinkedIn
 | GitHub

🪪 License

This project is licensed under the MIT License — feel free to use, modify, and enhance it.