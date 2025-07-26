let balance = 0;

function addTransaction() {
    const desc = document.getElementById('desc').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    const date = document.getElementById('date').value;

    if (!desc || !amount || !date || amount <= 0) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง");
        return;
    }

    const tbody = document.getElementById('transaction-body');
    const tr = document.createElement('tr');
    const income = type === 'income' ? amount : 0;
    const expense = type === 'expense' ? amount : 0;

    // เพิ่มแถว
    tr.innerHTML = `
        <td>${date}</td>
        <td>${desc}</td>
        <td>${income}</td>
        <td>${expense}</td>
    `;
    tbody.appendChild(tr);

    // อัปเดตยอดคงเหลือ
    balance += (type === 'income') ? amount : -amount;
    document.getElementById('balance').textContent = balance;
    
    // เคลียร์ฟอร์ม
    document.getElementById('desc').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('date').value = "";
}
