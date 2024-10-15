
![upscweb](https://github.com/user-attachments/assets/45bba942-3435-456a-a7ba-7e28f9b21183)
# UPSCBEACON Preparation Portal

The UPSCBEACON is a web-based UPSC Preparation Portal platform designed to help aspirants prepare for the UPSC exams. The portal offers resources like current affairs, study materials, and practice tests to enhance exam readiness. Built with the MERN stack (MongoDB, Express.js, React, Node.js), the platform provides an interactive and user-friendly interface for efficient learning.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Current Affairs:** Display daily current affairs fetched from reliable sources.
- **User Authentication:** Secure login and registration system.
- **Study Materials:** Access to various study materials for different subjects.
- **Practice Tests:** Take quizzes and mock tests for exam preparation.
- **Responsive Design:** Mobile-friendly design using Tailwind CSS.
- **Admin Panel:** Admins can manage users, content, and resources.

## Tech Stack
- **Frontend:** React, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **API Integration:** External news API for current affairs
- **Authentication:** JWT for token-based authentication

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/upsc-preparation-portal.git
   cd upsc-preparation-portal
   ```

2. **Install Dependencies**

   For both the client and server, install dependencies:
   ```bash
   # For the backend
   cd server
   npm install
   
   # For the frontend
   cd ../client
   npm install
   ```

3. **Set Up the Environment Variables**

   Create a `.env` file in the `server` directory and add the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NEWS_API_KEY=your_news_api_key
   ```

4. **Run the Application**

   Start both the backend and frontend servers:
   ```bash
   # Start the backend
   cd server
   npm run dev
   
   # Start the frontend
   cd ../client
   npm start
   ```

   The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Configuration

### Backend Configuration
- **MongoDB Setup:** Ensure MongoDB is properly configured and accessible through the `MONGO_URI`.
- **JWT Secret:** Set a secure JWT secret in the `.env` file.
- **News API Key:** Obtain an API key from a news provider and set it in the `.env` file.

### Frontend Configuration
- **API Endpoints:** Configure the base URL for API requests in the frontend to match the backend server's address.

## Usage

1. **User Registration and Login:** Users can sign up and log in to access personalized content.
2. **Current Affairs:** The homepage displays current affairs fetched from external news sources.
3. **Study Materials:** Browse categorized study materials and download resources.
4. **Admin Panel:** Administrators can manage users, add new resources, and update the content.

## API Integration

### User Authentication
The portal uses JWT for authentication. Tokens are stored in HTTP-only cookies to enhance security.

## Contributing

Contributions are welcome! If you have suggestions for improving the project, feel free to open a pull request or issue.

### Steps for Contributing
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
