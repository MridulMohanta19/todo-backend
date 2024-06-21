Sure! Below is a proper `README.md` file for the backend part of your project.

```markdown
# To-Do List Application Backend

This is the backend for the To-Do List application, built with Node.js and SQLite. It provides a RESTful API to handle CRUD operations for tasks, including creating, reading, updating, and deleting tasks.

## Features

- Retrieve all tasks.
- Create a new task.
- Retrieve a single task by its ID.
- Update an existing task.
- Delete a task.

## Technologies Used

- Node.js
- Express.js
- SQLite
- Sequelize (ORM for SQLite)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have the following software installed on your machine:

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-list-backend.git
   cd todo-list-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the SQLite database**:
   Sequelize will handle the database setup for you. Ensure that the `config/config.json` file is configured correctly.

4. **Run the migrations**:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the server**:
   ```bash
   npm start
   ```

   This will start the server and it will be accessible at [http://localhost:3000](http://localhost:3000).

## API Endpoints

The backend provides the following API endpoints:

- **GET /todos**: Retrieve all tasks.
- **POST /todos**: Create a new task.
- **GET /todos/:id**: Retrieve a single task by its ID.
- **PUT /todos/:id**: Update an existing task.
- **DELETE /todos/:id**: Delete a task.

### Example Requests

1. **Retrieve all tasks**:
   ```bash
   curl -X GET http://localhost:3000/todos
   ```

2. **Create a new task**:
   ```bash
   curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title": "Sample Task", "description": "This is a sample task."}'
   ```

3. **Retrieve a single task by its ID**:
   ```bash
   curl -X GET http://localhost:3000/todos/1
   ```

4. **Update an existing task**:
   ```bash
   curl -X PUT http://localhost:3000/todos/1 -H "Content-Type: application/json" -d '{"title": "Updated Task", "description": "This is an updated task."}'
   ```

5. **Delete a task**:
   ```bash
   curl -X DELETE http://localhost:3000/todos/1
   ```

## Code Structure

- `app.js`: The main application file that sets up the Express server.
- `models/`: Directory containing the Sequelize models and migrations.
- `routes/`: Directory containing the route definitions for the API endpoints.
- `controllers/`: Directory containing the controller functions that handle the logic for each endpoint.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/) for providing the web framework.
- [Sequelize](https://sequelize.org/) for providing the ORM.
- [SQLite](https://www.sqlite.org/) for the database.

---

Feel free to reach out if you have any questions or need further assistance!
```

Make sure to update the repository URL in the installation section to match your actual repository URL. Additionally, you might want to add more specific details or sections based on your project needs.
