import { io } from "socket.io-client";

const serverURl = "http://172.104.174.187:3054";
// const serverURl = "http://localhost:3054";
const socket = io(serverURl);


//Event emitters.

export const emitData = (data) => {
    console.log('data-logs event triggered!')
  socket.emit("data-logs", data);
};

export const emitAnalysis = (data) => {
  console.log('analysis event triggered')
socket.emit("analysis", data);
};

//Event listeners.

export const listenerData = (lines) => {
  socket.on("data-logs",(d) => {
    const {a, b} = d;
    console.log('listened data-logs event');
    lines(b)
    const myDiv = document.getElementById("data").innerHTML
    document.getElementById("data").innerHTML = myDiv + a;
  })
}



  socket.on("analysis",(d) => {
    console.log('listened analysis event')
    console.log('Analysis: ', d);
  })
