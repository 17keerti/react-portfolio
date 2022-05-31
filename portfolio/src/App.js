import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const styles = {
  color: {
    background: "#F9FFFF",
  },
};

function App() {
  return (
    <div style={styles.color}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
