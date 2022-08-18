const fs = require("fs").promises
main()
async function main() {
    const dados = await fs.readFile("imput.txt", "utf-8")
    const max = Number (dados)
    for (let i = 1; i <= max; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(" FizzBuzz");
        
        } else if (i % 5 == 0) {
            console.log(" Buzz");
        
        } else if (i % 3 == 0) {
            console.log(" Fizz");
        
        } else {
            console.log(i)
        }
    
    }
}
