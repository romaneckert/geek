geek.database = function (data, classes) {

    this._tables = [];
    this._classes = classes;
    
    data.each(function (entry) {
		
		var table = entry.table;
		var classname = table;
		
        if (undefined === this[table]) {
            this[table] = [];
            this._tables.push(table);
        }
		
        if (undefined === this._classes[classname]) {
            console.log('ERROR: Model ' + classname + ' does not exist.');
        }

        var instance = new this._classes[classname]();
        instance._db = this;
        instance.setData(entry);

        this[table].push(instance);

    }, this);
    
    this.connect();

};

geek.database.prototype.connect = function () {

    this._tables.each(function (table) {

        this[table].each(function (instance) {

            instance.connect();
            
        }, this);
    }, this);

};

