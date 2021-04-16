const sortBtn = document.querySelector('.filter-menu').children;
const sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', (e)=>{
        e.preventDefault();
        
        const filter = e.target.dataset.target;
        console.log(filter)
       
        
        for(let k = 0; k < sortBtn.length; k++){
            if (filter == "all"){
                sortItem[k].style.display = "block";
        
            } else{
                if(sortItem[k].dataset.item == filter){
                    console.log("!!!!")
                }
                // if(sortItem[k].classList.contains(filter)){
                //     sortItem[k].style.display = "block";
                    
                // }else{
                //     sortItem[k].style.display = "none";
                    
                // }
            }
        }
    });
}    
