let isThai = true; 
function ChangeLang() {
    if (isThai) {

        document.querySelector('.fname').textContent = 'First Name:';
        document.querySelector('.lname').textContent = 'Last Name:';
        document.querySelector('.country').textContent = 'Country:';        

        let select = document.getElementById('country');
        select.options[0].text = '---------- Select Country ----------';
        select.options[1].text = 'Thailand';
        select.options[2].text = 'Vietnam';
        select.options[3].text = 'Laos';
        select.options[4].text = 'Malaysia';
        select.options[5].text = 'Singapore';
        select.options[6].text = 'Filipphine';
        select.options[7].text = 'Myanmar';
        select.options[8].text = 'Cambodia';
        select.options[9].text = 'Brunai';
        select.options[10].text = 'Indonesia';

        document.querySelector('button').textContent = 'Change Language';
        isThai = false;
    } else {

        document.querySelector('.fname').textContent = 'ชื่อ :';
        document.querySelector('.lname').textContent = 'นามสกุล :';
        document.querySelector('.country').textContent = 'ประเทศ :';

        let select = document.getElementById('country');
        select.options[0].text = '---------- เลือกประเทศ ----------';
        select.options[1].text = 'ไทย';
        select.options[2].text = 'เวียดนาม';
        select.options[3].text = 'ลาว';
        select.options[4].text = 'มาเลเซีย';
        select.options[5].text = 'สิงคโปร์';
        select.options[6].text = 'ฟิลิปปินส์';
        select.options[7].text = 'เมียนร์มา';
        select.options[8].text = 'กัมพูชา';
        select.options[9].text = 'บรูไน';
        select.options[10].text = 'อินโดนีเซีย';

        document.querySelector('button').textContent = 'เปลี่ยนภาษา';
        isThai = true;
    }
}
