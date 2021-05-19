import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
export default function Naslovna() {
  return (
    <div className="App">
      <Link to="/"> Natrag </Link>
      <center>
      <h1 class="ako2 velicina"> Affiliate ili Partnerski marketing </h1>
      <div class="krug">
        <br/>
        <h1 class="ako2 "> Kako affiliate funkcionira</h1><br/><br/>
        <h2>Odnosi se na oglašavanje, odnosno na promociju proizvoda <br/> ili usluga nekog poduzeća. Ti proizvodi ili <br/>usluge mogu se promovirati putem bannera, videozapisa, slika, tekstualnih oglasa, <br/> linkova ili pak putem e-mail kampanja.
        </h2><br/>
        <h1 class="ako2">Manje potrebnog kapitala i lakši početak</h1>
        <h2>Najveća prednost dropshipping-a definitivno je mogućnost otvaranja online trgovine bez tisuća i tisuća kuna početnog kapitala. Više ne trebate unaprijed kupovati proizvode, ako ih kupac nije naručio i platio.</h2>
        <h1 class="ako2">Niski troskovi i siroka ponuda proizvoda</h1>
        <h2>Imat cete nize troskove, jer vise ne trebate placati skladiste. Mnoge <br/> uspjesne dropshipping <br/> online trgovine posluju iz malog kucnog ureda, pomocu jednog <br/> laptopa i s mjesecnim troskovima manjim od 1000 kn.</h2>
      </div>
      </center>
    </div>
  );
}
