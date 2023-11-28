//demo

for ( var year = 2023; year < 2025; year ++) {
    console.log(year);
    for (var month = 6; month <9; month ++) {
        console.log("......", month)

    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

for(var i=1; i<=2; i++) {
    for ( var j = 1; j<=5; j++) { 
        console.log("Week " + i + " Day " + j)
}
}

var cubes = 'ABCDEFG';
for (var i = 0; i< 7; i++){
    var style = "font-size: 40px; border-radius: 10px; background: black"
    console.log("%C" + cubes [i], styles)
}



var i = 3;
var j = 5;

if(i == 3 && j < 5) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}