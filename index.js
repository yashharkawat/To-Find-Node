document.getElementById("app").innerHTML = `
<h1>Hello Vanilla Parcel!</h1>
<h2>my nnanme is yash </h2>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const search=(text,pattern)=>{

//     let s=pattern.toLowerCase()+'#'+text.toLowerCase();
//     let i=0,j=-1;
//     let kmp=[];
//     kmp[0]=-1;
//     while(i<s.length)
//     {
//       while(j!==-1&&(s[i]!==s[j]))
//       {
//         j=kmp[j];
//       }
//       j+=1;
//       i+=1;
//       kmp[i]=j;
//     }
//     let index=[];
//     //kmp[k-1]
//     for(let k=0;k<kmp.length;k++)
//     {
//       //console.log(k,"--",s[k],"-",kmp[k]);
//       if(kmp[k+1]===pattern.length)
//       {
//         index.push(k-2*pattern.length);
//       }
//     }
//     return index;
// }
// let hasSubString = (str, sub) => {
//     //For case sensitive
//     //let re = new RegExp(sub,"g");
  
//     //for case insensitive
//     let re = new RegExp(sub,"gi");
  
//     return (str.match(re) || []).length !== 0;
//   }
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
  const arrayOfNodes=dfs(document,[]);
  arrayOfNodes.forEach((item)=>{
    if(item.nodeType===Node.TEXT_NODE)
    {
      const text=item.textContent;
      if(text.indexOf(pattern)!=-1)
      {
        array.push(item);
      }
    }
  })
  return array;
} 

//console.log(b);