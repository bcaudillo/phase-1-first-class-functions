function receivesAFunction(callback){
    return callback()
}



function returnsAnAnonymousFunction(){
    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
      };
}

function returnsANamedFunction() {
    return returnsAnAnonymousFunction
  }
  