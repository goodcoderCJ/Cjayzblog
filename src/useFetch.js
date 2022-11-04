import React from "react";

function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const abortControl = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortControl.signal })
        .then((res) => {
          if (!res.ok) {
            //setBlogs(null);
            throw Error("Could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setLoading(false);
          }
        });
    }, 500);
    return () => {
      abortControl.abort();
    };
  }, [url]);
  return { data, isLoading, error };
}
export default useFetch;
