import { useState } from "react";

// images
import filterIcon from "../../assets/mobile/icon-filter.svg";
import searchIcon from "../../assets/mobile/icon-search.svg";
import searchDesktopIcon from "../../assets/desktop/icon-search.svg";
import locationDesktopIcon from "../../assets/desktop/icon-location.svg";
import checkboxIcon from "../../assets/desktop/icon-check.svg";

// scss
import "./searchForm.scss";

// using context
import { useAppContext } from "../../context/appContext";

export default function SearchForm() {
  const { setSearchedResult, data } = useAppContext();
  const [mobileFilter, setMobileFilter] = useState(false);
  const [checked, setChecked] = useState(false);

  // form related states
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    const cont = checked ? "Full Time" : "";
    e.preventDefault();
    setMobileFilter(false);
    const arr = [...data];
    const filtered = arr.filter((job) => {
      return (
        job.position.toLowerCase().indexOf(position.toLowerCase()) > -1 &&
        job.location.toLowerCase().indexOf(location.toLowerCase()) > -1 &&
        job.contract.toLowerCase().indexOf(cont.toLowerCase()) > -1
      );
    });
    setSearchedResult([...filtered]);
  };

  return (
    <section className="filterForm">
      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="mobile-filter">
          <input
            type="text"
            placeholder="Filter by title..."
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <div
            className="filter"
            onClick={() => setMobileFilter((prev) => !prev)}
          >
            <img src={filterIcon} alt="filtericon" />
          </div>
          <div onClick={handleSubmit} className="search">
            <img src={searchIcon} alt="searchicon" />
          </div>
        </div>
        <div className={`desktop-filter`}>
          <div className="ftitle">
            <img src={searchDesktopIcon} alt="searchDesktopIcon" />
            <input
              type="text"
              placeholder="Filter by title..."
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className={`other-filter ${mobileFilter && "active"}`}>
            <div className="location-filter">
              <img src={locationDesktopIcon} alt="locationDesktopIcon" />
              <input
                type="text"
                placeholder="Filter by location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="searched">
              <div
                className="full-time"
                onClick={() => setChecked((prev) => !prev)}
              >
                <div className={`check ${checked ? "checked" : null}`}>
                  <img src={checkboxIcon} alt="checkboxIcon" />
                </div>
                <p>Full Time</p>
              </div>
              <button type="submit">Search</button>
            </div>
          </div>
        </div>
      </form>
      {/* overlay */}
      <div
        className={`overlay ${mobileFilter && "active"}`}
        onClick={() => setMobileFilter((prev) => !prev)}
      ></div>
    </section>
  );
}
