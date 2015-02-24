Function.prototype.inherits = function(parent) {
  this.prototype = new parent();
  this.prototype.super = new parent();
  this.prototype.constructor = this;
};