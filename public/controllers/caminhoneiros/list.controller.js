angular.module('app')
    .controller('CaminhoneiroListController', CaminhoneiroListController);

CaminhoneiroListController.$inject = ['CaminhoneiroService'];

function CaminhoneiroListController(CaminhoneiroService){
    var vm = this;
    vm.caminhoneiros = [];

    function _load() {
        CaminhoneiroService.findAll()
            .then(function (dados) {
                vm.caminhoneiros = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            CaminhoneiroService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}