angular.module('tasafoconf2015.filters', [])
    .filter('formataHora', function() {
        return function(input) {
            var output = input;
            try {
                output = input.slice(0, 2) + ':' + input.slice(2, 4);
            } catch (e) {}
            return output;
        }
    });
