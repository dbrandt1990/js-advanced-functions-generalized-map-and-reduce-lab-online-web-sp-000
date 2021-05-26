// Add your functions here
const map = (arr, fn) => {
    const newArr = []
    arr.forEach(item => {
        newArr.push(fn(item))
    })
    return newArr
}

const reduce = (arr, fn, startVal) => {
    let acc = (!!startVal) ? startVal : arr[0]
    // let i = (!!startVal) ? 0 : 1

    for (let i = 0; i < arr.length; i++) {

        acc = fn(arr[i], acc)

    }
    return acc
}