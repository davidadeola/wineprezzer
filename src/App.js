import React, { useState, useEffect, useCallback } from "react";
import { MyMap } from "./components/map/map";
import SideBar from "./components/sidebar/sideBar";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeData, setActiveData] = useState(null);

  /**
   * Fetching data from the breweries API and initializing it
   */

  const fetchData = async () => {
    const response = await fetch(
      "https://api.openbrewerydb.org/breweries?per_page=50"
    );
    const data = await response.json();

    setBreweries(data);
  };

  const initializeApp = useCallback(async () => {
    await fetchData();
  }, []);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  const showFocusInfo = (brew, e) => {
    setActiveData(brew);
    const {
      event: { pageX, pageY },
    } = e;
    setPosition({ x: pageX, y: pageY });
  };

  return (
    <>
      <SideBar />
      <MyMap {...{ breweries, activeData, showFocusInfo, position }} />
    </>
  );
}

export default App;
