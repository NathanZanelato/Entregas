angular.module('app')
    .service('CaminhoneiroService', CaminhoneiroService);

CaminhoneiroService.$inject = ['$http']

function CaminhoneiroService ($http) {
    var URL = '/caminhoneiros';

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

    service.update = function (id, caminhoneiro) {
        return $http.put(URL + '/' + id, caminhoneiro)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (caminhoneiro) {
        return $http.post(URL, caminhoneiro)
            .then(function(resp) {
                return resp.data;
            });
    }

}