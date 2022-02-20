import React, { useState } from "react";
import Page2 from './Page2';
import "./App.css";
export default function Page1() {
  const [fullName, setFullName] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [nextPage, setNextPage] = useState(false)


  const handleFullName = (e) => {
    setFullName(e.target.value)

  }
  const handleDisplayName = (e) => {
    setDisplayName(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFullName("")
    setNextPage(true)

  }
  return (
    <div>{!nextPage ? <div class="align-div">
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
          <div class="middle-line"></div>
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
      <h1>Welcome! First things first...</h1>
      <h4 style={{ color: '#AAAAAA' }}>You can always change them later.</h4>
      <div style={{ marginTop: "30px" }}>
        <label style={{ marginRight: "270px" }}>Full Name</label><div style={{ marginTop: "10px" }}>
          <input size="30" type="text" value={fullName} name="fullName" onChange={(e) => handleFullName(e)} />
        </div>
        <label style={{ marginRight: "250px" }}>Display Name</label>
        <div>
          <input size="30" type="text" value={displayName} name="displayName" onChange={(e) => handleDisplayName(e)} />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit} >Create Workspace</button>

    </div>
      : <Page2 displayName={displayName} />
    }
    </div >
  )
}
