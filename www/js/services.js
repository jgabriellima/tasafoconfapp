angular.module('tasafoconf2015.services', []).factory("ProgramacaoService", function($http, $q) {
    var public = {};
    public.categoria = function() {
        var deffered = $q.defer();
        $http({
            method: 'GET',
            url: '',
            cache: false
        }).success(function(data) {
            if (data.length>0) {
                deffered.resolve({
                    status: 200,
                    results: data
                });
            } else {
                deffered.resolve({
                    status: 204,
                    results: data
                });
            }
            public.results = data;
        }).error(function() {
            deffered.resolve({
                status: 500
            });
        });
        return deffered.promise;
    };
    return public;
});
