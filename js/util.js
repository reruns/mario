var Util = {};

Util.inherits = function(subclass, superclass) {
    function Surrogate() {};

    Surrogate.prototype = superclass.prototype;
    subclass.prototype = new Surrogate();
}