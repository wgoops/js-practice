function add_numbers_up_to(number) { 
    var new_number = 0;
    for (i = 1; i<=number; i++ ) {
        new_number += i
    }
    return new_number
}

console.log(add_numbers_up_to(4))