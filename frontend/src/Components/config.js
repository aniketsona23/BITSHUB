import { initializeApp } from "firebase/app";
import  {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFMIqpvKL97mOg0e7VRvYMEuqJ1P7ekT4",
  authDomain: "bitshub-4ea02.firebaseapp.com",
  projectId: "bitshub-4ea02",
  storageBucket: "bitshub-4ea02.appspot.com",
  messagingSenderId: "570560722662",
  appId: "1:570560722662:web:e18daa24304ad9d179ad27"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth,provider};