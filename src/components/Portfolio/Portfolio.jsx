
import React, { useState } from "react";
import Oquvchilar from "./oquvchilar";
import SinfRahbar from "./SinfRahbar";
import "./Portfolio.css";

export default function Portfolio() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("Bosh sahifa");
  const [error, setError] = useState("");

  const menuItems = [
    { name: "Bosh sahifa", icon: "⌂" },
    { name: "O‘quvchilar", icon: "♙" },
    { name: "Sinf rahbar", icon: "♧" },
  ];

  function handleLogin(e) {
    e.preventDefault();

    if (password === "1234") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Parol noto‘g‘ri! Qaytadan urinib ko‘ring.");
    }
  }

  const styles = {
    app: {
      minHeight: "100vh",
      background: "#080d18",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
    },
    loginPage: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      boxSizing: "border-box",
      background:
        "radial-gradient(circle at top right, #173d70, #080d18 55%)",
    },
    loginCard: {
      width: "100%",
      maxWidth: "400px",
      padding: "35px",
      boxSizing: "border-box",
      background: "#111c2e",
      border: "1px solid #263a57",
      borderRadius: "20px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
    },
    logo: {
      width: "65px",
      height: "65px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px",
      borderRadius: "18px",
      background: "#2563eb",
      fontSize: "25px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "14px",
      marginTop: "10px",
      boxSizing: "border-box",
      background: "#080d18",
      color: "#fff",
      border: "1px solid #334155",
      borderRadius: "10px",
      outline: "none",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "14px",
      marginTop: "18px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      fontWeight: "bold",
      fontSize: "15px",
      cursor: "pointer",
    },
    layout: {
      minHeight: "100vh",
      display: "flex",
    },
    sidebar: {
      width: "250px",
      flexShrink: 0,
      padding: "25px 15px",
      boxSizing: "border-box",
      background: "#0c1423",
      borderRight: "1px solid #263247",
    },
    brand: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "0 10px 25px",
      borderBottom: "1px solid #263247",
      marginBottom: "25px",
    },
    brandIcon: {
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#2563eb",
      borderRadius: "12px",
      fontWeight: "bold",
    },
    menuButton: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "14px",
      marginBottom: "8px",
      border: "none",
      borderRadius: "10px",
      color: "#cbd5e1",
      textAlign: "left",
      fontSize: "15px",
      cursor: "pointer",
    },
    main: {
      flex: 1,
      minWidth: 0,
      padding: "30px",
      boxSizing: "border-box",
    },
    topbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
      marginBottom: "30px",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "18px",
      marginTop: "25px",
    },
    card: {
      padding: "25px",
      background: "#111c2e",
      border: "1px solid #263a57",
      borderRadius: "16px",
    },
    number: {
      margin: "12px 0",
      color: "#60a5fa",
      fontSize: "32px",
      fontWeight: "bold",
    },
    pageButton: {
      padding: "12px 16px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "9px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  if (!loggedIn) {
    return (
      <div style={styles.loginPage}>
        <form style={styles.loginCard} onSubmit={handleLogin}>
          <div style={styles.logo}>25</div>

          <h1 style={{ textAlign: "center", fontSize: "25px" }}>
            25-maktab
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              marginBottom: "28px",
            }}
          >
            7-A sinf elektron sahifasi
          </p>

          <label htmlFor="password">Parolni kiriting</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parol..."
            style={styles.input}
            autoComplete="current-password"
            required
          />

          {error && (
            <p style={{ color: "#f87171", fontSize: "14px" }}>
              {error}
            </p>
          )}

          <button type="submit" style={styles.button}>
            Saytga kirish →
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "12px",
              marginTop: "20px",
            }}
          >
            25-maktab • 7-A sinf
          </p>
        </form>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      <div style={styles.layout}>
        <aside style={styles.sidebar}>
          <div style={styles.brand}>
            <div style={styles.brandIcon}>25</div>
            <div>
              <strong>25-MAKTAB</strong>
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                7-A sinf
              </div>
            </div>
          </div>

          <p
            style={{
              color: "#64748b",
              fontSize: "11px",
              paddingLeft: "12px",
              letterSpacing: "1px",
            }}
          >
            ASOSIY MENYU
          </p>

          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name)}
              style={{
                ...styles.menuButton,
                background:
                  activePage === item.name ? "#1d4ed8" : "transparent",
                color: activePage === item.name ? "#fff" : "#cbd5e1",
              }}
            >
              <span style={{ fontSize: "22px", width: "25px" }}>
                {item.icon}
              </span>
              {item.name}
            </button>
          ))}

          <div
            style={{
              marginTop: "35px",
              padding: "15px",
              background: "#111c2e",
              borderRadius: "12px",
              color: "#94a3b8",
              fontSize: "12px",
              lineHeight: "1.7",
            }}
          >
            <strong style={{ color: "#fff" }}>Bizning sinf</strong>
            <br />
            25-maktab, 7-A
            <br />
            Bilim sari olg‘a!
          </div>
        </aside>

        <main style={styles.main}>
          <div style={styles.topbar}>
            <div>
              <h1 style={{ margin: 0, fontSize: "27px" }}>
                {activePage}
              </h1>
              <p style={{ color: "#94a3b8", marginBottom: 0 }}>
                25-maktab • 7-A sinf elektron sahifasi
              </p>
            </div>

            <button
              style={styles.pageButton}
              onClick={() => {
                setLoggedIn(false);
                setPassword("");
                setActivePage("Bosh sahifa");
              }}
            >
              Chiqish
            </button>
          </div>

          {activePage === "Bosh sahifa" && (
            <div>
              <div
                style={{
                  padding: "30px",
                  background:
                    "linear-gradient(120deg, #123b70, #111c2e 75%)",
                  border: "1px solid #263a57",
                  borderRadius: "18px",
                }}
              >
                <p style={{ color: "#93c5fd", marginTop: 0 }}>
                  XUSH KELIBSIZ!
                </p>

                <h2 style={{ fontSize: "30px", margin: "12px 0" }}>
                  7-A sinf sahifasiga xush kelibsiz!
                </h2>

                <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
                  Bu yerda sinfdoshlarimiz, ularning qiziqishlari
                  va sinf rahbarimiz haqida ma’lumot olishingiz mumkin.
                </p>

                <button
                  style={styles.pageButton}
                  onClick={() => setActivePage("O‘quvchilar")}
                >
                  O‘quvchilarni ko‘rish →
                </button>
              </div>

              <div style={styles.cardGrid}>
                <div style={styles.card}>
                  <div style={{ color: "#94a3b8" }}>
                    Maktab
                  </div>
                  <div style={styles.number}>25</div>
                  <div style={{ color: "#cbd5e1" }}>
                    25-maktab
                  </div>
                </div>

                <div style={styles.card}>
                  <div style={{ color: "#94a3b8" }}>
                    Sinfimiz
                  </div>
                  <div style={styles.number}>7-A</div>
                  <div style={{ color: "#cbd5e1" }}>
                    Yettiinchi A sinf
                  </div>
                </div>

                <div style={styles.card}>
                  <div style={{ color: "#94a3b8" }}>
                    Sinf rahbari
                  </div>
                  <div
                    style={{
                      color: "#60a5fa",
                      fontSize: "21px",
                      fontWeight: "bold",
                      margin: "12px 0",
                    }}
                  >
                    Ruhsora
                  </div>
                  <button
                    style={styles.pageButton}
                    onClick={() => setActivePage("Sinf rahbar")}
                  >
                    Ma’lumot →
                  </button>
                </div>
              </div>
            </div>
          )}

          {activePage === "O‘quvchilar" && <Oquvchilar />}

          {activePage === "Sinf rahbar" && <SinfRahbar />}
        </main>
      </div>
    </div>
  );
}
