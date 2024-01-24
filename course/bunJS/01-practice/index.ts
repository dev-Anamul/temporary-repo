Bun.serve({
  port: 3000,
  hostname: "localhost",
  fetch(req) {
    const pathname = req.url;

    if (pathname === "/") {
      return new Response("Hello World");
    }

    if (pathname === "/json") {
      return new Response(JSON.stringify({ hello: "world" }), {
        headers: { "content-type": "application/json" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});
