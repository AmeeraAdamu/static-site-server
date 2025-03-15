const express = require("express");
const app = express();

app.use(express.static("public")); // Serve static files from 'public' folder

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});

// Add this to test if the server is responding
app.get("/", (req, res) => {
    res.send("Hello, your server is working!");
});
