document.getElementById("getAllButton").onclick = () => {
    //DBの任意のテーブルからデータを引っ張ってくる
    //show all data
    document.getElementById("resultArea").innerHTML();
}
document.getElementById("execute_button").onclick = () => {
    const sentence = document.getElementById("SQLBox").value;
    //do sql sentence
    document.getElementById("resultArea").innerHTML();
}