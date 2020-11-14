import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCl9ohO-CHSGJFUPa-TJbjK7slH46ze4Ns",
    authDomain: "huso-4748e.firebaseapp.com",
    databaseURL: "https://huso-4748e.firebaseio.com",
    projectId: "huso-4748e",
    storageBucket: "huso-4748e.appspot.com",
    messagingSenderId: "644639755749",
    appId: "1:644639755749:web:17a0606568e5d9eba3330c",
    measurementId: "G-TDCM39JW94"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    // Auth API 
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);
    
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;