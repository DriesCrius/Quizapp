/* const dataURL = "https://api.jsonbin.io/b/5f00f1350bab551d2b6bfd42";
const htmlBody = document.querySelector("body");
const fetchInitGet = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
        'secret-key': '$2b$10$mez7yhjYtq5JAg9TXgi3Yup5JQdL9lJqywUT2RNm9ka6Pl3D4TPWu'
    },
};

fetch(dataURL, fetchInitGet).then(
    res => res.json(),
    rej => console.error("error: " + rej)
).then(
    comment => comment.forEach(comm => {
        let newH1 = document.createElement("H1");
        newH1.innerHTML = `<h1>${comm.comment}</h1>`
        htmlBody.appendChild(newH1)
    })
)
 */
const dataURL = "https://api.jsonbin.io/b/5f00f1350bab551d2b6bfd42";
const htmlBody = document.querySelector("body");
const fetchInitGet = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
        'secret-key': '$2b$10$mez7yhjYtq5JAg9TXgi3Yup5JQdL9lJqywUT2RNm9ka6Pl3D4TPWu'
    },
};

fetch(dataURL, fetchInitGet).then(
    res => res.json(),
    rej => console.error("error: " + rej)
).then(
    comment => {
        for (let k in comment.content) {
            console.log(comment.content[k].comment);
            let newH1 = document.createElement("H1");
            newH1.innerHTML = `<h1>${comment.content[k].comment}</h1>`
            htmlBody.appendChild(newH1)
        };
    }
)

