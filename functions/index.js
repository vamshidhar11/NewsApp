const functions = require('firebase-functions');
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('659a5ca3b320420398e1ed9101dba8b3');
const express = require('express');

const cors = require('cors')({ origin: true });

const app = express();

// app.use(cors({ origin: true }));

const request = require('request-promise');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

app.get('/helloWorld', async (req, res) => {
  try {
    let v = await request({
      url:
        'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'category=general&' +
        `apiKey=${functions.config().newsapi.key}`
    });
    res.send(v);
  } catch (err) {
    res.status(500).json({ error: err });
    throw err;
  }
});
exports.app = functions.https.onRequest(app);

exports.headlines = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  // const original = req.query.text;
  const { country, category } = JSON.parse(req.body);
  console.log(req.body);
  const url =
    'https://newsapi.org/v2/top-headlines?' +
    `country=${country}&` +
    `category=${category}&` +
    `apiKey=${functions.config().newsapi.key}`;
  try {
    let v = await request({ url });
    cors(req, res, () => res.send(v));
  } catch (err) {
    res.status(500).json({ error: err });
    throw err;
  }
});
