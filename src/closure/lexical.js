function contador(i){
    let saveCount = i

    function count(){
        console.log(saveCount)
        saveCount += 1
    }
    return count
}

const closure1 = contador(2)
closure1()

    const myGlobal = 0

    function myFunction(){
        const myNumber = 1
        console.log(myGlobal)

        function parent(){
            const inner = 2
            console.log(myNumber, myGlobal)

            function child(){
                console.log(inner, myNumber, myGlobal)
                
            }

            return child()
        }

        return parent()
    }

    myFunction()