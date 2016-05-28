/*var months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}*/

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//console.log(process.argv.length)

if (process.argv.length < 3){
    console.log("enter an argument");
} else {
    var input = process.argv.slice(2).join(" ");
    console.log("you entered "+input);
    input = input.replace(/%20/g, " ");
    
    var nd;
    if (isNaN(Number(input))){
        console.log("input is not a number");
        nd = new Date(input);
    } else {
        console.log(input);
        nd = new Date(Number(input)*1000);
    }
    
    console.log(nd);
    console.log(typeof nd);
    
    console.log(Date.parse(nd));
    var ut = Date.parse(nd)/1000;
    console.log(ut);
    console.log(typeof ut);
    var datestr;
    
    if (isNaN(ut)){
        datestr = null;
    } else {
        var datestr = months[nd.getMonth()] + " " + nd.getDate() +", " + nd.getFullYear();
        console.log(datestr);
    }
    
    var dateobj = {
        unix: ut,
        natural: datestr
    }
    console.log(dateobj);
    console.log(JSON.stringify(dateobj));
    /*var a = Date.parse(input);
    var b = new Date(Number(input)*1000);
    var c = new Date(input);
    var d = Date.UTC(c);
    console.log(a);
    console.log(b);
    console.log(c);
    //console.log(a.toDateString());
    console.log(JSON.stringify(c));
    var date = c.getDate();
    var month = c.getMonth();
    var year = c.getFullYear();
    console.log(date);
    console.log(month);
    console.log(year);
    console.log(months[month]);
    console.log(Number(input));*/
}