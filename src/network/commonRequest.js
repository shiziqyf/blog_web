




export const statisVisit = (pageName) => {
    
    // request()

}

function request(pageName) {

    console.log(returnCitySN["cip"]+','+returnCitySN["cname"])  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:90/statistics/visitLog", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({pageName: pageName}));

}


// function iterateIP(ip) {
//     if (!localIPs[ip]) onNewIP(ip);
//     localIPs[ip] = true;
// }
// //create a bogus data channel
// pc.createDataChannel("");
// // create offer and set local description
// pc.createOffer().then(function (sdp) {
//     sdp.sdp.split('\n').forEach(function (line) {
//         if (line.indexOf('candidate') < 0) return;
//         line.match(ipRegex).forEach(iterateIP);
//     });
//     pc.setLocalDescription(sdp, noop, noop);
// }).catch(function (reason) {
//     // An error occurred, so handle the failure to connect
// });
// //sten for candidate events
// pc.onicecandidate = function (ice) {
//     if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
//     ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
// };
