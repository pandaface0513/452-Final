var objArr = [];

// dimensions of the node elements
var WIDTH = 20;
var HEIGHT = 20;

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
        // log(o);
        var len = objArr.length;
        for(var i = 0; i < len; i++){
            if((mouse[0] > objArr[i].X - WIDTH) && (mouse[0] < (objArr[i].X + WIDTH)) &&
                (mouse[1] > objArr[i].Y - HEIGHT) && (mouse[1] < (objArr[i].Y + HEIGHT))){
                

            }
        }
        var breakLoop = false;
        var i = 0;
        
        console.log("outer i = " + i + ", len = " + len);
        while (!breakLoop && i < len - 1) {
            console.log("inner i = " + i + ", len = " + len);

            /*
             *  
             *  Determine if mouse click coordinates fall within the bounds of an existing node.
             *  If it does, deal with the node with the corresponding ID.
             *  We also do an additional check to ensure that that it doesn't overlap to the node's left
             *  left or top edge, which we didn't check for earlier.
             *
             */
            if ((mouse[0] > objArr[i].X - WIDTH) && (mouse[0] < (objArr[i].X + WIDTH)) &&
                (mouse[1] > objArr[i].Y - HEIGHT) && (mouse[1] < (objArr[i].Y + HEIGHT))) {
                if (mouse[0] > objArr[i].X && mouse[1] > objArr[i].Y) {




                    console.log("clicked inside " + objArr[i].X);
                    breakLoop = true;
                    console.log("entering loop");
                }

            }
            // for (var i = 0, len = objArray.length; i < len; i++) {
            //     if (mouse[0] == i[0].X)
            // }
            i++;
        }

        /*
         *  Only add a new node if it doesn't overlap with another node. If breakLoop is true,
         *  we already know not to draw the node. 
         */
        if (breakLoop == false) {
            objArr.push(o);
        }

        draw(objArr);

        // var squares = svgContainer.selectAll("rect");
        // console.log(objArr);
        
    });
}

var draw = function(data){
    svgContainer.selectAll("rect")
                .data(data)
                .enter()
                .append("svg:rect")
                .attr("id", function(d){ return "note-id-" + d.ID;})
                .attr("x", function(d){ return d.X;})
                .attr("y", function(d){ return d.Y;})
                .attr("width", WIDTH)
                .attr("height", HEIGHT)
                .attr("onclick", function(d) {
                    console.log("onclick:");
                    console.log(d);
                    var idString = "node-id-" + d.ID;
                })
                .style("stroke", "black");
}

//log function
var log = function(str){ console.log(str); }