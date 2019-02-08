const test = QUnit.test;

function fizzBuzz(variable) {
    if(variable % 15 === 0) {
        return 'fizzbuzz';
    } else if(variable % 3 === 0) {
        return 'fizz'; 
    } 
    else if(variable % 5 === 0) {
        return 'buzz'; 
    } else {
        return variable; 
    }  
}


test('return a number divisble by 3', function(assert) {
    let result = fizzBuzz(6);
    assert.equal(result, 'fizz');
});

test('return a number divisble by 5', function(assert) {
    let result = fizzBuzz(10);
    assert.equal(result, 'buzz');
});

test('numbers divisible by both 3 and 5', function(assert) {
    let result = fizzBuzz(15);
    assert.equal(result, 'fizzbuzz');
});

test('all other numbers', function(assert){
    let result = fizzBuzz(8);
    assert.equal(result, 8);
}); 



