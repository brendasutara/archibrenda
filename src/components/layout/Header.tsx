import { Link, NavLink } from "react-router-dom";

export function Header() {
  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "#111827",
    fontSize: "0.95rem",
  };

  const activeStyle: React.CSSProperties = {
    ...linkStyle,
    fontWeight: 600,
    borderBottom: "2px solid #4f46e5",
  };

  return (
    <header
      style={{
        padding: "0.75rem 1.5rem",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10,
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#111827", fontWeight: 700 }}
      >
        Archibrenda 3D
      </Link>

      <nav style={{ display: "flex", gap: "1rem" }}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/portfolio"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Portfolio 3D
        </NavLink>
        <NavLink
          to="/como-trabajo"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Cómo trabajo
        </NavLink>
      </nav>
    </header>
  );
}
