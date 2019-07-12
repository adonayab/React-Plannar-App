import React from "react";

export default function ProjectDetails(props) {
	const id = props.match.params.id;
	return (
		<div>
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">Project Title - {id}</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum
							impedit magni quos veniam fugiat asperiores, saepe accusamus
							quaerat dignissimos vero laboriosam nulla quae tempore deserunt
							praesentium magnam totam repudiandae?
						</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div className="">Posted by Adonay</div>
						<div className="">11th of July, 2pm</div>
					</div>
				</div>
			</div>
		</div>
	);
}
