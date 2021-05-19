import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import slikaf from './freelancers.jpg';
import slikaz from './free.jpg';
export class klasa extends Component{ 
  state={
    vjestina:'',
  }
  onSubmit=()=>{console.log(this.state)}
  render()
  {
    return(
      <div>


<h1 class = "biggie"><center> Freelance</center> </h1>
<div class ="zagreb">
  <h1 class="ako2">Prednosti i mane freelance nacina zivota</h1>
  <h3>Prednosti su brojne. Primjerice, odlična je stvar da imate slobodu u izboru projekata 
  – radite ono u cemu ste najbolji! Sami odlucujete o svemu, a imate i vise slobode u 
  organizaciji vremena i posla. Tu je i mogucnost komfora zbog rada od kuce, a najbolja stvar je da ne morate gubiti vrijeme
   i zivce na promet. A ima li sto bolje od putovanja i otkrivanja novih destinacija dok radite? Nema!</h3>
   
</div>

<img src = {slikaf} class="f"></img>

<div class ="split">
  <h1 class="ako2">Tko je freelancer?</h1>
  <h3>Freelancer je osoba koja je samozaposlena i sama organizira svoje poslovanje te sama pronalazi suradnike. Nije nuzno vezana uz jednu kompaniju ili posao na duze vrijeme. Osoba sama pronalazi poslove, 
    samostalno ih odraduje i uglavnom sama vodi brigu o svim poslovima koje u firmama odradi netko drugi.</h3>
</div>





        <div class = "divcina">
        <h1> Svidja mi se {this.state.vjestina} </h1>
        </div>
        
        <form>
        <input placeholder="upisi vlastitu vjestinu" value={this.state.vjestina} onChange={e=>this.setState({vjestina:e.target.value})}></input>
        <button onClick={()=>this.onSubmit()}> Ocisti  </button>
        
      </form>
      <br></br>
      <img src = {slikaz} class="z"></img>

      <div class ="gornji">
      <Link to="/"> Natrag </Link>
      </div>
      </div>
    );
  }

}

export default klasa;