const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function determineHours(dateObj){
    
    if (dateObj.getHours() < 12){
        var x = dateObj.getHours() + 1; 
        if (dateObj.getMinutes() < 10) 
            return " " + x + ":" + "0"+ dateObj.getMinutes() + "AM";
        return " " + x + ":" + dateObj.getMinutes() + "AM";
    }
    else {
        var x = dateObj.getHours() % 13 + 1;
        if (dateObj.getMinutes() < 10) 
            return " " + x + ":" + "0"+ dateObj.getMinutes() + "AM";
        return " " + x + ":" + dateObj.getMinutes() + "PM"; 
    }
    

}

function getDate() {
    var x = new Date(document.lastModified);
    console.log(x);
    document.getElementById("demo").innerHTML = days[x.getDay()] + ", " + months[x.getMonth()] + " " + x.getDate() + ", " + x.getFullYear() + determineHours(x);
    
}
getDate();