var createCounter = function(init) {
    const initCopy = init;
    return {increment:()=>++init, decrement:()=>--init, reset:()=>{init = initCopy; return init;}}
    
};
