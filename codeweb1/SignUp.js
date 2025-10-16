const day = document.getElementById('Day');/* Lấy thẻ select có id là "day" */
for (let i = 1; i <= 31; i++) { /* Vòng lặp từ 1 đến 31 để tạo các tùy chọn ngày */
  const option = document.createElement('option'); /* Tạo một thẻ option mới */
  option.value = i; /* Gán giá trị của option là số ngày */
  option.text = i;  /* Gán văn bản hiển thị của option là số ngày */
  day.appendChild(option); /* Thêm option vào thẻ select */
}

const month = document.getElementById('month'); /* Lấy thẻ select có id là "month" */
for (let i = 1; i <= 12; i++) { /* Vòng lặp từ 1 đến 12 để tạo các tùy chọn tháng */
  const option = document.createElement('option'); /* Tạo một thẻ option mới */
  option.value = i;  /* Gán giá trị của option là số tháng */
  option.text = i; /* Gán văn bản hiển thị của option là số tháng */
  month.appendChild(option); /* Thêm option vào thẻ select */
}

const year = document.getElementById('year'); /* Lấy thẻ select có id là "year" */
for (let i = 1900; i <= 2024; i++) { /* Vòng lặp từ 1900 đến 2024 để tạo các tùy chọn năm */
  const option = document.createElement('option'); /* Tạo một thẻ option mới */
  option.value = i; /* Gán giá trị của option là số năm */
  option.text = i; /* Gán văn bản hiển thị của option là số năm */
  year.appendChild(option); /* Thêm option vào thẻ select */
}
let countries = ["Lào Cai","Thái Nguyên","Phú Thọ","Bắc Ninh","Hưng Yên","Thành phố Hải Phòng","Ninh Bình","Quảng Trị",
  "Thành phố Đà Nẵng","Quảng Ngãi","Gia Lai","Khánh Hòa","Lâm Đồng","Đắk Lắk","Thành phố Hồ Chí Minh","Đồng Nai","Tây Ninh",
    "Thành phố Cần Thơ","Vĩnh Long","Đồng Tháp","Cà Mau","An Giang"];
let select = document.getElementById("country");
countries.forEach(function(c) {
    let opt = document.createElement("option");
    opt.textContent = c;
    opt.value = c.toLowerCase();
    select.appendChild(opt);
});
document.getElementById("Submit").addEventListener("click", function (event) {
    event.preventDefault(); // ngăn gửi form tạm thời

    const pwd = document.getElementById("pwd").value;
    const confirmPwd = document.getElementById("confirmPwd").value;
    const error = document.getElementById("pwdError");

    if (pwd !== confirmPwd) {
        error.textContent = "Mật khẩu nhập lại không trùng khớp!";
    } else if (pwd.length < 6) {
        error.textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
    } else {
        error.textContent = "";
        alert("Mật khẩu hợp lệ! ✅");
        // Nếu bạn muốn submit thật:
        // document.getElementById("myForm").submit();
    }
});