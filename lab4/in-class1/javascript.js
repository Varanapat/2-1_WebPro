function listOfMonths() {
    const months = ["January", "February",
            "March", "April",
            "May", "June",
            "July", "August",
            "September", "October",
            "November", "December"];
    // list of months
    let ul1 = document.createElement('ul');

        // การเข้าลุป มี 2 แบบ
    // for (let month of months) {
    //     let li1 = document.createElement('li');
    //     let tnode = document.createTextNode(month);
    //     li1.appendChild(tnode);
    //     ul1.appendChild(li1);
    // }

    months.forEach(function(month) {
        let li1 = document.createElement('li');
        let tnode = document.createTextNode(month);
        li1.appendChild(tnode);
        ul1.appendChild(li1);
        });


    document.getElementById('pmonths').appendChild(ul1);
}
