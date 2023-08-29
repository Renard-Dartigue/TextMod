import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
//(DONE)
export const putDb = async (content) => 

    console.error('putDb not implemented'); {
      const db = await openDB('jate', 1);
      const tx = db.transaction('jate', 'readwrite');
      const store = tx.objectStore('jate');
      
      const newItem = { content };
      const id = await store.add(newItem);
      
      await tx.complete;
      console.log(`Added content with ID: ${id}`);
};

// TODO: Add logic for a method that gets all the content from the database 
//(DONE)
export const getDb = async () => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  
  const items = await store.getAll();
  
  return items;
};

initdb();
