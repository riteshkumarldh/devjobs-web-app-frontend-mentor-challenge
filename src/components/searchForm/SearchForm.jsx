import { useState } from "react";
// images
import filterIcon from "../../assets/mobile/icon-filter.svg";
import searchIcon from "../../assets/mobile/icon-search.svg";
import searchDesktopIcon from "../../assets/desktop/icon-search.svg";
import locationDesktopIcon from "../../assets/desktop/icon-location.svg";
import checkboxIcon from "../../assets/desktop/icon-check.svg";

// scss
import "./searchForm.scss";

export default function SearchForm() {
  const [mobileFilter, setMobileFilter] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMobileFilter(false);
  };

  return (
    <section className="filterForm">
      <form>
        <div className="mobile-filter">
          <input type="text" placeholder="Filter by title..." />
          <div
            className="filter"
            onClick={() => setMobileFilter((prev) => !prev)}
          >
            <img src={filterIcon} alt="filtericon" />
          </div>
          <div onClick={() => handleSubmit} className="search">
            <img src={searchIcon} alt="searchicon" />
          </div>
        </div>
        <div className={`desktop-filter`}>
          <div className="ftitle">
            <img src={searchDesktopIcon} alt="searchDesktopIcon" />
            <input type="text" placeholder="Filter by title..." />
          </div>
          <div className={`other-filter ${mobileFilter && "active"}`}>
            <div className="location-filter">
              <img src={locationDesktopIcon} alt="locationDesktopIcon" />
              <input type="text" placeholder="Filter by location..." />
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
              <button type="submit" onClick={handleSubmit}>
                Search
              </button>
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
