# Node.js API Project

This project is a simple Node.js API that accepts two numbers, adds them together, and returns the result as a JSON response.

## Project Structure

```
node-api-project
├── src
│   ├── app.js            # Entry point of the application
│   ├── routes
│   │   └── add.js       # Route for the addition API
│   └── controllers
│       └── addController.js # Logic for adding two numbers
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd node-api-project
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
node src/app.js
```

The API will be available at `http://localhost:3000/add`.

## API Endpoint

### POST /add

**Request Body:**
```json
{
  "num1": <number>,
  "num2": <number>
}
```

**Response:**
```json
{
  "result": <number>
}
```

## License

This project is licensed under the MIT License.