function repeating_string(string, repeat) { 
    concatenated_string = string
    for (i = 0; i < repeat; i++){
        concatenated_string += string 
    }

    return concatenated_string 
}

console.log(repeating_string("wgoops", 1000))