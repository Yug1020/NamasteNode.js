console.log("we are in sum.js")
z = "Hello world" //Commonjs module is non-strict. we can assign var without any type(var, let, const) but not in case of mjs, check multiple.js module.
function calculateSum(a, b){
    console.log(a + b)
}

module.exports = {calculateSum};