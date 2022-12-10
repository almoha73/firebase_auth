import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "@firebase/firestore";

export const firebaseConfig = {
	apiKey: "AIzaSyCJGKf3vxHLiQKAyjJvTNN66nd8ejLSgxM",
	authDomain: "test-firebase-7fed0.firebaseapp.com",
	projectId: "test-firebase-7fed0",
	storageBucket: "test-firebase-7fed0.appspot.com",
	messagingSenderId: "191139957067",
	appId: "1:191139957067:web:bea7f17d0d50ba564b00ce",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
