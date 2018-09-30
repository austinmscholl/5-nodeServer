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
    .then(response=>response.json())
        
        .then(data => {

            console.log(data)
        })
}

/***************************************
 * FETCH/POST to Auth/Create
*************************************/
function postToAuthRouteCreate() {
    const fetch_url = `http://localhost:3000/authtest/create` 
    const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value; //1

    let authInputData = { authtestdata: { item: authTestDataInput } }; //2

    const response = fetch(fetch_url, {
        method: 'POST', //3
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)  //4
    })
        .then(response=>response.json())
        
        .then(data => {
            console.log(data)
        })
}