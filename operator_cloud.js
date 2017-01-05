	function draw_operator_cloud()
	{
			d3.csv("https://george0828zhang.github.io/D3/operator_cloud.csv", function(data){
		console.log(data);
		d3.wordcloud()
        .size([800, 400])
        .selector('#wordcloud')
        .words(data)
        .start();
	});
	}