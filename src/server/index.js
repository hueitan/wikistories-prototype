import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"

// =================== CONFIGURATION =================== //
const COLLECTION = {
    STORIES: 'stories',
    STORY: 'story'
}

const firebaseConfig = {
  apiKey: "AIzaSyBj9x8w1xHN6dXsyIGPR10y-5xhWcmwfrA",
  authDomain: "fir-a342c.firebaseapp.com",
  projectId: "fir-a342c",
  storageBucket: "fir-a342c.appspot.com",
  messagingSenderId: "252826836190",
  appId: "1:252826836190:web:f596bb993da3380b26f64f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ======================= USAGE ======================= //

export const setStory = ( array ) => {
    const storiesId = getRandomString();
    const storiesRef = doc(db, COLLECTION.STORIES, storiesId );
    let storyList = []

    array.map( frame => {
        const storyId = getRandomString();
        const storyRef = doc(db, COLLECTION.STORY, storyId );
        setDoc(storyRef, frame, { merge: true } );
        storyList.push( storyId )
    })

    setDoc(storiesRef, { list: storyList }, { merge: true } )
    
    return storiesId;
}

export const queryStory = async ( storiesId ) => {
    const docRef = doc(db, COLLECTION.STORIES, storiesId);
    const docSnap = await getDoc(docRef);
    const stories = [];

    if (docSnap.exists()) {
        const storyList = docSnap.data().list;
        for( const storyId of storyList) {
            const storyRef = doc(db,COLLECTION.STORY, storyId )
            const storySnap = await getDoc(storyRef)
            stories.push( storySnap.data() )
        }
    } 

    return stories;
}

// export const searchStory = ( query ) => {

// }

// ====================== UTILITY ====================== //

function getRandomString(length = 6) {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}