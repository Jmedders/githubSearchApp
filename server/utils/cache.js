const fetch = require("node-fetch");

async function cache(cachedResults = {}, arg, formattedUrl, res) {
  // if the arg has come in before, use cache
  if (cachedResults[arg]) {
    return cachedResults[arg];
  }
  // otherwise fetch the query
  try {
    const data = await fetch(formattedUrl);
    //// name the result
    const result = await data.json();
    //// add it to cachedResults
    cachedResults[arg] = result;
    //// return result
    return result;
  } catch (err) {
    // github had an error, send it to the frontend
    return res.status(404).json({ error: err.message });
  }
}
module.exports = cache;
