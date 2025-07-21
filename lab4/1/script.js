function multiple() {
    const num = parseInt(document.getElementById('number').value);
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    if (isNaN(num) || num < 1 || num > 12) {
        alert('กรุณาใส่เลขระหว่าง 1 ถึง 12');
        return;
    }

    for (let i = 1; i <= 12; i++) {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.textContent = `${num} x ${i}`;

        const td2 = document.createElement('td');
        td2.textContent = num * i;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
}
