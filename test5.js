var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
}