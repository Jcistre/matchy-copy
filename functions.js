/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    // for loop to iterate over array
    for (var i = 0; i < animals.length - 1; i++) {
        // if array of objects name equals para name
        if (animals[i].name === name) {
            // return the object's name
            return animals[i];
        }   
    }
    return null;
 }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length - 1; i++) {
        if (animals[i].name === name) {
            animals[i] = replacement
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for (var i = 0; i < animals.length - 1; i++) {
        if (animals[i].name === name) {
            animals.splice(animals[i], 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, obj) {
    // nope array for reject
    var nope = [];
    // for loop to iterate over array
    for (var i = 0; i < array.length - 1; i++) {
        // if obj name matches 
        if (array[i].name === obj.name) {
            // push obj into array
            return nope.push(obj);
            console.log(nope);
        } else if (obj.name.length > 0 && obj.species.length > 0) {
            return array.push(obj);
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}