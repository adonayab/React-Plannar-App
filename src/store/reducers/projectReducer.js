const initState = {
	projects: [
		{
			id: "1",
			title: "Learn Javascript",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		},
		{
			id: "2",
			title: "Learn Python",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		},
		{
			id: "3",
			title: "Learn Data Science",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}
	]
};
const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case "CREATE_PROJECT":
			console.log("created project", action.project);
			return state;
		case "CREATE_PROJECT_ERROR":
			console.log("create project error", action.err);
			return state;
		default:
			return state;
	}
};

export default projectReducer;
