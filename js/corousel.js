var x = 0; 
var on = 0;
var startX = 0;
var move = 0;
var oCorousel = document.getElementById('corousel');
var opoint = document.getElementById('point');
var ospan = opoint.getElementsByTagName('span');
oCorousel.addEventListener('touchstart',function(ev){
	x = ev.changedTouches[0].pageX;
	startX = move;
	// oCorousel.style.transtion = '';
})
oCorousel.addEventListener('touchmove',function(ev){
	var xL = ev.changedTouches[0].pageX-x;
	move = startX + xL;
	this.style.left = move + 'px';
	// this.style.transtion = '';
})
oCorousel.addEventListener('touchend',function(ev){
	var xL = ev.changedTouches[0].pageX-x;
	move = startX + xL;
	var n = -move/640;
	if(n>on){
		n = n%1<0.3 ? Math.floor(n):Math.ceil(n);
	}else{
		n = n%1<0.7 ? Math.floor(n):Math.ceil(n);
	}
	on = n;
	if(n<0){
		n = 0;
	}else if(n>3){
		n = 3;
	}
	for(var i=0;i<ospan.length;i++){
		if(n != i){
			ospan[i].className = '';
		}else{
			ospan[i].className = 'sp1';
		}
	}
	move = -n*640;
	this.style.left = move + 'px';
	this.style.transtion = '0.3s linear';
})