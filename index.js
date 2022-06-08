const mp=new Map();
const dfs = (node,arrayOfNodes) => {
  if(node===null) return;
  arrayOfNodes.push(node);
  node.childNodes.forEach((item) => {
      dfs(item,arrayOfNodes);
  });
  return arrayOfNodes;
};
const findNode=()=>{
  const arrayOfNodes=dfs(document.body,[]);
  arrayOfNodes.forEach((item)=>{
    if(item.nodeType===Node.TEXT_NODE)
    {
      const text=item.textContent;
      if(mp.has(text))
      {
        const arr=mp.get(text);
        const brr=[...arr,item];
        mp.set(text,brr);
      }
      else
      {
        mp.set(text,[item]);
      }
    }
  })
} 
const search=(pattern)=>{
  if(mp.size===0) findNode();
  if(!mp.has(pattern)) return;
  const array= mp.get(pattern);
  array.forEach((item)=>{
    let newElement=document.createElement("mark");
    newElement.classList.add("highLight");
    newElement.innerHTML=item.textContent;
    const par=item.parentNode;
    par.replaceChild(newElement,item);
  })
  const arr=document.querySelectorAll(".highLight");
  arr.forEach((item)=>{
    item.style.backgroundColor='Yellow';
  })
  //console.log(array);
}