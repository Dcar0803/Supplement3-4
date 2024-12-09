const express = require('express');

/**
 * Creates and configures an Express application with a POST endpoint at the root.
 * 
 * @returns {object} - The configured Express application.
 * 
 * ### Description:
 * This function sets up an Express application with:
 * - JSON body parsing middleware.
 * - A POST endpoint at the root ("/") that:
 *   - Responds with the `content` field from the JSON body if provided.
 *   - Returns a 400 status code with an error message if the `content` field is missing.
 */

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
