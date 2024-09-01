const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(arr1)

// map  =>   
    
              // The map method creates a new array by applying a function to each element of the original array.
              // It doesn’t change the original array
              // the map method works same as the for each loop but the difference between both of them is the
              // for each method make changes in the original array and the map method make a new array and changes 
              // in that.

arr1.map((element) => {
    console.log(element + " * " + element + " = " + element * element)
})


console.log(arr1) //   original array

// filter =>   

                //this method returns a new array filled with elements that satisfy the
                //  specified condition or pass a test provided by a function.




const evemNumbers = arr1.filter((even) => {
    return even %2==0
})
console.log(evemNumbers)



//  • reduce() =>

              // it reduces the array into a single value based on specific operation.
              // can be used for various purposes like calculating sum, product, finding
              // max or min values.


const num = [1, 2, 3, 4, 5]             
console.log(num)
const multiply = num.reduce((a,b) => {
    return a*b
})
console.log("muliply : " + multiply)


