import React, { useState } from "react";
import Header from "../../componnents/navbar/header/Header";
import Navbar from "../../componnents/navbar/Navbar";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import { DateRange } from "react-date-range";
//date-fns
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import "./list.css";
import SearchItem from "../../componnents/searchItem/SearchItem";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error , reFetch} = useFetch(`/hotel?city=${destination}&mi=${min | 1 }&max=${max || 999}`); 


  const handleClick = () => {
    reFetch ()
  }


  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="lisContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItems">
              <label className="listLabel">destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItems">
              <label className="listLabel">check-in-date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {" "}
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                className="date"
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>

              <div className="lsOptionItem">
                <span className="listOption">
                  Min price <small>per night</small>
                </span>
                <input type="number"  onChange={ e=> setMin(e.target.value)} className="optionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="listOption">
                  Maxn price <small>per night</small>
                </span>
                <input type="number" onChange={ e=> setMax(e.target.value)} className="optionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="listOption">Adult(s)</span>
                <input
                  min={1}
                  type="Number"
                  className="optionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="listOption">Children(s)</span>
                <input
                  min={0}
                  type="Number"
                  className="optionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="listOption">Room(s)</span>
                <input
                  min={1}
                  type="Number"
                  className="optionInput"
                  placeholder={options.room}
                />
              </div>
              <div className="buttonSearch">
                <button onClick={handleClick}>Search</button>
              </div>
            </div>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
            {data.map ( (item) => (
              <SearchItem item ={item} key={item._id} />
            ))}
            
            </>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
