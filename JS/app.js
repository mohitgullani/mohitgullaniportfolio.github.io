window.addEventListener('load',()=>{
	let progressBars=document.querySelectorAll('.progress-bar');
	let values=[
		'70%',
		'70%',
		'70%',
		'70%',
		'60%',
		'50%',
		'40%'
	];
	progressBars.forEach((progress,index)=>{
		progress.style.width = values[index];
	});
});