import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBWQNgHtx7GyJv6wuAuCoHjWltcDjRZan8",
	authDomain: "adonay-f-plan.firebaseapp.com",
	databaseURL: "https://adonay-f-plan.firebaseio.com",
	projectId: "adonay-f-plan",
	storageBucket: "",
	messagingSenderId: "423531594701",
	appId: "1:423531594701:web:c88708dbae277fb4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
