//
//
//
// All this does is fetch 5 times a second.
//
//
//
console.log("Starting interval!");
setInterval(async () => {
  console.log("Making request at timestamp " + Date.now().valueOf() + "...");
  const res = await fetch(
    "http://example-server-app.apps.svc.cluster.local/example"
  );
  const jsonResponse = await res.json();
  console.log("Recieved data", jsonResponse);
}, 200);
