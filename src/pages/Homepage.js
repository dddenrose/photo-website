import React, { useState, useEffect } from 'react'
import Search from '../components/Search';
import Picture from '../components/Picture';


const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f917000010000014088ac995daa4ca6854a54b7146072e6";
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  // fetch data from pexels api
  const search = async (url) => {
    setPage(2);
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

  //load more pictures
  const morepicture = async () => {
    let newUrl;
    if (currentSearch === "") {
      newUrl = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
  };

  // fetch data when the page loads up
  useEffect(() => {
    search(intialURL);
  }, [])

  useEffect(() => {
    if (currentSearch === "") {
      search(intialURL);
    } else {
      search(searchURL);
    }
  },[currentSearch])

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search 
        search={() => {setCurrentSearch(input);}}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />
          })}
      </div>
      <div className="morePicture">
        <button onClick={morepicture}>Load More</button>
      </div>
    </div>
  )
}

export default Homepage

