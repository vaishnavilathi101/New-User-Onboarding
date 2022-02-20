import React, { useState } from "react";
import Page3 from './Page3';
import "./App.css";

export default function Page2(props) {
  const [nextPage, setNextPage] = useState(false)
  const [workspaceName, setWorkspaceName] = useState("")
  const [workspaceUrl, setWorkspaceUrl] = useState("")
  const handleWorkspaceName = (e) => {
    setWorkspaceName(e.target.value)

  }
  const handleWorkspaceUrl = (e) => {
    setWorkspaceUrl(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setWorkspaceName("")
    setWorkspaceUrl("")
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
      <h2>Let's set up a home for all your work</h2>
      <h5 style={{ color: '#AAAAAA' }}>You can always change them later.</h5>
      <label style={{ marginRight: "230px" }}>Workspace Name</label><div style={{ marginTop: "10px" }}>
        <input type="text" value={workspaceName} name="fullName" onChange={(e) => handleWorkspaceName(e)} />
      </div>
      <label style={{ marginRight: "180px" }}>Workspace URL <span style={{ color: '#AAAAAA' }}>(optional)</span></label>
      <div>
        <input type="text" value={workspaceUrl} name="displayName" onChange={(e) => handleWorkspaceUrl(e)} />
      </div>
      <button type="submit" onClick={handleSubmit} >Create Workspace</button>

    </div>
      : <Page3 displayName={props.displayName} />}
    </div>
  )
}
