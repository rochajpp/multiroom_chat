module.exports.iniciarChat = (app, req, res) => {

    let name = req.body

    req.assert('name', 'Nome obrigatório').notEmpty();
    req.assert('name', 'O nome deve conter entre 3 e 15 caracteres').len(2, 15);

    if(req.validationErrors()){
        res.render('home', {validacao: req.validationErrors()});
        return;
    };

    res.render('chat');
};
