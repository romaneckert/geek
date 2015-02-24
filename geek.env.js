geek.env = function () {

    this.width = null;
    this.height = null;
    
    this.KM_TO_UNIT_FACTOR = 1;
	
	this.update();
	
};

geek.env.prototype = {
    
    update : function () {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    },

};



