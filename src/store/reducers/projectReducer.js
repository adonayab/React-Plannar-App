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
	return state;
};

export default projectReducer;
