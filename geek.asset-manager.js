var AssetManager = function () {
    this.path = '/img/';
    this.cache = [];
    this.successCounter = 0;
    this.errorCounter = 0;
    this.counter = 0;
    this.quality = 1;
};

AssetManager.prototype = {
    
    add : function(identifier) {
        
        var id = identifier;
        this.cache.push({id: id, identifier : identifier, img : new Image(), path : null, loaded : null});
        
    },
    
    get : function(identifier) {
        
        var image = null;
        
        $.each(this.cache, function(i) {
            
            if(this.cache[i].identifier === identifier) {
                image = this.cache[i].img;
            }
            
        }.bind(this));
        
        return image;
    },
    
    load : function() {
        
        $.each(this.cache, function(i) {
            
            $(this.cache[i].img).on('load error', function(event) {
                
                if('load' === event.type) {
                    this.cache[i].loaded = true;
                    this.successCounter++;
                    this.counter++;
                }
                
                if('error' === event.type) {
                    this.cache[i].loaded = false;
                    this.errorCounter++;
                    this.counter++;
                }
                
                $(this).trigger('loaded');
                
                if(this.counter === this.cache.length) {
                    $(this).trigger('complete');
                } else {
                    this.load();
                }
                
            }.bind(this));
            
            if(null === this.cache[i].path) {
                this.cache[i].path = this.path + this.cache[i].identifier + '/' + this.quality + '.jpg';
                this.cache[i].img.src = this.cache[i].path;
                return false;
            }
            
        }.bind(this));
        
    }
};