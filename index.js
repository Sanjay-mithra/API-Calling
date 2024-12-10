fetch("https://jsonplaceholder.typicode.com/")
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
    
})


const myPromise=new Promise((resolve,reject)=>{
    const number=Math.floor(Math.random()*10)
    console.log(number);
    if(number<2){
         resolve("Operation Success")
    }
    else{
        reject("Operation Failed")
    }
})


const button=document.getElementById("btn")
button.addEventListener("click",()=>{
    myPromise
    .then((response)=>{
        console.log(response);
        
    })
    .catch((error)=>{
        console.log(error);
    })
    async function main(){
        try{
            const result=await myPromise
            console.log(result);
        }
        catch(error){
            console.log(error);
            
        }
    }
    main()
})