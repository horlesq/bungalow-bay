This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Bungalow Bay

A full-stack web application designed to manage resort operations efficiently. The app provides tools for managing bookings, bungalows, guests, and user accounts. It features a responsive dashboard with real-time data visualization and user-friendly interfaces for day-to-day operations. The project consists of a Next.js-based frontend and a Supabase backend for data storage and authentication.

## Table of Contents

-   [Features](#features)
-   [Usage](#usage)
-   [Technologies](#technologies)
-   [Installation](#installation)
-   [License](#license)
-   [Contact](#contact)

## Features

-   **Dashboard Overview**: View key metrics and insights about resort performance, including bookings, occupancy rates, and sales.
-   **Booking Management**: Create, update, and delete bookings with detailed guest and bungalow information.
-   **Bungalow Management**: Manage bungalows, including adding, editing, and deleting bungalow details.
-   **Guest Management**: Track guest information, including nationality, contact details, and booking history.
-   **User Authentication**: Secure login system for staff with role-based access using NextAuth.js and Google OAuth.
-   **Interactive Charts**: Visualize sales and stay durations with dynamic charts.
-   **Check-In/Check-Out**: Streamlined process for managing guest arrivals and departures.

## Usage

-   **Login/Register**: Staff can log in to access the dashboard.
-   **Manage Bookings**: Navigate to the bookings page to create, edit, or delete bookings.
-   **View Dashboard**: Access the dashboard for an overview of resort performance metrics.
-   **Manage Bungalows**: Add or update bungalow details, including pricing and capacity.
-   **Check-In/Check-Out**: Use the check-in/out feature to manage guest stays efficiently.

## Technologies

-   **Frontend**: Next.js, React, JavaScript (ES6+), Tailwind CSS, Lucide React for icons.
-   **Backend**: Supabase for database and authentication.
-   **Other Tools**: NextAuth.js for authentication, date-fns for date handling.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/horlesq/bungalow-bay.git
```

2. **Navigate to the project directory**:

```bash
cd bungalow-bay
```

3. **Install dependencies**:

```bash
npm install
```

4. **Set up environment variables**:
    - Copy `.env.local.example` to `.env.local` and fill in your Supabase and Google OAuth credentials.
5. **Start the development server**:

```bash
npm run dev
```

6. **Open your browser and navigate to http://localhost:3000 to access the application**.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or feedback, feel free to reach out via:

-   Email: adrian.horlescu@gmail.com
-   Linkedin [Adrian Horlescu](https://www.linkedin.com/in/adrian-horlescu/)
-   GitHub: [Horlesq](https://github.com/horlesq)

---

This frontend is a modified version of a project taught in [The Ultimate React Course 2024](https://www.udemy.com/course/the-ultimate-react-course/)
