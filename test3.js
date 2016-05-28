var input = process.argv.slice(2).join(" ");
input = input.replace(/%20/g, " ");

var months = {
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
}

if (input == undefined){
    console.log("enter an argument");
} else {
    console.log("you entered "+input);
    var a = Date.parse(input);
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
    console.log(Number(input));
}