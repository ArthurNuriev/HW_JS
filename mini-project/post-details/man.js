
let url = new URL(location);
let postId = url.searchParams.get('postId');

let postDetails = document.createElement("div");
postDetails.classList.add('postDetails');
document.body.appendChild(postDetails);
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(response => response.json())
    .then(post => {

        let ul = document.createElement('ul');
        postDetails.appendChild(ul);

        for (const postKey in post) {
            let li = document.createElement("li");
            li.innerHTML = `<b>${postKey}:</b> ${post[postKey]}`
            ul.appendChild(li);
        }
        postDetails.addEventListener("click", commentsBuilder);
    })


function commentsBuilder() {

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {

            comments.forEach(value=>{

                let commentElement = document.createElement("div");
                commentElement.classList.add('commentElement');
                document.body.appendChild(commentElement);

                for (const valueKey in value) {
                    let commentInfo = document.createElement('p');
                    commentInfo.classList.add('commentInfo');
                    commentInfo.innerHTML = `<b>${valueKey}:</b> ${value[valueKey]}`;
                    commentElement.appendChild(commentInfo);
                }
            })
        })
    postDetails.removeEventListener("click", commentsBuilder);
}
