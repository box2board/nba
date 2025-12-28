function Card({ title, children }) {
  return (
    <section className="card">
      <div className="cardHeader">
        <h2>{title}</h2>
      </div>
      <div className="cardBody">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="grid">
      <Card title="Today’s Focus">
        <ul className="list">
          <li>Spreads</li>
          <li>Totals</li>
          <li>Player Props</li>
        </ul>
        <p className="muted">
          Next up: auto-pull today’s lines and display star/thumb ratings with
          explanations.
        </p>
      </Card>

      <Card title="Today’s Lines (placeholder)" >
        <div id="lines" className="
