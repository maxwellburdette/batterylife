import React, { useEffect } from "react";

function App() {
	useEffect(() => {
		let percentage = document.querySelector(".percentage");
		let percent = document.querySelector(".percent");
		navigator.getBattery().then((battery) => {
			percentage.style.width = battery.level * 100 + "%";
			percent.innerHTML = battery.level * 100 + "%";
		});
	}, []);

	function handleClick() {
		// let sec = document.querySelector(".sec");
		// let toggle = document.querySelector(".toggle");
		let sec = document.querySelector(".sec");
		sec.classList.toggle("dark");
	}
	return (
		<section className="sec">
			<div className="toggle" onClick={handleClick}></div>
			<div className="box">
				<div className="content">
					<h3>Battery</h3>
					<div className="batteryShape">
						<div className="level">
							<div className="percentage"></div>
						</div>
					</div>

					<div className="percent">50%</div>
				</div>
			</div>
		</section>
	);
}

export default App;
