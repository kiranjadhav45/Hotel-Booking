import "./List.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
const List = () => {
  const location = useLocation();
  console.log(location);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWaraper">
          <div className="listSearch">
            <h1 className="LsTitle">Search</h1>
            <div className="isItem IsDestination">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="isItem">
              <label>Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="isItemDate"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="isItem">
              <label>Options</label>
              <div className="IsOption">
                <div className="IsOptionItem">
                  <span className="lsOptionText">
                    <small>Min price per night</small>
                  </span>
                  <input
                    placeholder="1000"
                    min={1}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
                <div className="IsOptionItem">
                  <span className="lsOptionText">
                    <small>Max price per night</small>
                  </span>
                  <input
                    placeholder="2000"
                    min={1}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
                <div className="IsOptionItem">
                  <span className="lsOptionText">
                    <small>Adult</small>
                  </span>
                  <input
                    min={1}
                    placeholder={options.adult}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
                <div className="IsOptionItem">
                  <span className="lsOptionText">
                    <small>Children</small>
                  </span>
                  <input
                    min={0}
                    placeholder={options.children}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
                <div className="IsOptionItem">
                  <span className="lsOptionText">
                    <small>Room</small>
                  </span>
                  <input
                    min={1}
                    placeholder={options.room}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
              </div>
            </div>
            <div className="isItem">
              <button className="IsSearchButton">Search</button>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
