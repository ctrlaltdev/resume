const {ipcMain} = require('electron')

ipcMain.on('asynchronous-message', (event, arg) => {
  switch(arg) {
    case 'execute order 66':
      event.sender.send('asynchronous-reply', 'jedi killed')
      break

    default:
      event.sender.send('asynchronous-reply', 'unknown event')
  }
})