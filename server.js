const express = require('express');

function createServer() {
    const app = express();

    
    app.use(express.json());

    app.post('/', (req, res) => {
        const { content } = req.body;

        if (!content) {
            // Respond with 400 error if "content" field is missing
            return res.status(400).json({ error: "'content' field is required" });
        }

        // Respond with the "content" field
        res.status(200).json({ content });
    });

    return app; // Return the configured Express app
}

module.exports = createServer;


if (require.main === module) {
    const app = createServer();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
