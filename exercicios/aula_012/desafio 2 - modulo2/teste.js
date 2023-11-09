// let pfOrdenado = pf.sort(function(a, b) {
//     return a.nome > b.nome ? 1 : -1;
//   });

//   console.log(pfOrdenado);

// let pfOrdenado = pf.parceirosId.sort();
// console.log(pfOrdenado)

const albuns = [
    {name: 'A', ano: 30},
    {name:'Z', ano: 12},
    {name:'C', ano: 9},
];

const sorted = albuns.sort((a,b)=>{
    return a.name.localeCompare(b.name);
})

console.log(sorted)

