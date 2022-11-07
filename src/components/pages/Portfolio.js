export default function Portfolio() {
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
        Portfolio
      </h1>
      <div style={styles.div}>
        <p style={styles.p} className="d-flex col-10 px-5 mx-5">
          Here are some links to projects I've worked on!
          </p>
          <p style={styles.p} className="d-flex col-10 px-5 mx-5">
          <a href="https://nsantander1095.github.io/gitpub/">GitPub</a>
        </p>
        <p style={styles.p} className="d-flex col-10 px-5 mx-5">
          <a href="https://thawing-springs-27251.herokuapp.com/">This is absolutely not Instagram.</a>
        </p>
        <p style={styles.p} className="d-flex col-10 px-5 mx-5">
          <a href="https://dry-tundra-29489.herokuapp.com/">Memory Game</a>
        </p>
      </div>
    </section>
  );
}
