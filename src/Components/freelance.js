import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
export default function Naslovna() {
  return (
    <div className="App">
      <div class ="gornji">
      <Link to="/"> Natrag </Link>
      </div>
      <h1 class="biggie"> Dropshipping, buducnost svijeta </h1>
     <div>
     <h1 class ="biggie2 livo"> Sto je to Dropshipping</h1>
      <br/><br/><br/><br/><br/><br/><br/>
      <h3 class="biggie3 livo">To je nacin prodaje proizvoda u kojoj vi niste proizvodac robe niti odgovorni za njenu isporuku</h3>
      <br/><br/><br/><br/><h3 class="biggie3 livo">Roba je u rukama proizvodaca koji ju masovno proizvode</h3></div>

      <div>
      <h3 class="biggie2 livo">Kako krenuti s dropshippingom?</h3>
      <br/><br/><br/><br/><br/><br/><br/><br/>

      <h3 class="biggie3 livo">Otidjite na stranicu kao sto je Aliexpress te masovno kupite proizvod po niskoj cijeni</h3>
      </div><br/><br/><br/><br/><br/><br/><br/><br/>
      <h3 class="biggie3 livo dalje">Zatim napravite vlastitu ili pocnite prodavati te iste prizvode na stranicama poput amazona i ebaya</h3>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h4 class="biggie2"> Zarada nije zagarantirana no ako se probijete na trzistu vrlo je dobra</h4>

    
    </div>
  );
}
