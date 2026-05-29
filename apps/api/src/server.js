import { createServer } from "node:http";

const port = Number(process.env.PORT || 8787);
const startedAt = new Date().toISOString();

function sendJson(response, status, payload) {
  const body = JSON.stringify(payload, null, 2);
  response.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
  });
  response.end(body);
}

const server = createServer((request, response) => {
  const url = new URL(request.url || "/", "http://localhost");

  if (url.pathname === "/" || url.pathname === "/api/health" || url.pathname === "/health") {
    sendJson(response, 200, {
      ok: true,
      service: "Next.js + Node.js Monorepo",
      author: "Urmate",
      theme: "Harbor Signal",
      startedAt,
    });
    return;
  }

  sendJson(response, 404, {
    ok: false,
    error: "Route not found",
    path: url.pathname,
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log("Next.js + Node.js Monorepo API listening on http://0.0.0.0:" + port);
});
