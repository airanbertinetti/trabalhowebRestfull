
angular.module('clientesApp').controller('InserirDisciplinaCtrl', 
function($scope, $http, $location, clientesService) {

$scope.submitForm = function() {
$http.post("/clientes", $scope.cliente).
then(function success(response) {
clientesService.addCliente($scope.cliente)
$location.path("/")
});
}
});