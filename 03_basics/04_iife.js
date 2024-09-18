// Immediately Invoked Function Expresions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();                    // note: use semicolon for ending the scope context it is very important... if you dont use ;  
                            // then it will throw error

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`farhan`)

console.log(this);
