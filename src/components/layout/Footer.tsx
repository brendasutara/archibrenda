export function Footer() {
  return (
    <footer
      style={{
        padding: "1rem 1.5rem",
        borderTop: "1px solid #e5e7eb",
        fontSize: "0.8rem",
        color: "#6b7280",
        textAlign: "center",
      }}
    >
      © {new Date().getFullYear()} Archibrenda · Modelado BIM y visualización 3D
    </footer>
  );
}
