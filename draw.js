var objArr = [];

var svgContainer;

window.onload = function(){
    
    //make an SVG container
    svgContainer = d3.select("#canvas").append("svg")
                        .attr("width", 600)
                        .attr("height", 600);
    
    //mouse click listener
    svgContainer.on("click", function(){
        var mouse = d3.mouse(this);
        var o = {
            ID: objArr.length,
            X: mouse[0],
            Y: mouse[1]
        };
        log(o);
        objArr.push(o);
        draw(objArr);
    });
}

var draw = function(data){
    svgContainer.selectAll("rect")
                .data(data)
                .enter()
                .append("svg:rect")
                .attr("x", function(d){ return d.X;})
                .attr("y", function(d){ return d.Y;})
                .attr("width", 20)
                .attr("height", 20)
                .style("stroke", "black");
}

//log function
var log = function(str){ console.log(str); }