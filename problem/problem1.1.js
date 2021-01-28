const test = () => {
    // let array = ['R', 'R', 'G']
    // let array = ['R', 'R', 'R', 'R', 'R']
    // let array = ['B', 'R', 'B', 'G', ]
    // let array = ['B', 'B', 'G', 'G', 'B', 'R', 'R', 'R', 'B']
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i - 1]) {
            result += 1
        }
    }
    console.log(result);
}
test()