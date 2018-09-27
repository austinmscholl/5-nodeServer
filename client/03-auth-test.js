function fetchAllFromAuthRoute() {
    const fetch_url = `http://localhost:3000/authtest/getall`
    const accessToken = localStorage.getItem('SessionToken') //1

    const response = fetch(fetch_url, {
        method: 'GET', //2
        headers: {
            'Content-Type': 'application/json', //3
            'Authorization': accessToken //4
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {

            console.log(data)
        })
}