import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div className="flex">
      <h2
        className="mr-10 w-1/3"
        style={{
          fontFamily: "Kelson Sans,sans-serif",
          color: "#fff",
          fontWeight: 700,
        }}
      >
        INTRODUCTION
      </h2>
      <p
        style={{
          color: "#80828a",
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        I'm Dorell James, a Filipino software developer with a focus in web
        development. Currently based in Cebu City, Philippines, and I’m actively
        building a community and promoting the tech scene in our city.
      </p>
    </div>
    <div className="flex mt-24">
      <h2
        className="mr-10 w-1/3"
        style={{
          fontFamily: "Kelson Sans,sans-serif",
          color: "#030303",
          fontWeight: 700,
        }}
      >
        INTRODUCTION
      </h2>
      <div>
        <p
          style={{
            color: "#80828a",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          I was raised in the east of France, and had lived and worked in Paris
          and Berlin. Coming from a scientific background, I quickly jumped into
          tech with the ambition to create neat & reliable web experiences. By
          being involved in my school, HETIC, I'm mastering my skills in various
          fields of digital creation, ranging from web development to UX Design.
        </p>
        <br />
        <p
          style={{
            color: "#80828a",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          As a Freelance front-end developer and intern in MING Labs & Braaxe, I
          was lucky enough to work with companies like BASF, le Théâtre du
          Chatelet or startups like Sesame Care. I am a perfectionist and
          curious person with the inclination to learn new things everyday and
          always up for new challenges.
        </p>
      </div>
    </div>
    <div className="flex mt-24">
      <h2
        className="mr-10 w-1/3"
        style={{
          fontFamily: "Kelson Sans,sans-serif",
          color: "#030303",
          fontWeight: 700,
        }}
      >
        MY JOURNEY
      </h2>
      <div>
        <p
          style={{
            color: "#80828a",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          I was raised in the east of France, and had lived and worked in Paris
          and Berlin. Coming from a scientific background, I quickly jumped into
          tech with the ambition to create neat & reliable web experiences. By
          being involved in my school, HETIC, I'm mastering my skills in various
          fields of digital creation, ranging from web development to UX Design.
        </p>
        <br />
        <p
          style={{
            color: "#80828a",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          As a Freelance front-end developer and intern in MING Labs & Braaxe, I
          was lucky enough to work with companies like BASF, le Théâtre du
          Chatelet or startups like Sesame Care. I am a perfectionist and
          curious person with the inclination to learn new things everyday and
          always up for new challenges.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
