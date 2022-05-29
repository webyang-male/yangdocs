// 控制台打印自定义内容
var window;
if (window.console) {
    console.clear();
    var getTimeState_console = function () {
      var t = new Date().getHours(),
        e = "";
      return (
        4 >= t || t > 22
          ? (e = "Good Night 🛌<br>")
          : 4 < t && t <= 10
          ? (e = "Good Morning 🌮")
          : 10 < t && t <= 12
          ? (e = "Good Noon 🍱")
          : 12 < t && t <= 17
          ? (e = "Good Afternoon ☕")
          : 17 < t && t <= 22 && (e = "Good Evening 🍇"),
        e
      );
    };

    console.log(getTimeState_console());
    console.log("欢迎访问%cZain's Blog", "color:#1fc7b6;font-weight:bold");
    console.log("遇到你很幸运 💛💙");
  }
  