String.prototype.isNumeric = function() {
    return !isNaN(this);
};
String.prototype.capitalise = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};