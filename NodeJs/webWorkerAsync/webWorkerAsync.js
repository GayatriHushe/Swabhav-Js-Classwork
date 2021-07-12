document.getElementById('hello').addEventListener("click", function() {
    console.log("Hello");
})

document.getElementById('sync').addEventListener("click", function() {
    while (true)
        console.log("Sync")
})

document.getElementById('async').addEventListener("click", function() {
    const workerObj = new Worker("worker.js");
    workerObj.postMessage("Start Worker");
})