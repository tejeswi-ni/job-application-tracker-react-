# 💼 Job Application Tracker

A responsive **React-based job application tracking dashboard** that helps users organize, monitor, and manage their job applications from a single interface.

Users can add, edit, delete, search, filter, sort, and view detailed job applications while tracking their application progress through different stages.

🚀 **Live Demo:** [https://job-application-tracker-react-ptam-nine.vercel.app/](https://job-application-tracker-react-ptam-nine.vercel.app/)

---

## ✨ Features

### 📋 Application Management

* Add new job applications
* Edit existing applications
* Delete applications
* View detailed information about each application
* Track application status and progress

### 🔎 Search, Filter & Sort

* Search applications by:

  * Company name
  * Job role
  * Location
* Filter applications by application status
* Sort applications by:

  * Newest
  * Oldest
  * Company A-Z
  * Company Z-A

### 📊 Dashboard

* Total applications count
* Applications by status
* Interview tracking
* Offer tracking
* Rejected application count
* Visual application progress tracking

### 🛡️ User Experience

* Form validation for required fields
* Empty states when no applications are available
* Empty states when search or filter results have no matches
* Handling for missing applications
* Handling for missing job links
* Responsive design for desktop and mobile devices
* Dark and light mode

### 💾 Data Persistence

* Application data is stored using browser `localStorage`
* Data remains available after page refreshes
* No backend database is required

---

## 🛠️ Tech Stack

| Technology       | Purpose                                 |
| ---------------- | --------------------------------------- |
| **React**        | Building the user interface             |
| **Vite**         | Development server and production build |
| **JavaScript**   | Application logic                       |
| **React Router** | Client-side routing and dynamic pages   |
| **CSS**          | Styling, responsive layouts, and themes |
| **localStorage** | Client-side data persistence            |
| **Vercel**       | Deployment                              |

---

## 📸 Screenshots

### 📊 Dashboard

![Dashboard](./public/screenshots/dashboard.png)

### 📋 Applications

![Applications](./public/screenshots/applications.png)

### ➕ Add Job

![Add Job](./public/screenshots/addjob.png)

### 🔎 Job Details

![Job Details](./public/screenshots/jobdetails%20.png)

---

## 📂 Project Structure

```text
job-tracker/
│
├── public/
│   └── screenshots/
│       ├── addjob.png
│       ├── applications.png
│       ├── dashboard.png
│       └── jobdetails .png
│
├── src/
│   ├── components/
│   │   ├── JobCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── StatusBadge.jsx
│   │   └── StatusProgress.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Applications.jsx
│   │   ├── AddJob.jsx
│   │   └── JobDetails.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vercel.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/tejeswi-ni/job-application-tracker-react-.git
```

### 2. Navigate to the project directory

```bash
cd job-tracker
```

### 3. Install dependencies

```bash
npm install
```

---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Open the local development URL displayed in the terminal.

Usually:

```text
http://localhost:5173
```

---

## 🧭 Application Routes

| Route               | Description                            |
| ------------------- | -------------------------------------- |
| `/`                 | Dashboard                              |
| `/applications`     | View all job applications              |
| `/applications/:id` | View details of a specific application |
| `/add-job`          | Add or edit a job application          |

The application uses **React Router** for client-side navigation and dynamic job detail pages.

---

## 💾 Data Persistence

Job application data is stored locally in the browser using:

```text
localStorage
```

This allows application data to remain available after:

* Refreshing the page
* Navigating between pages
* Restarting the development server

Since the project currently uses browser storage, the data is **device/browser-specific** and is not synchronized with a backend database.

---

## 🎯 Project Goals

This project was built to practice and demonstrate:

* React component development
* React Hooks and state management
* Form handling and validation
* Conditional rendering
* React Router
* Dynamic routes
* CRUD operations
* Searching, filtering, and sorting
* Browser `localStorage`
* Responsive UI development
* Dark and light themes
* Empty-state handling
* Error-state handling
* Deployment with Vercel

---

## 🔮 Future Improvements

Potential improvements for future versions include:

* 🔐 User authentication
* ☁️ Backend database integration
* 🔄 Cloud data synchronization
* ⏰ Application deadline reminders
* 📈 Advanced application analytics
* 📤 Export applications to CSV
* 📄 Pagination for large application lists
* 🔔 Notifications and reminders
* 📱 Further mobile UI optimization

---

## 🚀 Deployment

The application is deployed using **Vercel**.

### Live Application

👉 [https://job-application-tracker-react-ptam-nine.vercel.app/](https://job-application-tracker-react-ptam-nine.vercel.app/)

The project also includes a `vercel.json` configuration to support React Router routes when directly refreshing pages such as:

```text
/applications
/applications/1
```

---

## 👩‍💻 Author

### Tejeswini

CSE Student | React Developer | DSA Enthusiast

This project was built to strengthen frontend development skills by creating a practical application with real-world features such as CRUD operations, filtering, sorting, routing, persistent browser storage, responsive design, and deployment.

---

⭐ **If you found this project useful, feel free to explore the code and try the live demo.**
