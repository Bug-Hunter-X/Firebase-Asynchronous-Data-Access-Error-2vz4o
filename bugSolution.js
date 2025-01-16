```javascript
// Correct way using async/await
async function getData() {
  const querySnapshot = await getDocs(collection(db, "myCollection"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ": ", doc.data());
  });
}

// Correct way using .then()
getDocs(collection(db, "myCollection")).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ": ", doc.data());
  });
});
```