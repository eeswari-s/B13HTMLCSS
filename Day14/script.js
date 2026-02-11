function rundemo()
{
    console.clear();
    console.log("demo dom manipulation");


    //createElement
    let newPara = document.createElement("p");//<p></p>
    newPara.innerText="im a new paragraph";//<p>im a new paragraph</p>
    console.log("im a new paragraph",newPara);


    //append
    let container = document.getElementById("container");
    container.append(newPara);
    console.log("container",container);


    //appendchild
    let span=document.createElement("span");//<span></span>
    span.innerText="im a span";   //<span>im a span</span>
    container.appendChild(span);
    console.log("container",container);

 //task: before(),after(),remove(),replacechild()
}

