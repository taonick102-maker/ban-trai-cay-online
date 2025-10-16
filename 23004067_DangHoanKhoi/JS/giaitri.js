let computerChoice = "";
const options = ["keo", "bua", "bao"];

function randomComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  computerChoice = options[randomIndex];
}

function choose(playerChoice) {
  // Reset màu trước đó
  document.querySelectorAll(".choice").forEach(el => el.classList.remove("selected"));
  document.getElementById(playerChoice).classList.add("selected");

  // Máy chọn ngẫu nhiên
  randomComputerChoice();

  // Kiểm tra kết quả
  let resultText = "";
  const ketqua = document.getElementById("ketqua");
  const playerDiv = document.getElementById(playerChoice);

  if (playerChoice === computerChoice) {
    resultText = "🎉 Chúc mừng! Bạn thắng rồi! (Máy chọn: " + format(computerChoice) + ")";
  } else if (
    (playerChoice === "keo" && computerChoice === "bao") ||
    (playerChoice === "bua" && computerChoice === "keo") ||
    (playerChoice === "bao" && computerChoice === "bua")
  ) {
    resultText = "🎉 Chúc mừng! Bạn thắng rồi! (Máy chọn: " + format(computerChoice) + ")";
  } else {
    resultText = "😅 Máy chọn: " + format(computerChoice) + " — Bạn thua rồi!";
    playerDiv.innerHTML += `<div class="smile">😊</div>`;
  }

  ketqua.textContent = resultText;
}

function restartGame() {
  document.getElementById("ketqua").textContent = "👉 Hãy chọn 1 biểu tượng để bắt đầu chơi!";
  document.querySelectorAll(".choice").forEach(el => {
    el.classList.remove("selected");
    el.innerHTML = el.id === "keo" ? "✌️<br>Kéo"
                : el.id === "bua" ? "✊<br>Búa"
                : "✋<br>Bao";
  });
}

function format(text) {
  return text === "keo" ? "Kéo" : text === "bua" ? "Búa" : "Bao";
}
