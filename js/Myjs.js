let imgarr=document.querySelectorAll('#imgsection>div>img');
let img=document.querySelector('#imgsection>img');
for(let i=0;i<imgarr.length;i++){
	imgarr[i].addEventListener("mouseover", function() {
		img.src=imgarr[i].src;
		for(let j=0;j<imgarr.length;j++){
			imgarr[j].style.borderColor="white";
		}
		imgarr[i].style.borderColor="#ff9800";

})
}
