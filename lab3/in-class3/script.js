let acts = ["Wakes up for a bath and waits for Mom to eat breakfast.",
            "Walks around, showing off before heading to the water for a nap.",
            "Takes a nap in the water.",
            "Might get up for a stroll or a nap on land.",
            "Naps on land.",
            "Naps in the water again.",
            "Mom gets out of the water for dinner while Moo Deng naps.",
            "Mom eats grass while Moo Deng waits, occasionally running a bit, followed by a long nap until evening.",
            "Plays with Mom in the water.",
            "Drinks milk and playfully disturbs Mom.",
            "Sleeps soundly for hours."];

let tbody = document.getElementById('tbody');
acts.forEach(function(act,i){
    let tr1 = document.createElement('tr');

    let td1 = document.createElement('td');
    let tdtxt1 = document.createTextNode(i);
    td1.appendChild(tdtxt1);


    let td2 = document.createElement('td');
    let tdtxt2 = document.createTextNode(act);
    td1.appendChild(tdtxt2);

    tr1.appendChild(td1)
    tr1.appendChild(td2)

    tbody.appendChild(tr1)
});

