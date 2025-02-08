# portfolio-website
**Overview**

This is a full-stack portfolio website built using the MERN stack (MongoDB, Express, React, Node.js). It features a dynamic frontend, a backend for managing content, and authentication.

 **Tech Stack**

**Frontend**

*   React.js
*   React Router
*   Axios
*   CSS for styling

**Backend**

*   Node.js
*   Express.js
*   MongoDB Atlas
*   Mongoose (for database modeling)
*   JWT (for authentication)
*   Bcrypt (for password hashing)

**Deployment**

*   Frontend: Netlify
*   Backend: Vercel
*   Database: MongoDB Atlas

 **Features**

*   ✅ Responsive Portfolio Website
*   ✅ Dynamic Blog Management
*   ✅ Authentication System (JWT)
*   ✅ Services & Team Management
*   ✅ Contact Form Handling

 **Setup Instructions**

 **Clone the Repository**
 ```bash
 git clone https://github.com/siddiqua14/portfolio-website.git
cd portfolio-website
```
**Setup the Backend (Express.js)**

```bash
cd backend
npm install
```

*   Configure `.env` file in `backend/`:

    ```
    MONGO_URI=your_mongodb_atlas_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    ```

*   Run Backend Server:

    ```
    npm start
    ```

    The backend should now be running on `http://localhost:5000`

 **Setup the Frontend (React.js)**

cd ../frontend
npm install
text

*   Start React Development Server:

    ```
    npm start
    ```

    The frontend should now be running on `http://localhost:3000`