import React from "react";

export default function About() {
  const styles = {
    section: {
      backgroundColor: "#303030",
      flexGrow: 1,
      padding: "20px"
    },
    h1: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "30px",
    },
    p: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "20px",
    },
    div: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.h1} className="px-5 py-3">
        About Me
      </h1>
      <div style={styles.div}>
        <p style={styles.p} className="d-flex col-10 px-5 mx-5">
          My name is Lee, lovely to meet you! I am a 2020 highschool graduate
          determined to get my life started after completing UNC Charlotte's
          Full Stack Web Development Bootcamp! I would say that I prefer front
          end, like HTML, and I'm really liking React. My hobbies include
          painting, writing, and making art from passed insect and animal
          remains. Spooky, right?
        </p>
      </div>
    </section>
  );
}
