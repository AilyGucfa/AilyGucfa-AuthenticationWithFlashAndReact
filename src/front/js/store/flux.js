const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("Application just loaded, syncing the session storage token");
				if (token && token != "" && token != undefined) setStore({ token: token });

			},
			logout: () => {
				sessionStorage.removeItem("token");
				console.log("login out");
				setStore({ token: null });
			},
			login: async (email, password) => {
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							"email": email,
							"password": password
						}
					)
				};
				try {
					const response = await fetch("https://obscure-yodel-j669v9gjv46hp57x-3001.app.github.dev/api/token", options)
					if (response.status !== 200) {
						alert("there has been an error")
						return false
					}
					const data = await response.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token })
					return true;
				}
				catch (error) {
					console.log("There was an error")
				}

			},
			signup: async (email, password) => {
				const options = {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(
					{
						"email": email,
						"password": password
				  }),
				};
			  
				try {
				  const response = await fetch("https://obscure-yodel-j669v9gjv46hp57x-3001.app.github.dev/api/signup", options);
				  
				  if (response.ok) {
					alert("Signup successful");
					return true;
				  } else if (response.status === 400) {
					alert("Email already in use. Please choose another email.");
				  } else {
					alert("Signup failed. Please try again later.");
				  }
				} catch (error) {
				  console.error("Error during signup:", error);
				}
			  
				return false;
			  },
			  
			getMessage: () => {
				const store = getStore();
				const options = {
					headers: {
						"Authorization": "Bearer " + store.token
					}
				};

				fetch("https://obscure-yodel-j669v9gjv46hp57x-3001.app.github.dev/api/hello", options)
					.then(response => {
						if (!response.ok) {
							throw new Error("Network response was not ok");
						}
						return response.json();
					})
					.then(data => setStore({ message: data.message }))
					.catch(error => {
						console.error("Error loading message from backend", error);
					});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
