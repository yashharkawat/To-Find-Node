const dict=new Map(); 

//helper function to loop through all nodes.
const dfs = (node,arrayOfNodes) => {
  if(node===null) return;
  if(node.nodeName==='STYLE') return;

  arrayOfNodes.push(node);
  node.childNodes.forEach((item) => {
      dfs(item,arrayOfNodes);
  });
  return arrayOfNodes;
};
/*
this function sets the value to every text element 
to the corresponding node where that text appears
and it fills in the dict map.
key-->text 
value--> array of nodes containing that text
*/
const getDictionary=()=>{
  const arrayOfNodes=dfs(document.body,[]);
  arrayOfNodes.forEach((item)=>{
    if(item.nodeType===Node.TEXT_NODE)
    {
      const text=item.textContent;
      if(dict.has(text))
      {
        const arr=dict.get(text);
        const brr=[...arr,item];
        dict.set(text,brr);
      }
      else
      {
        dict.set(text,[item]);
      }
    }
  })
} 

//search and highlight the text we wanna find

const search=(text)=>{
  if(!dict.has(text)) return;
  const array= dict.get(text);
  array.forEach((item)=>{
    const newElement=document.createElement("mark");
    newElement.classList.add("highLight");
    newElement.innerHTML=item.textContent;
    const parent=item.parentNode;
    parent.replaceChild(newElement,item);
  })
  const arr=document.querySelectorAll(".highLight");
  arr.forEach((item)=>{
    item.style.backgroundColor='Yellow';
  })
}

window.onload=getDictionary();