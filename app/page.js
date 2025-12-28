export default function HomePage() {
  return (
    <main style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
        🏀 Box2Board — NBA
      </h1>

      <p style={{ color: "#555", marginBottom: "24px" }}>
        Live lines, props, and analytics coming soon.
      </p>

      <section>
        <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
          Today’s Focus
        </h2>

        <ul>
          <li>Spreads</li>
          <li>Totals</li>
          <li>Player Props</li>
        </ul>
      </section>
    </main>
  );
}
