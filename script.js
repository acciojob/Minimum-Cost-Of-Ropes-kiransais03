function calculateMinCost() {

  let val = document.getElementById("rope-lengths").value;
   let arr=val.split(",").map(Number);
   console.log(arr);
   console.log("HI");
	let sum=0;
	if(arr.length===0||arr.length===1)
	{
    document.getElementById('result').innerHTML=`${sum}`;
		return 0;
	}
 
	while(arr.length!==0)
		{
			arr.sort((a,b)=>a-b);
      console.log(arr);
			let a=arr.shift();
			if(arr.length!==0)
			{
			let b=arr.shift();
			sum=sum+a+b;
			let elem=a+b;
			arr.unshift(elem);
      console.log(a,b,elem,arr)
			}
			else {
				break;
			}
		}
    document.getElementById('result').innerHTML=`${sum}`;
  console.log(sum);
}  


let a1 = [12,7,9];

a1.sort();

console.log(a1);