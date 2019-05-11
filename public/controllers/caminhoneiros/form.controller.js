angular.module('app')
    .controller('CaminhoneiroFormController', CaminhoneiroFormController);

CaminhoneiroFormController.$inject = [
    'CaminhoneiroService', 
    '$stateParams', 
    '$state'
];

function CaminhoneiroFormController (CaminhoneiroService, $stateParams, $state){
    var vm = this;
    vm.caminhoneiro = {};
    vm.titulo = 'Novo caminhoneiro';

    if ($stateParams.id) {
        vm.titulo = 'Editando caminhoneiro';
        CaminhoneiroService.findOne($stateParams.id)
            .then(function (data) {
                vm.caminhoneiro = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            CaminhoneiroService
                .update($stateParams.id, vm.caminhoneiro)
                .then(function() {
                    $state.go('caminhoneiroList');
                });
        } else {
            CaminhoneiroService
                .insert(vm.caminhoneiro)
                .then(function() {
                    $state.go('caminhoneiroList');
                });
        }
    }
}