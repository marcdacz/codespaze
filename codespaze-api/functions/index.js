const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.getPosts = functions.region("australia-southeast1").https.onRequest((req, res) => {
    admin
        .firestore()
        .collection("posts")
        .get()
        .then((data) => {
            let posts = [];
            data.forEach((doc) => {
                posts.push(doc.data());
            });
            return res.json(posts);
        })
        .catch((err) => console.error(err));
});
