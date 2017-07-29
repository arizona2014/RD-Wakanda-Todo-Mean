
model.Todo.events.save = function(event) {
	this.userID = directory.currentUser.ID;
};
model.Todo.events.restrict = function(event) {
	return ds.Todo.query("userID ==:1", directory.currentUser.ID);
};