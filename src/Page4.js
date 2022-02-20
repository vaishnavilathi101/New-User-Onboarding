import React from "react";
import tickIcon from './assets/images/tickIcon.png'
import "./App.css";

export default function Page4(props) {
  return (
    <div className="align-div">
      <section class="timeline-wrapper">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <div class="box box-top">
            <div class="date">
              <p>1</p>
            </div>
          </div>
          <div class="middle-line-1"></div>
          <div class="box box-top">
            <div class="date">
              <p>2</p>
            </div>
          </div>
          <div class="middle-line-1"></div>
          <div class="box box-top">
            <div class="date">
              <p>3</p>
            </div>
          </div>
          <div class="middle-line-1"></div>
          <div class="box box-top">
            <div class="date">
              <p>4</p>
            </div>
          </div>
        </div>

      </section>
      <img src={tickIcon} />
      <h2>Congratulations, {props.displayName}!</h2>
      <h5 style={{ color: '#AAAAAA' }}>You have completed onboarding, you can start using the Eden!.</h5>

      <button type="submit" >Launch Eden</button>

    </div>

  )
}
