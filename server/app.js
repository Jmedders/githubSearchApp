const express = require("express");
app = express();
port = process.env.PORT || 5000;
cors = require("cors");
const formatUrl = require("./utils/formatUrl");
const cache = require("./utils/cache");

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

// cache object
const cachedResults = {};

app.get("/", async (req, res) => {
  const { repositoryName, sortBy, filter } = req.query;
  // format a key to cache by
  const cacheBy = `${repositoryName}+${sortBy}+${filter ? filter : ""}`;
  //// grab the url based upon the request body
  const formattedUrl = formatUrl(req.query);
  // grab results, that are either stored in cache or newly fetched
  const result = await cache(cachedResults, cacheBy, formattedUrl, res);
  // if results, send to frontend
  if (result) {
    res.send({ response: result });
  }
});
