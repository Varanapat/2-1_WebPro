
function SaveDatInForm() {
    let fname = document.getElementById("FirstName").value;
    let lname = document.getElementById("LastName").value;

    // Save to localStorage
    localStorage.setItem('userFirstName', fname);
    localStorage.setItem('userLastName', lname);

    alert("Data saved");
}

function showLocalData() {
    // Load from localStorage
    let sfn = localStorage.getItem('userFirstName');
    let sln = localStorage.getItem('userLastName');
    
    // แสดงข้อมูลใน element id="show_data"
    document.getElementById('show_data').innerHTML = 
        'Name : ' + sfn + '<br>LastName : ' + sln;
}

