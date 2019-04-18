import React from "react"

export default () => (
  <footer className="my-24" style={{ fontSize: "17px", color: "#80828a" }}>
    <hr />
    <h2
      style={{
        fontFamily: "Kelson Sans,sans-serif",
        color: "#030303",
        fontWeight: 700,
        fontSize: "3.75rem",
      }}
    >
      DROP ME A LINE IF YOU WANT TO SAY HI OR HAVE A BEER, I WILL BE VERY HAPPY
      TO HEAR FROM YOU.
    </h2>
    <ul className="list-reset flex mt-5">
      <li className="m-6 ml-0">
        <a className="flex items-center" href="mailto:galangdj@gmail.com">
          <span>Email</span>
          <svg
            data-v-1ce1b686=""
            viewBox="0 0 28 28"
            width="100%"
            height="100%"
            style={{ width: "10px", margin: "0 10px" }}
          >
            <path
              data-v-1ce1b686=""
              d="M25.7,0.8H4.5v3h17.6L1.2,24.6l2.1,2.1L24.2,5.9v17.6h3V2.3C27.2,1.5,26.5,0.8,25.7,0.8z"
            />
          </svg>
        </a>
      </li>
      <li className="m-6">
        <a className="flex items-center" href="mailto:galangdj@gmail.com">
          <span>GitHub</span>
          <svg
            data-v-1ce1b686=""
            viewBox="0 0 28 28"
            width="100%"
            height="100%"
            style={{ width: "10px", margin: "0 10px" }}
          >
            <path
              data-v-1ce1b686=""
              d="M25.7,0.8H4.5v3h17.6L1.2,24.6l2.1,2.1L24.2,5.9v17.6h3V2.3C27.2,1.5,26.5,0.8,25.7,0.8z"
            />
          </svg>
        </a>
      </li>
      <li className="m-6">
        <a className="flex items-center" href="mailto:galangdj@gmail.com">
          <span>Twitter</span>
          <svg
            data-v-1ce1b686=""
            viewBox="0 0 28 28"
            width="100%"
            height="100%"
            style={{ width: "10px", margin: "0 10px" }}
          >
            <path
              data-v-1ce1b686=""
              d="M25.7,0.8H4.5v3h17.6L1.2,24.6l2.1,2.1L24.2,5.9v17.6h3V2.3C27.2,1.5,26.5,0.8,25.7,0.8z"
            />
          </svg>
        </a>
      </li>
    </ul>
    <p className="my-24">Copyright © {new Date().getFullYear()}. dorell</p>
  </footer>
)
