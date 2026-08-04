const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_APIKEY ||
    process.env.VITE_APIKEY ||
    "AIzaSyDx5W-xI0esbQY-t-RFA62h278cO_FxcRc",
  authDomain:
    process.env.NEXT_PUBLIC_AUTHDOMAIN ||
    process.env.VITE_AUTHDOMAIN ||
    "cloud-drive-bed30.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_PROJECT_ID ||
    process.env.VITE_PROJECT_ID ||
    "cloud-drive-bed30",
  storageBucket:
    process.env.NEXT_PUBLIC_STORAGE_BUCKET ||
    process.env.VITE_STORAGE_BUCKET ||
    "cloud-drive-bed30.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID ||
    process.env.VITE_MESSAGING_SENDER_ID ||
    "306210946848",
  appId:
    process.env.NEXT_PUBLIC_APP_ID ||
    process.env.VITE_APP_ID ||
    "1:306210946848:web:45267d7fbc1b04d4dfe145",
  measurementId:
    process.env.NEXT_PUBLIC_MEASUREMENT_ID ||
    process.env.VITE_MEASUREMENT_ID ||
    "G-FT86XV9PMZ",
};

export default firebaseConfig;
