function calculateMinCost() {
  let val = document.getElementById("rope-lengths").value;
   let arr=[val];
	let sum=0;
	if(arr.length===0||srr.length===1)
	{
		return 0;
	}
	while(arr.length!==0)
		{
			arr.sort();
			let a=arr.shift();
			if(arr.length!==0)
			{
			let b=arr.shift();
			sum=sum+a+b;
			let elem=a+b;
			arr.unshift(elem);
			}
			else {
				return sum;
			}
		}
	document.getElelmentById('result').innerText='${sum}'
}  
