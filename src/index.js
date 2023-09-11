import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return <div>
    <h2>{props.name}</h2>
      <img
        src={props.image} width='200'
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card 
      name="Chuck Norris"
      image="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />

    <Card 
      name="Jake The Dog"
      image="https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/08/jake-the-dog-pure-css-adventure-time-wallpaper-by-sangreprimitiva-d5vs51f.jpg"
      tel="+614 876 987"
      email="jake.the.dog@emailiscool.com"
    />
  </div>,
  document.getElementById("root")
);
