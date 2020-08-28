const express = require("express");
app = express();
port = process.env.PORT || 5000;
cors = require("cors");
const formatUrl = require("./utils/formatUrl");

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", async (req, res) => {
  const { repositoryName, sortBy, filter } = req.query;
  //// grab the url based upon the request body
  const formattedUrl = formatUrl(req.query);
  console.log(formattedUrl);
});
