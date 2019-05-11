angular.module('app')
    .controller('PedidoListController', PedidoListController);

PedidoListController.$inject = ['PedidoService'];

function PedidoListController(PedidoService){
    var vm = this;
    vm.pedidos = [];

    function _load() {
        PedidoService.findAll()
            .then(function (dados) {
                vm.pedidos = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            PedidoService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}