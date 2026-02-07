   //creating objects
   const student = {
    fullname:"sweety kumari",
    age:20,
    course:"computer science",
    marks:94.4,
    printmarks:function(){
        console.log("marks=",this.marks);
    },
};


const employee = {
    calTax(){
        console.log("tax rate is 10%");
    },
};


const karanArjun = {
    salary:500000,
    calT(){
        console.log("tax rate is 20%");
    },

};

karanArjun.__proto__ = employee;//using prototype to access the method of employee in karanArjun object