const metrics = [
  { value: "01", label: "Theme system included" },
  { value: "14", label: "Starter and monorepo variants" },
  { value: "100%", label: "Generic project copy" },
];

const tasks = [
  {
    title: "Interface shell",
    detail: "Responsive layout, metrics, task rows, and service details.",
    state: "ready",
  },
  {
    title: "Theme tokens",
    detail: "Palette, radius, shadow, and motion metadata for Urmate.",
    state: "ready",
  },
  {
    title: "Builder commands",
    detail: "Install, dev, build, and preview commands are documented.",
    state: "ready",
  },
];

const stack = [
  "Next.js",
  "Node.js",
  "TypeScript"
];

export default function Page() {
  return (
    <main className="page">
      <div className="shell">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">U</span>
            <div className="brand-name">
              <strong>Next.js + Node.js Monorepo</strong>
              <span>by Urmate</span>
            </div>
          </div>
          <span className="status-pill">Harbor Signal</span>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Full-stack monorepo</p>
            <h1>A product shell with a Node.js service beside it.</h1>
            <p className="lead">A two-app workspace with Next.js on the front and a dependency-light Node API in the backend.</p>
            <div className="cta-row">
              <span className="command-chip">npm run dev</span>
              <span className="mini-chip">Author: Urmate</span>
            </div>
          </div>

          <aside className="panel" aria-label="Project snapshot">
            <div className="panel-head">
              <div>
                <h2>Project snapshot</h2>
                <p>Starter details for a ready builder workspace.</p>
              </div>
              <span className="live-dot" aria-hidden="true" />
            </div>

            <div className="metrics">
              {metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="status-rail"><span /></div>

            <div className="task-list">
              {tasks.map((task, index) => (
                <article className="task" key={task.title}>
                  <span className="task-index">{index + 1}</span>
                  <div>
                    <h3>{task.title}</h3>
                    <p>{task.detail}</p>
                  </div>
                  <span className="task-state">{task.state}</span>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="details" aria-label="Template details">
          <article className="service-card">
            <p className="eyebrow">Stack</p>
            <h2>Ready pieces</h2>
            <div className="stack-row">
              {stack.map((item) => (
                <span className="stack-chip" key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="service-card">
            <p className="eyebrow">Service</p>
            <h2>Local endpoint</h2>
            <p>The starter keeps the first route visible for quick checks in Builder.</p>
            <code>/api/health</code>
          </article>
        </section>
      </div>
    </main>
  );
}
