angular.module('app')
    .service('PedidoService', PedidoService);

PedidoService.$inject = ['$http']

function PedidoService ($http) {
    var URL = '/pedidos';

    var service = this;

    service.findAll = function () {
        return $http.get(URL)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.findOne = function (id) {
        return $http.get(URL + '/' + id)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.update = function (id, pedido) {
        return $http.put(URL + '/' + id, pedido)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (pedido) {
        return $http.post(URL, pedido)
            .then(function(resp) {
                return resp.data;
            });
    }

}