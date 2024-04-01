const express = require("express");
const dotenv = require("dotenv"); 
dotenv.config();

//CHATGPT CODE
require('dotenv').config();
const axios = require('axios');

// Read API key from the environment variables
const apiKey = process.env.OPENAI_API_KEY;



// Function to send a request to the ChatGPT API
async function chatGPT(prompt) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'text-davinci-002', // Model name (adjust as needed)
                prompt: prompt,
                max_tokens: 150, // Maximum tokens to generate
                temperature: 0.7, // Temperature parameter for randomness in generation
                stop: '\n' // Stop completion at newline character
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        return null;
    }
}

module.exports = chatGPT;

