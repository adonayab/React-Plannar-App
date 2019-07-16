import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { logicalExpression } from "@babel/types";

const ProjectDetails = props => {
	const { project, auth } = props;
	if (!auth.uid) return <Redirect to="/signin" />;

	if (project) {
		return (
			<div>
				<div className="container section project-details">
					<div className="card z-depth-0 blue darken-2 ">
						<div className="card-content">
							<span className="card-title grey-text text-lighten-1">
								{project.title}
							</span>
							<p className="white-text">{project.content}</p>
						</div>
						<div className="card-action grey lighten-2 grey-text text-darken-2">
							<div className="">
								Posted by {project.authorFirstName} {project.authorLastName}
							</div>
							<div className="">
								{moment(project.createdAt.toDate().toString()).calendar()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container center">
				<p>Loding project ...</p>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;
	return {
		project: project,
		auth: state.firebase.auth
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
