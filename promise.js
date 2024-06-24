const data = [
     {
          name : "karan",
          profession : "software developer"
     } ,
     {
          name : "prathmesh gongare",
          profession: "chegg india"
     }
]
function getDatas(){
     let output = "";
     setTimeout(()=>{
        data.forEach((data,index)=>{
          output = output + `<li>${data.name}</li>`
        })
        document.body.innerHTML = output;
     },1000)
}
function  createDatas(params) {
     setTimeout(() => {
         data.push(params);
         // callback();
     },2000)
}
// createDatas({name:"arjun" , profession : "chegg india"});
// getDatas()
// this is a problem statement - javascript is asynchronous programming language
// due to this create datas object is not displaying .
// callback solution- when data will push then it call getDatas function
// createDatas({name:"arjun" , profession : "chegg india"},getDatas)
// promise solution 
function createDatasPromiseSolution(params){
     return new Promise((resolve,reject)=>{
          setTimeout(() => {
               let error = "";
               data.push(params);
               if (!error){
                    resolve();
               }
               else{
                    reject("kuch to sahi nahi hai");
               }
           },2000)
     })
}
// promise solution
//createDatasPromiseSolution({name:"arjun" , profession : "chegg india"}).then(getDatas).catch((err)=>{console.log("Something is happened") })

//async await solution
async function start (){
     await createDatasPromiseSolution({name:"arjun" , profession : "chegg india"});
   getDatas();
}
start();