// File System Module(fs)
const fs = require("fs");

// 1 FileName
// 2 File Content
// 3 Callback Function
fs.writeFile('report.txt', "Hello It's a NodeJS session", (err) => {
    if(err){
        console.log("Error writing in File");
        return;
    }

    console.log("File created and written successfully");
});

// OS Module
const os = require("os");

console.log("User system platform", os.platform());
console.log("OS Type", os.type());
console.log("OS Release", os.release());
console.log("OS Version", os.version());
console.log("Architecture", os.arch());

console.log("Total Memory", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Current Free Memory", (os.freemem() / (1024 ** 3)).toFixed(2));

console.log("Display uptime", (os.uptime() / 3600).toFixed(2));

console.log("Network", os.networkInterfaces());

// Events module

// 1 - Realtime Messaging system
const EventEmitter = require("events");
const chatEvents = new EventEmitter(); // new -> Instance

// on -> once it is started, it will never off.
chatEvents.on('newMessage', (user, message) => {
    console.log(`New message from ${user}: ${message}`);
});

// trigger
chatEvents.emit('newMessage', "Narasimhan", "We have a session today");
chatEvents.emit('newMessage', "Arun", "Noted. Will join on time");


// 2 - Payment Event
