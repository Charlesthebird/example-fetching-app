//
//
//
// All this does is fetch every second or so.
//
//
//
console.log("Starting interval!");
setInterval(async () => {
  console.log("Making request...");
  const res = await fetch("example-server.apps.svc.cluster.local");
  console.log("Recieved data", res);
}, 1000);
