const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(express.json()); // Parses incoming JSON requests

// Sample API route
app.post("/data", (req, res) => {
    console.log(req.body); // Log the JSON data from the request
    res.json({ message: "Data received successfully!", receivedData: req.body });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});

