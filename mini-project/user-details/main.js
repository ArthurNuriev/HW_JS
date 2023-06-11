const url = new URL(location);
const id = url.searchParams.get('userId');

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

let ul = document.createElement('ul');
wrapper.appendChild(ul);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        builder(user, ul)

        let btn = document.createElement('button');
        btn.innerText = 'post of current user'
        wrapper.appendChild(btn);

        btn.addEventListener("click", postBuilder);

        function postBuilder() {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(post => {
                    let tittleOfPosts = document.createElement('div');
                    tittleOfPosts.classList.add('tittleOfPosts');
                    document.body.appendChild(tittleOfPosts);
                    for (const postKey in post) {
                        let tittle = document.createElement('div');
                        tittle.classList.add('tittleOfPost')
                        tittle.innerText = post[postKey].title;
                        tittleOfPosts.appendChild(tittle);

                        let button = document.createElement("button");
                        button.innerText = 'post-details';
                        tittle.appendChild(button);

                        let i = 0;
                        i++;

                        button.addEventListener("click", () => {
                            location.href = `../post-details/post-details.html?postId=${post[postKey].id}`
                        })
                    }
                })
            btn.removeEventListener("click", postBuilder,false);
        }

    })

function builder(obj, parent) {
    for (const userKey in obj) {
        if (typeof obj[userKey] === 'object') {
            ulCreator(userKey, obj[userKey], parent)
        } else {
            liCreator(userKey, obj[userKey], parent);
        }
    }
}

function liCreator(key, value, parent) {
    let li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`
    parent.appendChild(li);
}

function ulCreator(key, obj, parent) {
    let li = document.createElement('li');
    let ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`

    li.appendChild(ul);
    parent.appendChild(li);

    builder(obj, ul);
}


    






















