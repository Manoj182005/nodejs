// Import required module
const readline = require("readline");

const qinterface = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

// const Solution = () => {
//   // Write your code here
// };

// Solution();

qinterface.question("enter the first value",(num1)=>{
  qinterface.question("enter the second value",(num2)=>{
    if(Number(num1) > Number(num2)){
      console.log(`The maximum of two numbers is ${num1}`);
    }else{
      console.log(`The maximum of two numbers is ${num2}`);
    }
  
  })
})
// module.exports = Solution;
