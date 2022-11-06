import React from "react";

export default function Header() {
  const styles = {
    div: {
      display: "flex",
      padding: "10px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    p: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "30px",
    },
  };

  return (
    <div style={styles.div} className="p5 m5">
      <h1 style={styles.header} className="container-xl">
        <p style={styles.p}>Portfolio</p>
      </h1>
    </div>
  );
}
