
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        let container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);

        json.forEach(value =>  {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            userDiv.innerText = `${value.id} ${value.name}`;

            let btn = document.createElement('button');
            btn.innerText = 'details';

            btn.addEventListener("click", ev => {
                console.log(location.href)
                location.href = `../user-details/user-details.html?userId=${value.id}`
            })

            userDiv.appendChild(btn);
            container.appendChild(userDiv);

        })

    })