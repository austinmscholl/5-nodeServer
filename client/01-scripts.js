function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(function (response) {
            console.log("Fetch response:", response)
            return response.text();
        })
        .then(function (text) {
            console.log(text)
        });
}