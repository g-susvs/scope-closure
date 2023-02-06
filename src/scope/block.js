function fruits() {
    if (true) {
        if (true) {
            var fruit1 = 'apple'    // function scope
            let fruit2 = 'orange'   // block scope
            const fruit3 = 'banana' // block scope
        }

    }
    console.log(fruit1)
}
fruits()