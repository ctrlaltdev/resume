#!/usr/bin/env node

var srv = require('./srv');
var debug = require('debug')('test:server');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
srv.set('port', port);

var server = http.createServer(srv);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}



const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')

let win
  
function createWindow () {
  win = new BrowserWindow({width: 800, height: 600, icon: __dirname + '/public/img/icon.png'})
  win.setMenu(null)

  win.loadURL(url.format({
    pathname: "localhost:" + port,
    protocol: 'http:',
    slashes: true
  }))

  win.webContents.on('dom-ready', (event) => {
    let hist = event.sender.webContents.history;
    let lastpage = hist[hist.length-1];
    if(lastpage.slice(-4) == "gen/"){
      setTimeout(printResume, 1000);
    }
  })

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
  
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
  
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
  
function printResume() {
  let opts = {
    pageSize: "Letter",
    printBackground: true
  }
  win.webContents.printToPDF(opts, (error, data) => {
    if (error) throw error
    fs.writeFile(__dirname + '/public/pdf/resume.pdf', data, (error) => {
      if (error) throw error
      console.log('ResumeSaved.')
      
      win.loadURL(url.format({
        pathname: "localhost:" + port + "/pdf",
        protocol: 'http:',
        slashes: true
      }))
    })
  })
}