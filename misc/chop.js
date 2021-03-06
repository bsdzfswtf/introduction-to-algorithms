function chop(target, list) {
    var start = 0;
    var end = list.length - 1;

    for (;;) {
        // Base
        if (start > end) {
            return -1;
        }

        // Middle
        var middle = Math.floor((start + end) / 2);
        var value = list[middle];
        
        // Match
        if (target === value) {
            return middle;
        }

        // Narrow
        if (target < value) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
}

function assert(a, b) {
    if (a !== b) {
        console.log('Mismatch...');
        console.log('a:', a);
        console.log('b:', b);
        throw 'Mismatch detected';
    }
}

function test() {
    assert(-1, chop(3, []))
    assert(-1, chop(3, [1]))
    assert(0,  chop(1, [1]))

    assert(0,  chop(1, [1, 3, 5]))
    assert(1,  chop(3, [1, 3, 5]))
    assert(2,  chop(5, [1, 3, 5]))
    assert(-1, chop(0, [1, 3, 5]))
    assert(-1, chop(2, [1, 3, 5]))
    assert(-1, chop(4, [1, 3, 5]))
    assert(-1, chop(6, [1, 3, 5]))

    assert(0,  chop(1, [1, 3, 5, 7]))
    assert(1,  chop(3, [1, 3, 5, 7]))
    assert(2,  chop(5, [1, 3, 5, 7]))
    assert(3,  chop(7, [1, 3, 5, 7]))
    assert(-1, chop(0, [1, 3, 5, 7]))
    assert(-1, chop(2, [1, 3, 5, 7]))
    assert(-1, chop(4, [1, 3, 5, 7]))
    assert(-1, chop(6, [1, 3, 5, 7]))
    assert(-1, chop(8, [1, 3, 5, 7]))

    assert(-1, chop(8, [1, 3, 5, 7, 9]))
    assert(-1, chop(8, [1, 3, 5, 7, 9, 12]))
    assert(-1, chop(8, [1, 3, 5, 7, 9, 12, 15]))

    assert(2, chop(5, [1, 3, 5, 7, 9]))
    assert(2, chop(5, [1, 3, 5, 7, 9, 12]))
    assert(2, chop(5, [1, 3, 5, 7, 9, 12, 15]))
}

test();
