
//to create random numbers
let ran1 = Math.floor(Math.random() * 7);
let ran2 = Math.floor(Math.random() * 7);
//to trigger prompt and to split its values
let data=prompt("Enter the guess for dice").split(",")
//array to store splitted values of prompt
let array= [ ]
//to push prompt entries into array
array.push(data.entries)
//to compare prompt array with random numbers
      let a=array[0]
      let b=array[1]
 //if then else to compare     
    if (a==ran1,b==ran2) {alert("winner")
        
    } else {alert("try again")

}
