export function BasicLights() {
  return (
    <>
      {/* Luz base suave */}
      <ambientLight intensity={0.6} />

      {/* Luz rosada desde izquierda */}
      <directionalLight position={[-5, 5, 5]} intensity={2} color="#ff7ae5" />

      {/* Luz violeta desde arriba */}
      <directionalLight position={[0, 8, 5]} intensity={1.5} color="#c084fc" />

      {/* Luz azul fría desde atrás */}
      <directionalLight position={[6, 4, -3]} intensity={1.2} color="#60a5fa" />
    </>
  );
}
