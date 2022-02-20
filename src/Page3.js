import React, { useState } from "react";
import Page4 from './Page4'
import userIcon from './assets/images/userIcon.png'
import teamsIcon from './assets/images/teamsIcon.png'
import "./App.css";

export default function Page3(props) {
  const [nextPage, setNextPage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setNextPage(true)
  }
  return (
    <div>{!nextPage ? <div className="align-div">
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
          <div class="middle-line"></div>
          <div class="box box-top">
            <div class="date">
              <p>4</p>
            </div>
          </div>
        </div>

      </section>
      <h2>How you are planning to use Eden?</h2>
      <h5 style={{ color: '#AAAAAA' }}>We'll streamline your setup experience accordingly.</h5>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          boxSizing: "content-box", border: "2px solid #5D3FD3", borderRadius: "6px", width: "200px",
          height: "200px"
        }}>
          <img src={userIcon} style={{ position: "relative", left: "2px" }} />
          <h2>For myself</h2>
          <h5 style={{ color: '#AAAAAA', padding: "2px", fontSize: "15px" }}>Write better. Think more clearly. Stay organized.</h5>
        </div>
        <div style={{
          marginLeft: "6px",
          boxSizing: "content-box", width: "200px",
          height: "200px"
        }}>
          <img src={teamsIcon} />
          <h2>With my team</h2>
          <h5 style={{ color: '#AAAAAA', padding: "2px", fontSize: "15px" }}>Wikis, dos, tasks & projects, all in one place.</h5>
        </div>

      </div>
      <button type="submit" onClick={handleSubmit} >Create Workspace</button>

    </div>
      : <Page4 displayName={props.displayName} />}
    </div>
  )
}
