

// In a method, this refers to the owner object.


const obj={
    name:"Rani Rathod",
    age:18,
    sum:function(){
        var add=2+2;
        console.log("sum of tow no "+add);
        // console.log(this.name);
        console.log(this)
    }
}
obj.sum();
