let btn=document.querySelector(".btn")

btn.addEventListener("click",()=>{
  console.log("event is triggered") ;
  let text=document.getElementById("textarea").value;
     let forshow=document.getElementById("output")

  forshow.innerHTML = "";
  let lines=text.split(/[.\n]+/) ;

 lines.forEach((newline,index)=>{
   
let li = document.createElement("li");   
if (newline.trim() !== "") {
      li.innerText = newline.trim();}
  forshow.appendChild(li);
 })
}
)
