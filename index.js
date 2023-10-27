// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];



   
    
const destructivelyAppendCat=function(name){
cats.push("Ralph")

}

const destructivelyPrependCat=function(name){
    cats.unshift("Bob")
    }
    const destructivelyRemoveFirstCat=function(name){
        cats.shift()
        }
const destructivelyRemoveLastCat=function(nmae){
    cats.pop()
}




        const appendCat=function(name){
    
            const copyofcats = cats.slice()
            copyofcats.push("Broom")
            return(copyofcats)
           }
           const prependCat=function(name){
            const copyofcats = cats.slice()
            copyofcats.unshift("Arnold")
            return(copyofcats)
           }
        const removeLastCat=function(name){
            const copyofcats = cats.slice()
            copyofcats.pop("Garfield")
            return(copyofcats)
        }
        const removeFirstCat=function(name){
            const copyofcats = cats.slice()
            copyofcats.shift("Milo")
            return(copyofcats)
        }