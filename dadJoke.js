const answers = [
  "布団がふっとんだ",
  "電話に出んわ",
  "ネコが寝転んだ",
  "そんなバナナ",
  "当たり前だのクラッカー",
  "コーディネートは、こーでねーと",
  "校長は絶好調！",
  "アイムソーリー、ヒゲソーリー",
  "トイレに行っといれ",
  "朝食まずくて、超ショック",
]
function addChatText(val,type) {
  if(!val) return false;
  const text = document.createElement('li');
  text.innerHTML = val;  
  if(type === "other"){
    text.classList.add("message-other");
  }
  const chatWindow = document.getElementById("chat-list");
  chatWindow.appendChild(text);
}
document.getElementById("chat-send").addEventListener(
  "click",
   () => {
  const inputText = document.getElementById("chat-input");

  addChatText(inputText.value,"you");
  inputText.value = "";

  const index = Math.floor(Math.random() * answers.length);
  addChatText(answers[index], "other");

});

setTimeout(function(){
  addChatText("おつかれさんです","other");
}, 1000);