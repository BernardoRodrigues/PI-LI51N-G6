const net = require('net')
const fs = require('http')
// const bootstrap = require('bootstrap')

let server = net.createServer(connection => {
    console.log("Client Connected")
    connection.on('end', () => console.log('Client Disconnected'))
    connection.on('error', () => {throw error})
    connection.on('data', data => dispatcher(data, s => connection.write(s)))
})

server.listen(5000, () => console.log('server bound'))

function dispatcher(data, callback) {
    console.log(data)
    callback("<html><head></head><title>Teste</title></html>")
}