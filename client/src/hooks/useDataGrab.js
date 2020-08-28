import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useDataGrab({ searchVal, sortVal, filterVal }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // this function will fire when filter/sort changes
  // or when there is a search input
  // or when the debounce is finished so as to not overfetch
  // useCallback utilized so function consistent
  // ... to prevent useEffect from firing excessively
  const fetchResults = useCallback(async () => {
    try {
      // set loading state
      setLoading(true);
      // fetch resource from backend
      const response = await axios.get("http://localhost:5000/", {
        params: {
          repositoryName: searchVal,
          sortBy: sortVal,
          filter: filterVal,
        },
      });
      // request finished, set loading state to false
      setLoading(false);
      // if there's a response and it has a data object
      // which is default for axios
      if (response && response.data) {
        // set the data so that a list can be displayed
        // this data pulled off in Splash component
        setData(response.data.response);
      }
    } catch (e) {
      // set error state
      setError(e);
    }
  }, [searchVal, sortVal, filterVal]);

  useEffect(() => {
    // async fetch fires when props change
    (async () => {
      if (searchVal && searchVal.length) {
        await fetchResults();
      }
    })();
  }, [fetchResults, searchVal]);

  // return data error and loading states to consume
  return { data, error, loading };
}
