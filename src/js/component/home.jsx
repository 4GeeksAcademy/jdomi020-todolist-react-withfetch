import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
 



// Create a library of functions for requests and Promises

// function status(response) {
// 	if (response.status >= 200 && response.status < 300) {
// 		return Promise.resolve(response)
// 	} else {
// 		return Promise.reject(new Error(response.statusText))
// 	}
// }

// Create a GET Request for your username



// Create a POST Request for your username

// fetch("https://playground.4geeks.com/apis/fake/todos/user/jdomi020", {
// 	method: "POST",
// 	headers: {
// 		"Content-type": "application/json; charset=UTF-8"
// 	},
// 	body: JSON.stringify({key: "value"})
// })
// .then(response => {
// 	if (!response.ok) {
// 		throw new Error('Network response was not ok.');
// 	}
// 	return response.json(); // Process the response if needed
// })
// .then(data => {
// 	console.log("Request succeeded with JSON response", data);
// })
// .catch(error => {
// 	console.error("Request failed", error);
// });

// Create a PUT Request
// Create a DELETE Request
	//Add into array -> concat
	//Delete from array -> filter
	//Update -> map

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input 
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if(e.key === "Enter") {
						 		setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="What do you need to do?"></input><i className="fa-solid fa-trash-can"></i>
				</li>

				{todos.map((item, index) => (
					<li>
						{item}{""} 
						<i 
							className="fa-solid fa-trash-can"
							onClick ={() =>
								setTodos(
									todos.filter(
										(t, currentIndex) =>
											 index != currentIndex
									)
								)
							}></i>
					</li>
				))}
				
				
			</ul>
			<div className="tasks">{todos.length} Tasks</div>
		</div>
	);
};

export default Home;
