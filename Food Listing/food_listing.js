let listingsNum = 1
function Add(){
    const foodAdder = document.getElementById("Food Adder")
    const listings = document.getElementById("Listing")
    listingsNum += 1

    //Add listing after the one before
    foodAdder.innerHTML += '<div id="Listing ' + listingsNum + '" class="Listings"> <h3>Food Item ' + listingsNum + '</h3> <input type="text" name="food item" placeholder="Enter food item (eg. Apples)" required> <input type="number" name="quantity" placeholder="Enter amount" required> <input type="number" name="price" placeholder="Price $$ for each" required> <button type="button" onclick="Delete(' + listingsNum + ')">Delete</button> <br> </div>'
}

function Delete(n){
    //Delete listing
    const listing = document.getElementById("Listing " + n)
    listing.remove()
    listingsNum -= 1

    const listings = document.getElementsByClassName("Listings")
    //rename all listings below deleted one
    for(let i = n - 1; i < listings.length; i++){
        console.log(i)
        listings[i].id = "Listing " + (i + 1)
        listings[i].getElementsByTagName("h3")[0].innerHTML = "Food Item " + (i + 1)
        console.log(listings[i].getElementsByTagName("Button")[0].setAttribute("onclick", "Delete(" + (i + 1) + ")"))
    }
}
