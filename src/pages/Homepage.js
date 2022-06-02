import React, { useState, useEffect } from 'react'
import Search from '../components/Search';
import Picture from '../components/Picture';


const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  const auth = "563492ad6f917000010000014088ac995daa4ca6854a54b7146072e6";
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  // fetch data from pexels api
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
  };

  // fetch data when the page loads up
  useEffect(() => {
    search(intialURL);
  }, [])

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={() => {search(searchURL)}} setInput={setInput} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />
          })}
      </div>
      <div className="morePicture">
        <button>Load More</button>
      </div>
    </div>
  )
}

export default Homepage