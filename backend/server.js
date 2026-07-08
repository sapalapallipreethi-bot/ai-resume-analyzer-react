const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });


app.post("/analyze", upload.single("resume"), async (req, res) => {

    try {
        const dataBuffer = require("fs").readFileSync(req.file.path);

        const pdfData = await pdfParse(dataBuffer);

        const resumeText = pdfData.text;


        // Temporary AI analysis logic
        let score = 70;

        let suggestions = [];


        if (resumeText.toLowerCase().includes("python")) {
            score += 5;
        } else {
            suggestions.push("Add Python skill to your resume");
        }


        if (resumeText.toLowerCase().includes("project")) {
            score += 5;
        } else {
            suggestions.push("Add more projects");
        }


        suggestions.push("Improve ATS keywords");
        suggestions.push("Add GitHub and LinkedIn links");


        res.json({
            score: score,
            suggestions: suggestions
        });


    } catch(error) {

        res.status(500).json({
            error: "Resume analysis failed"
        });

    }

});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});