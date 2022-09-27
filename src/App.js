import React, { useState, useEffect, useCallback } from "react";
import { MyMap } from "./components/map/map";
import SideBar from "./components/sidebar/sideBar";

function App() {
  const [hoveredData, setHoveredData] = useState(null);
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

  const handleClickListener = useCallback(() => {
    const allPointsDiv = Array.from(
      document.querySelectorAll(".pigeon-click-block")
    );
    const allPointsChildren = Array.from(
      document.querySelectorAll(".pigeon-click-block *")
    );
    const allPointsSideBar = Array.from(document.querySelectorAll("#sideNav"));

    const allPoints = [
      ...allPointsDiv,
      ...allPointsChildren,
      ...allPointsSideBar,
    ];

    const clickListener = (event) => {
      if (allPoints.includes(event.target) === false) {
        setHoveredData(null);
        setActiveData(null);
      }
    };

    window.addEventListener("click", clickListener);

    return () => {
      window.removeEventListener("click", clickListener);
    };
  }, []);

  const initializeApp = useCallback(async () => {
    await fetchData();
    setTimeout(() => {
      handleClickListener();
    }, 500);
  }, [handleClickListener]);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  const showHoverInfo = (brew, e) => {
    if (activeData) return;
    if (hoveredData) {
      setHoveredData(brew);
    } else {
      setTimeout(() => setHoveredData(brew), 500);
    }
    const {
      event: { pageX, pageY },
    } = e;
    setPosition({ x: pageX, y: pageY });
  };

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
      <MyMap
        {...{
          breweries,
          hoveredData,
          activeData,
          setActiveData,
          position,
          showHoverInfo,
          showFocusInfo,
        }}
      />
    </>
  );
}

export default App;
