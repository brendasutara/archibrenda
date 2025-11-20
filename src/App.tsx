import { Scene3D } from "./components/Scene3D";

function App() {
  return (
    <div
      style={{ height: "100vh", display: "grid", gridTemplateRows: "auto 1fr" }}
    >
      <header
        style={{
          padding: "1rem",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Archibrenda · Modelado 3D en arquitectura</h1>
        <span style={{ fontSize: "0.9rem", opacity: 0.7 }}>
          React + TS + R3F
        </span>
      </header>

      <main>
        <Scene3D />
      </main>
    </div>
  );
}

export default App;
