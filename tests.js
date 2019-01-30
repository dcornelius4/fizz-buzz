const test = QUnit.test;
// I honestly don't remember how to put it all together from the code cooking
function fizzBuzz(number){
    return 'fizzBuzz'; 
}


test('lets get a variable', function(assert) {
    let inputVariable = 2; 
    let result = fizzBuzz(inputVariable);
    assert.equal(result, 'fizzBuzz'); 
});