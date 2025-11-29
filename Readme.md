# Recipe Backend

## Description

This project is a backend application for managing recipes. It allows users to create, read, update, and delete recipes through a RESTful API.

## Features

- CRUD operations for recipes (Create, Read, Update, Delete)
- Database integration for persistent storage
- Input validation and error handling

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your chosen database)
- Mongoose (for MongoDB object modeling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LeoAlexThomas/Recipes-Backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Recipe-Backend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up your database configuration in `Database/dbConfig.js`.
5. Start the application:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /api/recipes` - Retrieve all recipes
- `POST /api/recipes` - Create a new recipe
- `GET /api/recipes/:id` - Retrieve a recipe by ID
- `PUT /api/recipes/:id` - Update a recipe by ID
- `DELETE /api/recipes/:id` - Delete a recipe by ID

## License

This project is licensed under the MIT License.
