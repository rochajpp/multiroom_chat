module.exports = (app) => {
    app.get('/chat', (req, res) => {
        app.app.controllers.chat.chat(app, req, res);
    });
};