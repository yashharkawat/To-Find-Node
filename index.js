const dfs = (node,arrayOfNodes) => {
  if(node===null) return;
  arrayOfNodes.push(node);
  node.childNodes.forEach((item) => {
      dfs(item,arrayOfNodes);
  });
  return arrayOfNodes;
};
const findNode=(pattern)=>{
  const array=[];
  const arrayOfNodes=dfs(document.body,[]);
  arrayOfNodes.forEach((item)=>{
    if(item.nodeType===Node.TEXT_NODE)
    {
      const text=item.textContent;
      if(text.indexOf(pattern)!=-1)
      {
        array.push(item);
        //console.log(item.innerHTML);
        let newElement=document.createElement("span");
        newElement.classList.add("highLight");
        newElement.innerHTML=item.textContent;
        const par=item.parentNode;
        par.replaceChild(newElement,item);
        
      }
    }
  })
  document.querySelectorAll(".highLight").forEach((item)=>{
    item.style.backgroundColor='Yellow';
  })
  return array;
} 

//console.log(b);
