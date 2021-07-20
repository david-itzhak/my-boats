import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoatForm from "./BoatForm";

function App() {
  const [boats, setBoats] = useState([]);
  const [viewBoats, setViewBoats] = useState(true);
  const [newBoatTitle, setNewBoatTitle] = useState("New Boat");
  const [boatsBtnTxt, setBoatsBtnTxt] = useState("New Boat");

  const switchView = () => {
    setViewBoats(!viewBoats);
    if (!viewBoats) {
      setBoatsBtnTxt("New Boat");
      setNewBoatTitle("New Boat");
    } else {
      setBoatsBtnTxt("View Boats");
      setNewBoatTitle("");
    }
  };

  const adNewBoat = async (boat) => {

    try {
      const result =  await axios.post(
        // 'http://localhost:3001/boats',
        'http://localhost:8080/boats',
        boat);
      debugger;
      setBoats([
        ...boats,
        {
          ...result.data
        }
      ]);
    } catch (e) {

    }
  }

  useEffect(async () => {
    const result = await axios(
      // 'http://localhost:3001/boats',
      'http://localhost:8080/boats',
    );

    setBoats(result.data);
  }, []);

  return (
    <div className="App">
      <div style={{
        backgroundImage: "url(/boat.jpeg)",
        backgroundSize: "cover",
        padding: "30px 0"
      }}>
        <div className="container">
          <div className="row">
            <div className="col-sm"
            style={{
             fontWeight: "bolder",
             color: "white",
              fontSize: "23px"
            }}>
              {newBoatTitle}
            </div>
            <div className="col-sm">
            </div>
            <div className="col-sm"
            style={{
              textAlign: "right"
            }}>
              <button className="btn btn-info"
                      onClick={switchView}>{boatsBtnTxt}</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: viewBoats ? 'none' : 'block', margin: "10px 10%" }}>
        <div className="card">
          <div className="card-body">
            <BoatForm onNewBoat={adNewBoat}></BoatForm>
          </div>
        </div>
      </div>
      <p></p>
      <table className="table table-hover table-striped"
             style={{display: viewBoats ? 'table' : 'none' }}>
        <thead>
        <tr>
          <th>Boat Name</th>
          <th>Shipyard</th>
          <th>Country</th>
          <th>Model</th>
          <th>Year</th>
          <th>Size (ft)</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {
          boats.map((boat) => (
            <tr key={boat.id}>
              <td>{boat.name}</td>
              <td>{boat.shipyard.name}</td>
              <td>{boat.shipyard.country}</td>
              <td>{boat.model.model}</td>
              <td>{boat.model.year}</td>
              <td>{boat.size}</td>
              <td>{boat.type}</td>
            </tr>
          ))
        }
        </tbody>
      </table>

    </div>
  );
}

export default App;
