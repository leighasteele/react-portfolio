import React from "react";

export default function Footer() {
  const styles = {
    div: {
      padding: "10px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      fontFamily: "Arial",
      fontSize: "15px",
    },
  };

  return (
    <div style={styles.div}>
    <a href="https://github.com/leighasteele">Github</a>
    <a href="https://www.linkedin.com/in/leigha-steele-a70455249/">Linkedin</a>
    </div>
  )
}