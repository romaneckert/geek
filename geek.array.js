Array.prototype.each = Array.prototype.forEach;

Array.prototype.find = function(attributes) {
    
    var matches = [];
    
    this.each(function(elem) {
        
        var match = true;
        
        for(var attribute in attributes) {
            if(elem[attribute] !== attributes[attribute]) {
                match = false;
            }
        }
        
        if(match) {
            matches.push(elem);
        }
        
    });
    
    if(0 === matches.length) return null;
    if(1 === matches.length) return matches.first();
    
    return matches; 
    
};

Array.prototype.first = function() {
    return this[0];
};

Array.prototype.last = function() {
    return this[this.length - 1];
};
Array.prototype.keySort = function(key) {
	
    return this.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
};
