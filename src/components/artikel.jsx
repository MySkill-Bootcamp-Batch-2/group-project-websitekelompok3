import { useState, useEffect } from 'react'
import axios from "axios";
// import { Image } from "./image";
// import { Link } from "react-router-dom";

export const Artikel = () => {
  const [artikel, setArtikel] = useState([]);
 
  useEffect(() => {
      getArtikel();
  }, []);

  const getArtikel = async () => {
      const response = await axios.get('http://localhost:5000/home');
      setArtikel(response.data);
  }
  return ( 
    <div id="artikel" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Artikel</h2>
        </div>
        <div id="row">
          {artikel       
            ? artikel.map((artikel, i) => (
                <div key={`${artikel.sumber}-${i}`} className="col-md-4 col-sm-6 artikel box ">
                  <div className="thumbnail">
                    {" "}
                    <a href={artikel.sumber}><img src="/img/1.jpg" alt="..." className="artikel-img" /></a>
                    <div className="caption">
                      <p>{artikel.penulis}</p>
                      <h4>{artikel.judul}</h4>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};