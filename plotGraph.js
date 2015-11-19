
// Stays the same

var graph = {
  // General configuration options
  general: {
    title: "Program Performance",
    titleColor: "#ccc",

    backgroundColor: "#FFFFFF",
    textColor: "#ccc",

    domains: {
      x: {
        // The color of the axis
        color: "#222",
        tickColor: "#333",
        minorTickColor: "#383838",
        textColor: "#ccc",

        // The label for each value
        series: [{
          name: "fft"
        }, {
          name: "mmult"
        }, {
          name: "tar"
        }, {
		  name: "blob"
		}],

        // The overall label for the axis
        name: "Application"
      },
      y: {
        // The color of the axis
        color: "#222",
        tickColor: "#333",
        minorTickColor: "#3d3d3d",
        textColor: "#ccc",

        // The min/max values
        min: 0,
        max: 100,

        // Tick steps
        majorStep: 10, // Major steps get a text label
        minorStep: 2,  // Minor steps get just a tick

        // The overall label for the axis
        name: "% of cpu"
      }
    }
  },
  datapoints: {
    groups: [
      {
        // Color for this group
        color:       "hsl(120, 60%, 60%)",

        // Name for this group
        name:        "gcc",
      },
      {
        color:       "hsl(0, 60%, 60%)",
        name:        "clang clang clang",
      },
      {
        color:       "hsl(180, 60%, 60%)",
        name:        "msc",
      },
      {
        color:       "hsl(30, 60%, 60%)",
        name:        "new",
      },
      {
        color:       "hsl(80, 60%, 60%)",
        name:        "smth",
      },
      {
        color:       "hsl(50, 60%, 60%)",
        name:        "here",
      }
    ]
  }
};

//		Here's the data
var data = {
  datapoints: {
    groups: [{
      series: [80, 100, 90,75]
    }, {
      series: [73, 80,  76,70]
    }, {
      series: [93, 84,  64,86]
    }, {
      series: [82, 92,  70,78]
    }, {
      series: [74, 86,  90,100]
    }, {
      series: [72, 61,  89,74]
    }]
  }
};

function setData(description, data){
  var dataArray = [];
	// Look at configuration parameters
  var configuration = description.general;
  var groups = description.datapoints.groups;

  // Get the data dimensions
  data = data.datapoints.groups;
  var n = data[0].series.length;	// 4 elements of Y in each object
  var m = data.length;		// 6 data objects to make
  var xLabels = configuration.domains.x.series || [];
  var legend_labels = groups.map(function(d) { return d.name; });
  
  if (xLabels === undefined) {
    xLabels = [];
  }
  
  //	Set X Labels
  var x = [];
  if (xLabels.length < n+1) {
	  xLabels.forEach(function(k,i){
		 x.push(k.name);
	  });
  }
  else alert("xLabels error");
  //console.log(x);
  
  for(var i=0;i<m;i++){
	  var dataElement = {};
	  dataElement.x = x;						// Assigning X values to one data object
	  dataElement.y = data[i].series;			// Assigning Y values
	  dataElement.type = "scatter";				// "scatter" - line; "bar" - bar
	  dataElement.name = legend_labels[i];		//  line and legend name
	  //------line options ----------------
	  dataElement.line = {};
	  //dataElement.line.color = "blue";		// line color
	  dataElement.line.shape = "spline";		//	"linear" | "spline" | "hv" | "vh" | "hvh" | "vhv"
	  
	  //--------bar options ---------------
	  //dataElement.orientation = "h";			// "h" | "v"  orientation of the bars
	  
	  dataArray.push(dataElement);	// Adding data object to the array
  }
  return dataArray;
}


function setLayout(description, data){
	
  var layout = {};
	// Look at configuration parameters
  var configuration = description.general;
  var groups = description.datapoints.groups;
  
  // Set graph title
  layout.title = configuration.title;
  
  layout.titlefont = {};
  layout.titlefont.color = configuration.titleColor;
  
  // Set graph background color
  layout.plot_bgcolor = configuration.backgroundColor;
  
  // Set autosize?
  //layout.autosize = true;
  
  // Set X axis attributes
  layout.xaxis = {};
  layout.xaxis.title = configuration.domains.x.name;
  layout.xaxis.titlefont = {};
  //layout.xaxis.titlefont.family
  //layout.xaxis.titlefont.size		//	>= 1
  layout.xaxis.titlefont.color = configuration.domains.x.textColor
  
  // Set Y axis attributes
  layout.yaxis = {};
  layout.yaxis.title = configuration.domains.y.name;
  layout.yaxis.titlefont = {};
  //layout.yaxis.titlefont.family
  //layout.yaxis.titlefont.size		//	>= 1
  layout.yaxis.titlefont.color = configuration.domains.y.textColor
  
  return layout;
}

//  Plot the graph with Plotly

var myGraph = document.getElementById('myGraph');
var plotData = []; 
var plotLayout = {};
plotData = setData(graph,data);
plotLayout = setLayout(graph,data);
Plotly.plot( myGraph, plotData, plotLayout );
