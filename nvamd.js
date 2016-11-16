	function nvamd()
	{
	var width = 960; var height = 293;
	var svgctrl = d3.select(".article").append("svg").attr("width", width).attr("height", height);
	var len;
	var max_y;

	d3.csv("https://george0828zhang.github.io/D3/NvidiaStock.csv", function(data)
		{
			len = data.length;
			console.log(data);
			max_y = d3.max(data, function(d){return d.close});
			var lines = d3.line().x(function(d, i){return i * (width/len);}).y(function(d){return height*(1 - d.close / max_y)});
			svgctrl.append("path").data([data]).attr("d", lines).attr("stroke", "green").attr("stroke-width", 3).attr("fill", "none");
		}
	);

	d3.csv("https://george0828zhang.github.io/D3/AMDStock.csv", function(data)
		{
			console.log(data);
			var lines = d3.line().x(function(d, i){return i * (width/len);}).y(function(d){return height*(1 - d.close / max_y)});
			svgctrl.append("path").data([data]).attr("d", lines).attr("stroke", "red").attr("stroke-width", 3).attr("fill", "none");
		}
	);
	}