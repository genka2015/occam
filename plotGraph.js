

var graph = {
  // General configuration options
  general: {
    title: "Program Performance",
    titleColor: "#ccc",

    backgroundColor: "#FFFFFF",
    textColor: "#ccc",
	//showlegend: true,
	
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
		// Name for this group
        name:        "gcc",
		
		// Type for group  
		type: 		 "scatter",
		
        // Color for this group
        color:       "hsl(120, 60%, 60%)",

		// Visible 	true  |  false  |  "legendonly"
		visible:	 true,
		
		// Boolean
		showlegend:	 true,
		
		// Legend group for the legend
		legendgroup: "",
		
		// Opacity of the element	0-1
		opacity: 1,
		
		// Text to display
		text: "",
		
		//  any combination of "lines" "markers" "text" joined with "+" or "none"
		mode: "",
		
		//	line
		line:{
			width: 3,
			//	"linear" | "spline" | "hv" | "vh" | "hvh" | "vhv"
			shape: "spline",
			//  only for "spline", 0-1.3
			smoothing: "1",
			//  String, default "solid", set to dash type or pixel length
			dash: "5",
			//	Boolean; if gaps ({nan} or missing values) in data arrays are connected
			connectgaps: true,
			//	markers
			marker:{
				symbol: "0",
				opacity: 1,
				size: 8,
				color: "",
			},
		},
		
		//  bar
		bar:{
			// "h" | "v"  orientation of the bars
			orientation: "v",
			marker:{
				color: "",
			},
		}
      },
      {
		name:        "clang clang clang",
		type:		 "scatter",
        color:       "hsl(0, 60%, 60%)",
		visible:	 true,
		showlegend:	 true,
		legendgroup: "",
		opacity: 1,
		text: "",
		mode: "",
		line:{
			width: 3,
			shape: "spline",
			smoothing: "1",
			dash: "solid",
			connectgaps: true,
			marker:{
				symbol: "0",
				opacity: 1,
				size: 8,
				color: "",
			},
		},
		bar:{
			orientation: "v",
			marker:{
				color: "",
			},
		}
      },
      {
		name:        "msc",
		type:		 "scatter",
        color:       "hsl(180, 60%, 60%)",
		visible:	 true,
		showlegend:	 true,
		legendgroup: "",
		opacity: 1,
		text: "",
		mode: "",
		line:{
			width: 3,
			shape: "spline",
			smoothing: "1",
			dash: "solid",
			connectgaps: true,
			marker:{
				symbol: "0",
				opacity: 1,
				size: 8,
				color: "",
			},
		},
		bar:{
			orientation: "v",
			marker:{
				color: "",
			},
		}
      },
      {
		name:        "new",
		type:		 "scatter",
        color:       "hsl(30, 60%, 60%)",
		visible:	 true,
		showlegend:	 true,
		legendgroup: "",
		opacity: 1,
		text: "",
		mode: "",
		line:{
			width: 3,
			shape: "spline",
			smoothing: "1",
			dash: "solid",
			connectgaps: true,
			marker:{
				symbol: "0",
				opacity: 1,
				size: 8,
				color: "",
			},
		},
		bar:{
			orientation: "v",
			marker:{
				color: "",
			},
		}
      },
      {
		name:        "smth",
		type:		 "scatter",
        color:       "hsl(80, 60%, 60%)",
		visible:	 true,
		showlegend:	 true,
		legendgroup: "",
		opacity: 1,
		text: "",
		mode: "",
		line:{
			width: 3,
			shape: "spline",
			smoothing: "1",
			dash: "solid",
			connectgaps: true,
			marker:{
				symbol: "0",
				opacity: 0.5,
				size: 8,
				color: "",
			},
		},
		bar:{
			orientation: "v",
			marker:{
				color: "",
			},
		}
      },
      {
		name:        "here",
		type:		 "scatter",
        color:       "hsl(50, 60%, 60%)",
		visible:	 true,
		showlegend:	 true,
		legendgroup: "",
		opacity: 1,
		text: "huehue",
		mode: "lines+text",
		line:{
			width: 6,
			shape: "spline",
			smoothing: "1",
			dash: "solid",
			connectgaps: true,
			marker:{
				symbol: "0",
				opacity: 1,
				size: 8,
				color: "",
			},
		},
		bar:{
			orientation: "v",
			marker:{
				color: "",
			},
		}
      }
    ]
  }
};

//		Here's the data
var data = {
  datapoints: {
    groups: [{
      series: [20, 40, 90,75]
    }, {
      series: [73, 32,  76,70]
    }, {
      series: [13, 64,  64,26]
    }, {
      series: [22, 52,  70,18]
    }, {
      series: [34, 36,  50,10]
    }, {
      series: [60, 31,  49,60]
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
  var line_colors = groups.map(function(d) { return d.color; });
  var type = groups.map(function(d) { return d.type});
  var visible = groups.map(function(d) { return d.visible});
  var showlegend = groups.map(function(d) { return d.showlegend});
  var legendgroup = groups.map(function(d) { return d.legendgroup});
  var opacity = groups.map(function(d) { return d.opacity});
  var text = groups.map(function(d) { return d.text});
  var mode = groups.map(function(d) { return d.mode});
  
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
	  dataElement.type = type[i];				// "scatter" - line; "bar" - bar
	  dataElement.name = legend_labels[i];	//  line and legend name
	  dataElement.visible = visible[i];			//	true  |  false  |  "legendonly"
	  dataElement.showlegend = showlegend[i];		//  Boolean
	  dataElement.legendgroup = legendgroup[i];			//  String
	  dataElement.opacity = opacity[i];				//	0-1
	  dataElement.stream = {};
	  dataElement.stream.token = "id";		//  id number links data trace with stream
	  dataElement.stream.maxpoints = 50;	//	max points to display
	  dataElement.text = text[i];				//	text to display on data element
	  dataElement.mode = mode[i];				//  any combination of "lines" "markers" "text" joined with "+" or "none"
	  //------line options ----------------
	  if(type[i] == "scatter" || !type){
		dataElement.line = {};
		dataElement.line.color = line_colors[i];		// line color
		dataElement.line.width = groups[i].line.width;
		dataElement.line.shape = groups[i].line.shape;		//	"linear" | "spline" | "hv" | "vh" | "hvh" | "vhv"
		dataElement.line.smoothing = groups[i].line.smoothing;		//  only for "spline", 0-1.3
		dataElement.line.dash = groups[i].line.dash;			//  String, default "solid", set to dash type or pixel length
		dataElement.connectgaps = groups[i].line.connectgaps;		//	Boolean; if gaps ({nan} or missing values) in data arrays are connected
		
		dataElement.marker = {};
		dataElement.marker.symbol = groups[i].line.marker.symbol;
		dataElement.marker.opacity = groups[i].line.marker.opacity;
		dataElement.marker.size = groups[i].line.marker.size;
		dataElement.marker.color = groups[i].line.marker.color;
	  }
	  //--------bar options ---------------
	  if(type[i] == "bar"){
		dataElement.orientation = groups[i].bar.orientation;			// "h" | "v"  orientation of the bars
		dataElement.marker = {};
		dataElement.marker.color = groups[i].bar.marker.color;
	  }
	  if(type == "heatmap"){
		var z = [2];
		var test = [20,40,75,90];
		var test2 = [50,65,85,100];
		z[0] = test;
		z[1] = test2;
		dataElement.z = z;
	  }
	  if(type == "histogram"){
		
	  }
	  if(type == "histogram2d"){
		
	  }
	  if(type == "pie"){
		
	  }
	  if(type == "contour"){
		var z = [2];
		var test = [20,40,75,90];
		var test2 = [50,65,85,100];
		z[0] = test;
		z[1] = test2;
		dataElement.z = z;
	  }
	  if(type == "histogram2dcontour"){
		
	  }
	  if(type == "scatter3d"){
		dataElement.x = [35,44,57,70];
		var z = [10,25,50,75];
		//var test = [10,25,50,75];
		//var test2 = [50,65,85,100];
		//z[0] = test;
		//z[1] = test2;
		dataElement.z = z;
	  }
	  if(type == "surface"){
		
	  }
	  if(type == "mesh3d"){
		
	  }
	  if(type == "scattergeo"){
		
	  }
	  if(type == "choropleth"){
		
	  }
	  if(type == "scattergl"){
		
	  }
	  if(type == "area"){
		
	  }
	  if(type == "layout"){
		
	  }
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

var myGraph = document.getElementById('myGraph');
var plotData = []; 
var plotLayout = {};
plotData = setData(graph,data);
plotLayout = setLayout(graph,data);
Plotly.plot( myGraph, plotData, plotLayout );
