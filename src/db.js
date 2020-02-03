// hackernews API は database
import firebase from 'firebase/app';
import 'firebase/database';

// v0 が今のバージョン
export let api = firebase
  .initializeApp({databaseURL: 'https://hacker-news.firebaseio.com'})
  .database()
  .ref('/v0');
