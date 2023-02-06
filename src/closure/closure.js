function greeting() {
    let username = 'Luis'

    function displayUserName() {
        return `Hi ${username} !`
    }
    return displayUserName
}

const g = greeting()
console.log(g)
console.log(g())