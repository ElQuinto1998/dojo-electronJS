const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow } = electron;

let win;

function createWindow() {
    //ventana principal
    win = new BrowserWindow({ width: 1300, height: 800, icon: path.join(__dirname, 'img/logo.png') });

    //cargar archivo
    win.loadURL(url.format({
        //enviar propiedades
        pathname: path.join(__dirname, 'home.html'),
        protocol: 'file',
        slashes: true
    }));
}

app.on('ready', createWindow);