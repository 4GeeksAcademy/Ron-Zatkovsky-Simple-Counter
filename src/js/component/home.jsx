import React from "react";


//create your first component
var number=0;
var stop=false;
var stopLabel="Stop";
var reset=false;
var targetValue;

const Home = () => {
	counterAlert();
	if(!stop){
		number++;
		stopLabel="Stop"
	}
	if(reset){
		number=0;
		reset=false;
	}
	let tempNum="000000"+number;
	let numbers=tempNum.slice(tempNum.length-6,tempNum.length).split("");
	return (
		<div className="container-fluid bg-black px-5 mx-auto">
			<div className="d-flex mx-5">
				<div className="col d-flex justify-content-center px-4 py-4 my-4 bg-dark rounded-5" style={{fontSize:"9vw"}}>
					<i className="far fa-clock m-0 text-white"></i>
				</div>
				<SecondsCounter seconds={numbers}/>
			</div>
			<div>
				<button onClick={setStop}>{stopLabel}</button>
				<button onClick={setReset}>Reset</button>
				<input id="timerTarget" type="string" placeholder="timer target" onChange={setTarget}></input>
			</div>
		</div>
	);
};

const setTarget=()=>{
	targetValue=parseInt(document.querySelector("#timerTarget").value);
	console.log(document.querySelector("#timerTarget").value);
}

const counterAlert=()=>{
	if(number===targetValue){
		alert("Timer is up!")
	}
}
const setStop=()=>{
	stop=!stop;
	if(stopLabel="Stop"){
		stopLabel="Resume";
	}
}
const setReset=()=>{
	reset=true;
}
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
export default Home;
