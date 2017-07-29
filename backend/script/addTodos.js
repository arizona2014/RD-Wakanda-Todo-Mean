var csvLocation = ds.getModelFolder().path + "data/data.csv";
var log = "before: " + ds.Todo.length;

ds.Todo.all().remove();

function doImport(){
	var lines = loadText(csvLocation).split("\n");
	var columns = [],
    newTodo = {};
    
	lines.forEach(function(oneLine) {
    	columns = oneLine.split(",");
    	newTodo = ds.Todo.query("label == :1", columns[1]);
    	if (newTodo.length < 1) {
    		newTodo = new ds.Todo({
        		label: "columns[1]",
	        	completed: columns[2]
    		});
    	newTodo.save();
    }

  });    
    
}