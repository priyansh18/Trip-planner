import React, { Component } from "react";

const AddTrip = ({newTrip}) => {
  let date, place, type;
  const submit = (e) => {
    e.preventDefault();
    newTrip({
      date:date.value,
      place:place.value,
      type:type.value
    })
    date.value=place.value=type.value=""
  };
  return (
    <div className="form-container">
      <form onSubmit={submit} className="form black-container">
        <label>
          <h3>Add a trip</h3>
          <br />
          <br />
          <br />
        </label>
        <label>
          Date:
          <br />
          <input
            id="date"
            type="date"
            required
            ref={(input) => (date = input)}
          />
        </label>
        <label>
          Place:
          <br />
          <input
            id="place"
            type="text"
            required
            ref={(input) => (place = input)}
          />
        </label>
        <label>
          Type:
          <br />
          <select ref={(input) => (type = input)}>
            <option value="Trek">Trek</option>
            <option value="Club">TClubk</option>
          </select>
        </label>
        <input type="submit" value="SUBMIT"/>
      </form>
    </div>
  );
};

export default AddTrip;
