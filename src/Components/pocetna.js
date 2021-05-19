import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import slika from './jet.jpg';
import slika2 from './stari.jpg';
import slika3 from './novac.png';
export default function Naslovna() {
  return (
    <div className="App">
      <header>
        <div class="blek2">
          <br/>
          Fabio Zetovic g2p
        </div>
      </header>
      <img src = {slika2} className = "jet"></img>
      <img src = {slika} className = "jet"></img>
      <img src = {slika3} className = "jet"></img>
      <div class ="sta">
        <center>
      <h1 class = "naslov">Zelite li zivjeti ovakav zivot?</h1>
      <table>
        <tr>
          <center>
            <td class="druge"><Link to="/affiliate"> Ako vas zanima Affiliate Marketing </Link></td>
            <td class="druge"><Link to="/dropshipping"> Ako vas zanima Dropshipping </Link></td>
            <td class="druge"><Link to="/freelance"> Ako vas zanima Freelance </Link></td>
            <td class="druge2"><Link to="/blogging"> Ako vas zanimaju recenzije </Link></td>
          </center>
        </tr>
      </table>
      
      <div class = "ako">
        <br></br>
        <h2 class = "ako2">Ako ste rekli da, na savrsenom ste mjestu</h2>
        <h3>Ova stranica ce vas nauciti kako Zaradivati novac od kuce i biti uspjesan u tome, naucit cete 4 najboljih nacina za postici dobit iz udobnosti svoga doma</h3>
        <h3>Od pocetka corona virusa ljudi su poceli traziti nacine da steknu dobit iz udobnosti i sigurnosti svoga doma, sa sigurnoscu mogu reci kako im je misija uspjesna.
        Online industrija je jedna od najrazvijenih te sa svakodnevnim rastom interneta ljudi ce biti prisiljeni razviti nacine kako zivjeti uz njega i najvaznije kako ga iskoristiti
        </h3>
      </div>

      <div class="ako">
        <h2 class = "ako2">Ako ste zainteresirani za saznati vise, imamo online satove u kojima idemo u dubinu o svemu vaznome za Vas uspjeh</h2>
        <h3> tecaj se odrzava svaki drugi dan i traje 3 mjeseca, nakon tecaja zagarantirano vam je znanje eksperta i profesionalnog poslodavca 
        </h3>
        <h3 class="podcrtano">"Zasto bas ovaj tecaj?"</h3>
        <h3>Kao milijunas sa 16 godina smatram kako imam velikih iskustva sa ovom temom i kako bi trebao podjeliti ovo znanje</h3>
        </div>
        <div class="ako">
        <h2>Prijavite se ovdje za besplatni tecaj:
        <br></br><br></br>
        Samo 40€
        </h2>
        <br></br>

        <button class="prijava"><center><a href="https://youtu.be/dQw4w9WgXcQ">Prijavi se ovdje</a></center></button>

        </div>


        <div>
          
        </div>

        </center>
      </div>

    </div>
  );
}
