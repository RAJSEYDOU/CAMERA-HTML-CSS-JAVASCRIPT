
// GET VIDEO ELEMENT
const videoCanvas=document.querySelector('#videoCanvas')
// GET SNPA BOUTTON
const snap=document.querySelector('#snap')
// GET CANVAS 
const canvas=document.querySelector('#canvas')
// SET  CANVAS.CONTEXT()
const ctx=canvas.getContext('2d')
// console.log(navigator.mediaDevices.getUserMedia)


init()
snpaShoot()

// FUNCTION INITIALISATION 
function init(){
	// NAVIGATOR.MEDIADEVICES.GETYSERMEDIA{video:true}
	navigator.mediaDevices.getUserMedia({video:{
	width:400,
	height:400
	}})
// PROMISE CHAINING
.then(stream =>{

// STREAM CONTAINS VIDEO ID AND METHODS
// ALL COMBINED GIVE BACK A URL ASSIGNED TO VIDEO.SRCOBJET
videoCanvas.srcObject=stream;
})
}



// SNAPSHOOT FUNCTION
function snpaShoot(){


	snap.addEventListener('click',function(){
		// DRAW VIDEO IMAGE ON CLICK MOMENT 
		ctx.drawImage(videoCanvas,0,0,400,400)
	})
	
}
