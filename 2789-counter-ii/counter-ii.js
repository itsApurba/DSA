/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let store = init
    return {
        increment: function(){
            store++
            return store
        },
        decrement: function(){
            store--
            return store
        },
        reset: function(){
            store = init
            return store
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */