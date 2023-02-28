const app = require('./config/server');


const server = app.listen('80', () => {
    console.log('Servidor online');
}); 


// Parametrizar servidor socket.io

// Versão 2.0.3 de socket.io
const io = require('socket.io').listen(server); // Na porta 80 tantos requisições HTTP e requisições websockets serão recebidas e interpretadas

// Criar a conexão por websocket
io.on('connection', (socket) => {
    console.log('Usuário conectou');

    socket.on('disconnect', () => {
        console.log('Usuário desconectou');
    });
});