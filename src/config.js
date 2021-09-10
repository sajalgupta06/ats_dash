let ENV = "development";

let URL;

if(ENV==="development"){
URL="http://localhost:8000"
}
else if(ENV==='production'){
URL = "https://job-market-node.codedeployment.tk"

}
const firebaseConfig = {
   apiKey: "AIzaSyB54qsvfuSvrSo8ze7Dy0rm8wMrjKnc_ac",
   authDomain: "jts-ats.firebaseapp.com",
   databaseURL: "https://jts-ats-default-rtdb.firebaseio.com",
   projectId: "jts-ats",
   storageBucket: "jts-ats.appspot.com",
   messagingSenderId: "815540742580",
   appId: "1:815540742580:web:aa90789dfe819f13f82ae1",
   measurementId: "G-CG9DBJX7FN"
 };

module.exports={
   URL,
   ENV,
   firebaseConfig
}