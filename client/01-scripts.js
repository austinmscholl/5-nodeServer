function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', { //1
        method: 'GET', 
        headers: new Headers({ //2
          'Content-Type': 'application/json'
        })
    })
        .then(function (response) {
            console.log("Fetch response:", response)
            return response.text(); //3
        })
        .then(function (text) {
            console.log(text);
        });
}

/******************************
 * 2 POST long hand: /one 
 *****************************/
function postToOne(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
      method: 'POST',             //1
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
        function(response){   //2
            return response.text()
        })
    .catch(
        function(error){   //3
            console.error('Error:', error)
        })
    .then(
        function(response){   //4
            console.log('Success:', response);
        })
}

  /***************************************
 * 3 POST /one : Arrow Function
*************************************/
function postToOneArrow(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {  //1
      method: 'POST', 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.text()) //2
    .catch(error => console.error('Error:', error)) //3
    .then(response => console.log('Success:', response)); //4
}

function postData() {
    //1
    let content = { testdata: { item: 'This was saved!' } };

    //2
    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)  //3
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text);
        //4
        testDataAfterFetch.innerHTML = text.testdata.testdata; 
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
    });
}

/***************************************
 * 4 GET FROM /ONE - Display Data
*************************************/
function fetchFromOneDisplayData(){
    //1
    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');   

    //2
    fetch(url, {
      method: 'GET', 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
        function(response){
            return response.json()
        })
    .catch(
        function(error){
            console.error('Error:', error)
        })
    .then(
        function(results){
            let myList = document.querySelector('#getjson'); //3

            for (r of results){  //4
                console.log('Response:', r.testdata); //5
                var listItem = document.createElement('li');  //6 
                listItem.innerHTML = r.testdata; //7
                myList.appendChild(listItem); //8
            }
        })
}