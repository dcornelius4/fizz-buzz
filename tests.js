const test = QUnit.test;

function fizzBuzz(inputVariable){
    if(inputInteger % 15 === 0) {
        return 'fizzbuzz'; 
    }  else(inputInteger % 5 === 0)
        return 'buzz';} else if(inputInteger % 3 === 0)
        return 'fizz';}; 
};

//first test to see if it fails
test('lets get a variable', function(assert) {
    let inputVariable = 2; 
    let result = fizzBuzz(inputVariable);
    assert.equal(result, 'fizzBuzz'); 
});

//tests for numbers divisble by both 5 and 3
test('numbers divisible by 5 and 3', function(assert) {
    let inputVariable = 15;
    let result = fizzBuzz(inputVariable);
    assert.equal(result, 'fizzbuzz');
});

//tests for numbers divisible by 5
test('numbers divisible by 5', function(assert) {
    let inputVariable = 5;
    let result = buzz(inputVariable);
    assert.equal(result, 'buzz'); 
});

//tests for numbers divisble by 3
test('numbers divisble by 3', function(assert) {
    let inputVariable = 3;
    let result = fizz(inputVariable);
    assert.equal(result, 'fizz');
});


