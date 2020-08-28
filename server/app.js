const express = require("express");
app = express();
port = process.env.PORT || 5000;
cors = require("cors");

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", async (req, res) => {
  const { repositoryName, sortBy, filter } = req.query;
  console.log(repositoryName, sortBy, filter);
  res.send({ response: "found" });
});
