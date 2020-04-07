const express = require('express');

const app = express();

var serialport = require('serialport');

var port=3000;
var arduionComPort= "/dev/cu.usbmodemFD1201";

var arduinoSerialPort = new serialport(arduionComPort,{ baudRate: 9600});

arduinoSerialPort.on('open',() => {
    console.log('Serial port ' + arduionComPort + ' Opoen');
});

app.get('/', (req,resp) => {
    return resp.send('working');
});

app.get('/:action', (req,resp) => {
    var action = req.params.action || req.params('action');


    arduinoSerialPort.write(action);
    return resp.send('Luz ' + action);

    
});

app.listen(port, () => {
    console.log('ejemplo de listening en ' + port);
})