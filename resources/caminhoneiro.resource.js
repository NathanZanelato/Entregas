const mongoose = require('mongoose');
const caminhoneirosModel = mongoose.model('caminhoneiros');

module.exports = function (app) {
    app.get('/caminhoneiros', function (req, resp) {
        caminhoneirosModel.find()
            .then(
                function (data) {
                    resp.status(200).send(data);
                }, 
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.post('/caminhoneiros', function (req, resp) {
        caminhoneirosModel.create(req.body)
            .then(
                function (data) {
                    resp.status(201).send(data);
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.get('/caminhoneiros/:id', function (req, resp) {
        caminhoneirosModel.findById(req.params.id)
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.put('/caminhoneiros/:id', function (req, resp) {
        caminhoneirosModel.findOneAndUpdate({ '_id': req.params.id }, req.body)
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.delete('/caminhoneiros/:id', function (req, resp) {
        caminhoneirosModel.deleteOne({ '_id': req.params.id })
            .then(
                function () {
                    resp.status(204).send();
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
}