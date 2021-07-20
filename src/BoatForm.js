import './App.css';
import React, { useState, useEffect } from 'react';


function BoatForm({onNewBoat = f => f}) {
  const [name, setName] = useState("");
  const [shipyardName, setShipyardName] = useState("");
  const [shipyardCountry, setShipyardCountry] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");

  const newBoat = {
    shipyard: {},
    model: {},
  };

  const cancel = e => {
    e.preventDefault();
    setName("");
    setShipyardName("");
    setShipyardCountry("");
    setShipyardName("");
    setModel("");
    setYear("");
    setSize("");
    setType("");
  }

  const submit = e => {
    e.preventDefault();

    newBoat.name = name;
    newBoat.shipyard.name = shipyardName;
    newBoat.shipyard.country = shipyardCountry;
    newBoat.model.model = model;
    newBoat.model.year = year;
    newBoat.size = size;
    newBoat.type = type;

    console.log(newBoat);
    onNewBoat(newBoat);

    setName("");
    setShipyardName("");
    setShipyardCountry("");
    setShipyardName("");
    setModel("");
    setYear("");
    setSize("");
    setType("");
  };


  return (
    <React.Fragment>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="boat name..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="shipyardName">Shipyard Name:</label>
          <input
            className="form-control"
            name="shipyardName"
            value={shipyardName}
            onChange={event => setShipyardName(event.target.value)}
            type="text"
            placeholder="boat shipyard name..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="shipyardCountry">Country:</label>
          <input
            className="form-control"
            name="shipyardCountry"
            value={shipyardCountry}
            onChange={event => setShipyardCountry(event.target.value)}
            type="text"
            placeholder="boat shipyard country..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input
            className="form-control"
            name="model"
            value={model}
            onChange={event => setModel(event.target.value)}
            type="text"
            placeholder="boat model..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            className="form-control"
            name="year"
            value={year}
            onChange={event => setYear(event.target.value)}
            type="text"
            placeholder="boat year..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <input
            className="form-control"
            name="size"
            value={size}
            onChange={event => setSize(event.target.value)}
            type="text"
            placeholder="boat size..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input
            className="form-control"
            name="type"
            value={type}
            onChange={event => setType(event.target.value)}
            type="text"
            placeholder="boat type..."
            required
          />
        </div>
        <div className="container">
          <div className="row"
          style={{ paddingTop: "10px"}}>
            <div className="col-sm-11"
                 style={{
                   textAlign: "right"
                 }}>
              <button className="btn btn-success">Create</button>
            </div>
            <div className="col-sm-1"
                 style={{
                   textAlign: "right"
                 }}>
              <button className="btn btn-secondary"
                      onClick={event => cancel(event)}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default BoatForm;
