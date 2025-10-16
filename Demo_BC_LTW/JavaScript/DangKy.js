document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); // 🛑 Ngăn form tự submit và reload trang

  let name = document.getElementById("name").value.trim();
  let pass = document.getElementById("password").value.trim();
  let confirm = document.getElementById("confirm").value.trim();
  let number = document.getElementById("number").value.trim();
  let agree = document.getElementById("agree").checked;

  if (name === "" || pass === "" || confirm === "" || number === "" || !agree) {
    alert("Vui lòng điền đầy đủ thông tin!");
    document.getElementById("registerForm").reset();
  } 
  else if (pass !== confirm) {
    alert("Mật khẩu xác nhận không khớp!");
    document.getElementById("registerForm").reset();
  } 
  else {
    alert("Đăng ký thành công!");
    window.location.href = "../HTML/TrangChu.html"; // 🔗 Đường dẫn đến trang chủ
  }
});
