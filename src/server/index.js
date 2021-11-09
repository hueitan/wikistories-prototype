import { initializeApp } from "firebase/app";
import { getFirestore, writeBatch, doc, collection, getDoc, getDocs, query, where } from "firebase/firestore"

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
    const batch = writeBatch(db);
    let storyList = []

    array.map( frame => {
        const storyId = getRandomString();
        const storyRef = doc(db, COLLECTION.STORY, storyId );
        batch.set(storyRef, { ...frame, id: [ storiesId ], keyword: frame.text.split(' ') }, { merge: true } );
        storyList.push( storyId )
    })

    batch.set(storiesRef, { list: storyList }, { merge: true } )
    batch.commit();
    return storiesId;
}

export const queryStory = async ( storiesId ) => {
    const docRef = doc(db, COLLECTION.STORIES, storiesId);
    const docSnap = await getDoc(docRef);
    const stories = [];

    if (docSnap.exists()) {
        const museums = query(collection(db, COLLECTION.STORY), where('id', 'array-contains', storiesId));
        const querySnapshot = await getDocs(museums);
        let index = 1
        querySnapshot.forEach(doc => {
            const { img, text } = doc.data();
            stories.push( { img, text, id: index++ } )
        });
    } 

    return stories;
}

export const searchStory = async ( queryString ) => {
    const storiesRef = query(collection(db, COLLECTION.STORY), where('keyword', 'array-contains', queryString));
    const storiesSnap = await getDocs(storiesRef)
    const stories = []
    if (!storiesSnap.empty) {
        storiesSnap.forEach(doc => {
            const { img, text, id } = doc.data();
            stories.push( { img, text, id } )
        });
    }

    return stories;
}

// ====================== UTILITY ====================== //

function getRandomString(length = 6) {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}