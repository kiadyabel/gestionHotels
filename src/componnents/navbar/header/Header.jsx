import React from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
//date-fns
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const navigate = useNavigate();

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "+" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Fligths</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headeTitle">
              A life time of discounts? It's Genius.
            </h1>
            <p className="headerDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              veritatis mollitia doloremque similique possimus reiciendis fugit,
            </p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  className="headerSearchInput"
                  placeholder="Where are you going?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSerchText"
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")}  à  ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    className="dateSelected"
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSerchText"
                >{`${options.adult} adult(s) - ${options.children} children(s) - ${options.room} room(s)`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">adult</span>
                      <div className="optionButton">
                        <button
                          className="optionCounterBtn"
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "-")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{`${options.adult}`}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("adult", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">children</span>
                      <div className="optionButton">
                        <button
                          className="optionCounterBtn"
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "-")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{`${options.children}`}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">room</span>
                      <div className="optionButton">
                        <button
                          className="optionCounterBtn"
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "-")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{`${options.room}`}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("room", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
