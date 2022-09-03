import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/global.css"

const projects = () => {
  return (
    <Layout>
      <Wrapper>
        <div class="section">
          <div class="content">
            <div class="header">
              <h1>Projects</h1>
            </div>
          </div>
        </div>
        <div class="project_section">
          <div class="project_content">
            <div class="project_header">
              <h2 class="project_h2">Digital Cupboard</h2>
              <p class="technologies">
                TypeScript, NestJS, Node.js, Express, React, MySQL
              </p>
              <div class="project-photo">
                <StaticImage
                  src="../assets/images/digital-cupboard.png"
                  width={800}
                />
              </div>
              <p class="project_p">
                Digital Cupboard takes every ingredient mentioned in a YouTube
                video (using the autogenerated captions) and adds those
                ingredients to the online shopping cart of your convenience.
                It's easy - enter the URL of the cooking video, review your
                cart, and submit your order through your local grocery store's
                app/website.
              </p>
              <div class="project-buttons">
                <button id="disabled-button" disabled>
                  Demo coming soon
                </button>
                <a
                  class="project_github"
                  href="https://github.com/anserghazi/digital-cupboard"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div class="project_header">
              <h2 class="project_h2">Runroute</h2>
              <p class="technologies">
                JavaScript, Google Maps JavaScript API, HTML, CSS
              </p>
              <div class="project-photo">
                <StaticImage src="../assets/images/runroute.png" width={800} />
              </div>
              <p class="project_p">
                Runroute is a route planner for at-home runners. The route
                begins and ends at your given address, and nearby parks can be
                added as waypoints on your journey. Runroute uses Google Maps
                Javascript API, Directions API, Places API, Geolocation API.
              </p>
              <div class="project-buttons">
                <a
                  class="project_demo"
                  href="https://www.runroute.app/"
                  target="_blank"
                >
                  Demo
                </a>
                <a
                  class="project_github"
                  href="https://github.com/anserghazi/runroute"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="project_section">
          <div class="project_content">
            <div class="project_header">
              <h2 class="project_h2">Portfolio Website</h2>
              <p class="technologies">Node.js, React, Gatsby, HTML, CSS</p>
              <div class="project-photo">
                <StaticImage
                  src="../assets/images/portfolio-site.png"
                  width={800}
                />
              </div>
              <p class="project_p">
                My online portfolio, which displays my latest projects and
                contact information.
              </p>
              <div class="project-buttons">
                <a
                  class="project_github"
                  href="https://github.com/anserghazi/portfolio-site"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div class="project_header">
              <h2 class="project_h2">MERN Notepad</h2>
              <p class="technologies">
                JavaScript, Node.js, Express, React, MongoDB
              </p>
              <div class="project-photo">
                <StaticImage
                  src="../assets/images/online-notepad.png"
                  width={800}
                />
              </div>
              <p class="project_p">
                A fullstack notetaking app made with the MERN stack. Users can
                write their own posts, and copy/edit/delete any post on the
                notepad.
              </p>
              <div class="project-buttons">
                <a
                  class="project_github"
                  href="https://github.com/anserghazi/ansers-online-notepad"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  .section {
    overflow-x: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-bottom: 15px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: -40px;
  }

  .content {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
    gap: 25px;
  }

  .header {
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    gap: 15px;
  }

  .photo_header {
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    gap: 15px;
  }

  h1 {
    font-family: "Yantramanav", sans-serif;
    font-size: 70px;
    font-weight: 700;
    color: white;
    display: inline;
    margin-bottom: -5px;
    align-self: flex-start;
  }

  p {
    font-family: "Yantramanav", sans-serif;
    font-size: 32px;
    font-weight: 500;
    color: #bebebe;
    margin: 0px 0px 0px 0px;
  }

  #resumePDF {
    display: flex;
    padding: 15px 25px;
    justify-content: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #1f282e;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #141b1f;
    margin-top: 20px;
    width: 80%;
    font-family: "Yantramanav", sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: white;
    margin-top: 30px;
  }

  #resumePDF:hover {
    background-color: #3e8e41;
  }

  #resumePDF:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #181f24;
    transform: translateY(4px);
  }

  .intro {
    font-weight: 600;
  }

  .project_section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .project_content {
    display: flex;
    max-width: 1100px;
    gap: 25px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 25px;
  }

  .project_header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #181f24;
    flex-basis: 0;
    flex-grow: 1;
    padding: 15px;
  }

  .project_h2 {
    font-family: "Yantramanav", sans-serif;
    font-size: 35px;
    font-weight: 700;
    color: white;
    margin-bottom: -5px;
    margin-top: -5px;
  }

  .technologies {
    font-size: 20px;
    color: white;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  img {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
  }

  .project_p {
    font-family: "Yantramanav", sans-serif;
    font-size: 20px;
    font-weight: 100;
    color: #bebebe;
    margin: 15px 0px 0px 0px;
  }

  .project-buttons {
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    flex-grow: 1;
    gap: 15px;
    justify-content: flex-end;
  }

  .project-buttons > * {
    text-decoration: none;
    color: white;
    background-color: #1e282e;
    border-style: none;
    font-family: "Yantramanav", sans-serif;
    font-size: 21px;
    font-weight: 600;
    transition-duration: 0.05s;
    border-radius: 10px;
    box-shadow: 0 9px #131a1d;
    margin-top: -5px;
    border-style: solid;
    border-color: #1e282e;
    border-width: 1px;
    user-select: none;
    &:hover {
      color: #ffa500;
      font-size: 21px;
    }
    &:active {
      box-shadow: 0 5px #181f24;
      transform: translateY(4px);
      border-color: #1e282e;
    }
  }

  .project_github {
    align-self: flex-end;
    padding: 15px 65px 15px 65px;
  }

  .project_demo {
    align-self: flex-end;
    padding: 15px 70px 15px 70px;
  }

  #disabled-button {
    border-style: dashed;
    border-color: #242f36;
    border-width: 5px;
    width: 197px;
    background-color: #181f24;
    box-shadow: 0 9px #131a1d;
    &:hover {
    }
    &:active {
      transform: none;
    }
  }

  @media only screen and (max-width: 1000px) {
    h1 {
      font-size: 60px;
    }

    .project_github {
      align-self: flex-end;
      padding: 10px 15px 10px 15px;
    }

    .project_demo {
      align-self: flex-end;
      padding: 10px 20px 10px 20px;
    }

    #disabled-button {
      display: none;
    }
  }

  @media only screen and (max-width: 790px) {
    h1 {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 730px) {
    .project_content {
      display: flex;
      flex-flow: column nowrap;
    }
    .photo_header {
      display: none;
    }
  }

  @media only screen and (max-width: 670px) {
    .project_section {
      margin-top: 25px;
    }
  }

  @media only screen and (max-width: 489px) {
    gap: 25px;
    .project_github {
      align-self: flex-end;
      padding: 10px 15px 10px 15px;
    }

    .project_demo {
      align-self: flex-end;
      padding: 10px 20px 10px 20px;
    }

    #disabled-button {
      display: none;
    }
  }

  @media only screen and (max-width: 420px) {
    margin-top: 10px;
    .header {
      gap: 10px;
    }
    h1 {
      font-size: 35px;
    }

    p {
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 350px) {
    .project_h2 {
      font-size: 30px;
    }
    .content {
      margin-right: 15px;
    }
  }
`

export default projects
