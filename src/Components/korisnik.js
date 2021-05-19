import '../App.css';
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


function Korisnik({saljem,saljem2,saljem3,saljem4,saljem5,saljem6 }) {
  return (
    <div className="dijete">
        <br/>
        <br/>
        <br/>
         <h2>{saljem.username}  <br/></h2>
         <p> "Imam odlicno iskustvo sa ovim, u mjesec dana sam zaradio 40,000 kn"</p>
        <h2>{saljem2.username}  <br/></h2>
        <p> "Visoko preporucam ovaj tecaj" </p>
        <h2>{saljem3.username}  <br/></h2>
        <p>"iznimno sam zadovoljan ovim tecajem te cekam nove lekcije"</p>
        <h2>{saljem4.username}  <br/></h2>
        <p>"Vrlo korisne informacije"</p>
        <h2>{saljem5.username}  <br/></h2>
        <p>"Nakon samo 2 tjedna sam zaradio 10,000kn zahvaljujuci ovome"</p>
        <h2>{saljem6.username}  <br/></h2>
        "Odlicna objasnjenja i korisne informacije"
        <br/>
        <br/>
        <br/>
        <Link to="/"> Natrag </Link>
    </div>
  );
}

export default Korisnik;