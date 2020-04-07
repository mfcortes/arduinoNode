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


    if (action == 'led')
    {
        arduinoSerialPort.write("1");
        return resp.send('Prendimos la luz');
    }

    if (action == 'off'){
        arduinoSerialPort.write("0");
        return resp.send('Apagamos Led')
    }

    if (action == 'int') {
        arduinoSerialPort.write("2");
        return resp.send('luz inetermitente ');
    }
});

app.listen(port, () => {
    console.log('ejemplo de listening en ' + port);
})