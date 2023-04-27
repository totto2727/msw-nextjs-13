export async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
    console.log("start mock in server");
  } else {
    const { worker } = await import("./browser");
    worker.start();
    console.log("start mock in browser");
  }
}
