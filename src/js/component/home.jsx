import React from "react";


//create your first component
var number=0;

const Home = () => {
	number++;
	let tempNum=number;
	let numbers=[];
	for(let i=0;i<6;i++){
		numbers.unshift(tempNum%10);
		tempNum=Math.floor(tempNum/10);
	}
	return (
		<div className="container-fluid bg-black px-5 mx-auto">
			<div className="d-flex mx-5">
				<div className="col d-flex justify-content-center px-4 py-4 my-4 bg-dark rounded-5" style={{fontSize:"9vw"}}>
					<i class="far fa-clock m-0 text-white"></i>
				</div>
				<SecondsCounter seconds={numbers}/>
			</div>
		</div>
	);
};

const SecondsCounter=(props)=>{
	return(
		props.seconds.map((elm,index)=>{
			return(
				<div key={index} className="col d-flex justify-content-center text-white ms-5 px-2 pb-2 my-4 bg-dark rounded-5" style={{fontSize:"10vw"}}>
					{elm}
				</div>
			);
		})
	);
} 

const secondsCell=(props)=>{
	return(
		<div>
			{props.number}
		</div>
	);
};
export default Home;
