const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(){
    return destructivelyAppendCat = cats.push('Ralph')
}

function destructivelyPrependCat(){
    return destructivelyPrependCat = cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    return destructivelyRemoveLastCat = cats.pop()
}

function destructivelyRemoveFirstCat(){
    return destructivelyRemoveFirstCat = cats.shift()
}

function appendCat(){
    return appendCat = cats.concat('Broom')
}

function prependCat(){
    return prependCat = ['Arnold',...cats]
}

function removeLastCat(){
    return removeLastCat = cats.slice(0, 2)
}

function removeFirstCat(){
    return removeFirstCat = cats.slice(1)
}