import "../hojas-de-estilo/Footer.css";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FFE3E3",
        color: "black",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>Juan Clemente Davio 2023</p>
      <p style={{ margin: 0 }}>
        Contacto:{" "}
        <a
          href="https://www.linkedin.com/in/juan-clemente-davio-a1262518a/"
          style={{ color: "green", textDecoration: "none" }}
        >
          Linkedin
        </a>
      </p>
    </footer>
  );
}

export default Footer;
