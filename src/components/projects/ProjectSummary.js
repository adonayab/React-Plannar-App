import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card-content blue darken-2">
				<span className="card-title white-text">{project.title}</span>
				<p className="grey-text text-lighten-2">
					Posted by {project.authorFirstName} {project.authorLastName}
				</p>
				<p className="grey-text text-lighten-1">
					{moment(project.createdAt.toDate().toString()).calendar()}
				</p>
			</div>
		</div>
	);
};

export default ProjectSummary;
