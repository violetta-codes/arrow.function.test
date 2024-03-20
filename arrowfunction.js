const object = {
    value: 40,
    methodFunction: function() {
        console.log(this);

        function test() {
            console.log(this, 'this inside');
        }
        test();
    },
    methodArrowFunction: () => {
        console.log(this);
    }
}
object.methodFunction();
object.methodArrowFunction();