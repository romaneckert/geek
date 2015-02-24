geek.model = function () {};

geek.model.prototype.connections = [];

geek.model.prototype.table = function() {
	return this._table;
};

geek.model.prototype.setData = function(data) {
        
    for(var key in data) {
        
        this['_' + key] = data[key];

        if(this['_' + key] && this['_' + key].isNumeric()) {
            this['_' + key] = Number(this['_' + key]);
        }
    }

};
    
geek.model.prototype.connect = function() {
        
    this.connections.each(function(connection) {
        
        switch(connection.type) {
            case 'belongs_to':
                
                if(!this['_' + connection.name]) {
                    this['_' + connection.name] = null;
                }
                
                this._db[connection.model + 's'].each(function(model) {

                    if(model['_' + connection.primary_key] === this['_' + connection.foreign_key]) {

                        this['_' + connection.name] = model;

                    }
                }, this);
                break;
                
            case 'has_many':
                
                if(!this['_' + connection.name]) {
                    this['_' + connection.name] = [];
                }
                
                this._db[connection.model + 's'].each(function(model) {
                    
                    var match = true;
                    
                    if(connection.match) {
                        
                        match = false;
                        
                        for(var key in connection.match) {
                            
                            if(model['_' + key] === connection.match[key]) {
                                match = true;
                            } else {
                                match = false;
                            }
                        }
                    }
                    
                    if(this['_' + connection.primary_key] === model['_' + connection.foreign_key] && match) {

                        this['_' + connection.name].push(model);

                    }
                }, this);
                break;
        }
    }, this);
    
};


