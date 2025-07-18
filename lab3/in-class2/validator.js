function validateForm() {    

    let fname = document.getElementById("FirstName").value;
    let lname = document.getElementById("LastName").value;
    let adr = document.getElementById("Address").value;

    if (fname.length < 3 ) {
        alert("กรอกชื่ออย่างน้อย 3 ตัวอักษร");
        return false;
    }
    if (lname.length < 2 ) {
        alert("กรอกนามสกุลอย่างน้อย 2 ตัวอักษร");
        return false;
    }
    if (adr.length < 10 ) {
        alert("ที่อยู่พ่***งน้อยกว่า 10 ตัวอักษรหรอ");
        return false;
    }

    // ถ้าต้องการให้มัน เเสดงค่าเป็นประเทศเลย ให้เอาชื่อประเทศไปใส่ value ได้เลย
    let country = document.getElementById("Country").value; 
    if (country =="00" ) {
        alert("ไอควาย มึงอยู่นอกโลกหรอ");
        return false;
    }
}