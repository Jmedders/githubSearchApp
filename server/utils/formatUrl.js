// simple helper function to format a github request
function formatUrl({ repositoryName, sortBy, filter }) {
  const baseURL = "https://api.github.com/search/repositories?q=";
  return `${baseURL}${repositoryName}${filter ? `+language:${filter}` : ""}${
    sortBy !== "relevance" ? `&sort=${sortBy}` : ""
  }&order=desc`;
}

module.exports = formatUrl;
