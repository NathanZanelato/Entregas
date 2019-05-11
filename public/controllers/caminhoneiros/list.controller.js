angular.module('app')
    .controller('CaminhoneiroListController', CaminhoneiroListController);

CaminhoneiroListController.$inject = ['CaminheiroService'];

function CaminhoneiroListController(CaminhoneiroService){
    var vm = this;
    vm.clientes = [];

    function _load() {
        CaminhoneiroService.findAll()
            .then(function (dados) {
                vm.clientes = dados;
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