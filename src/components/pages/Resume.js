import React from "react";

export default function Resume() { 
  const styles = {
    section: {
      backgroundColor: "#303030",
      flexGrow: 1,
      padding: "20px"
    },
    h1: {
    fontFamily: "Arial",
    color: "white",
    fontSize: "30px",
  }}

  return(
    <section style={styles.section}>
    <h1 style={styles.h1} className="px-5 py-3">
    <a href="https://docs.google.com/document/d/1hDfYV3i41gsKoXs_ObmXVb2bW881-XC6ynTD86CsKO0/edit?usp=sharing">Resume</a>
    </h1>
  </section>
  )
};