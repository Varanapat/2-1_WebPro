function validateForm() {
        let title = document.getElementById("nameTitle").value;
        let fname = document.getElementById("FirstName").value.trim();
        let lname = document.getElementById("LastName").value.trim();
        let ID = document.getElementById("citizenId").value.trim();
        let adr = document.getElementById("Address").value.trim();
        let sdis = document.getElementById("Subdistrict").value.trim();
        let dis = document.getElementById("District").value.trim();
        let code = document.getElementById("zip_code").value.trim();
        let pro = document.getElementById("Province").value;

        if (!/^\d{13}$/.test(ID)) {
            alert("กรุณากรอกรหัสบัตรประชาชนให้ถูกต้อง (13 หลัก)");
            return false;
        }

        if (title === "00") {
            alert("กรุณาเลือกคำนำหน้าชื่อ");
            return false;
        }

        if ((fname.length <= 2) || (!/^[A-Za-z]+$/.test(fname)))  {
            alert("ชื่อควรมีความยาวระหว่าง 2-20 ตัวอักษร และเป็นพยัญชนะเท่านั้น");
            return false;
        }

        if ((fname.length <= 2) || (!/^[A-Za-z]+$/.test(lname))) {
            alert("นามสกุลควรมีความยาวระหว่าง 2-30 ตัวอักษร และเป็นพยัญชนะเท่านั้น");
            return false;
        }

        if (adr.length < 15) {
            alert("กรุณากรอกที่อยู่อย่างน้อย 15 ตัวอักษร");
            return false;
        }

        if (sdis.length < 2) {
            alert("กรุณากรอกตำบล/แขวงให้ถูกต้อง");
            return false;
        }

        if (dis.length < 2) {
            alert("กรุณากรอกอำเภอ/เขตให้ถูกต้อง");
            return false;
        }

        if (!/^\d{5}$/.test(code)) {
            alert("กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง (5 หลัก)");
            return false;
        }

        if (pro === "") {
            alert("กรุณาเลือกจังหวัด");
            return false;
        }

        alert("ข้อมูลถูกต้องแล้ว");
        return true;
    }