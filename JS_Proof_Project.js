/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _developer, _year, _consistent) {
    const NFT_obj = {
        name : _name,
        developer : _developer,
        year : _year,
        consistent : _consistent
    };
    NFTs.push(NFT_obj);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NFTs.length; i++) {
        console.log(`Minted NFT ${i+1} named ${NFTs[i].name}:`);
        console.log("Name : " + NFTs[i].name);
        console.log("Developer : " + NFTs[i].developer);
        console.log("Year : " + NFTs[i].year);
        console.log("Consistent : " + NFTs[i].consistent);
        console.log('\n');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return NFTs.length;
}

// call your functions below this line
mintNFT("JAVA++", "Devkinandan Garg", 2023, true);  //Just for sample data :)
mintNFT("Python", "Guido Van Rossum", 1991, true);
listNFTs();
console.log("Total Supply(Total No. of NFT's minted) : " + getTotalSupply());
