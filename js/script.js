

const filterContainer=document.querySelector(".interest-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length;
      interestItems=document.querySelectorAll(".interest-item")
      totalInterestItem=interestItems.length;
      



      for(let i=0; i<totalFilterBtn; i++)
      {
        filterBtns[i].addEventListener("click", function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");
            
            const filterValue=this.getAttribute("data-filter");
            for(let k=0; k<=totalFilterBtn+40; k++)
            {
              if(filterValue === interestItems[k].getAttribute("data-category")){
                interestItems[k].classList.remove("hide");
                interestItems[k].classList.add("show");
              }
              else
              {
                interestItems[k].classList.remove("show");
                interestItems[k].classList.add("hide");
              }
              if(filterValue === "all")
              {
                interestItems[k].classList.remove("hide");
                interestItems[k].classList.add("show");
              }
            }
        })
      }




//lightbox
const lightbox=document.querySelector(".lightbox"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxText=lightbox.querySelector(".caption-text"),
      lightboxCounter=lightbox.querySelector(".caption-counter");
let   itemIndex=0;

for(let i=0; i<totalInterestItem; i++)
{
  interestItems[i].addEventListener("click",function(){
    itemIndex=i;
    changeItem();
    toggleLightbox();
  })
}

function nextItem()
{
  if(itemIndex === totalInterestItem-1){
    itemIndex= 0;
  }
  else
  {
    itemIndex++;
  }
  changeItem();
}

function prevItem()
{
  if(itemIndex === 0){
    itemIndex= totalInterestItem-1;
  }
  else
  {
    itemIndex--;
  }
  changeItem();
}

function toggleLightbox(){
  lightbox.classList.toggle("open");
}

function changeItem(){
  imgSrc=interestItems[itemIndex].querySelector(".interest-img img").getAttribute("src");
  lightboxImg.src=imgSrc;
  lightboxText.innerHTML = interestItems[itemIndex].querySelector("h4").innerHTML;
  lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalInterestItem;
}



//close

lightbox.addEventListener("click",function(event){
  if(event.target === lightboxClose || event.target === lightbox){
    toggleLightbox();
  }
})