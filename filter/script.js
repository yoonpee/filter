let sortBtn = document.querySelectorAll('.btn');
let sortItem = document.querySelectorAll('.item');


sortBtn.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        
        const filter = e.target.dataset.target;
        
        sortItem.forEach((item)=>{
            if(filter === "all"){
                item.style.display = "block";
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = "block";
                }
                else{
                    item.style.display = "none";
                }
            }
        })
        // const filter = e.target.dataset.target;
        
        
        // for(let i = 0; i < sortItem.length; i++){
        //     if(filter === "all"){
        //         sortItem[i].style.display = "block";
                
                
        //     }else{
        //         if(sortItem[i].classList.contains(filter)){
        //             sortItem[i].style.display = "block";
        //         }else{
        //             sortItem[i].style.display = "none";
        //         }
        //     }
        // }
    })
    
    
})






// for(let i = 0; i < sortBtn.length; i++){
//     sortBtn[i].addEventListener('click', (e)=>{
//         e.preventDefault();
        
//         const filter = e.target.dataset.target;
//         console.log(filter)
       
        
//         for(let k = 0; k < sortBtn.length; k++){
//             if (filter == "all"){
//                 sortItem[k].style.display = "block";
        
//             } else{
//                 if(sortItem[k].dataset.item == "cake"){
                    
//                 }
//                 // if(sortItem[k].classList.contains(filter)){
//                 //     sortItem[k].style.display = "block";
                    
//                 // }else{
//                 //     sortItem[k].style.display = "none";
                    
//                 // }
//             }
//         }
//     });
// }    
