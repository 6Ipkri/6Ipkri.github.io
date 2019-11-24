
  const APPID = "SmartDoor26";
  const KEY = "ksLK3hrnB2XHSKL";
  const SECRET = "g7Df3e9DbF5H3wd2yDxDcu8oN";

  const ALIAS = "DigitalOUTPUT_HTML_web";     //  ชื่อตัวเอง
  const thing1 = "NodeMCU1"; //  ชื่อเพื่อนที่จะคุย

  var toggle = 0;

  function switchPress(){
    console.log("switchPress " + toggle)
    if(toggle == 1 ){
      microgear.chat(thing1,"ON");
    }else if(toggle == 0 ){
      microgear.chat(thing1,"OFF");
    }
  }

  var microgear = Microgear.create({
    key: KEY,
    secret: SECRET,
    alias : ALIAS
  });


  microgear.on('message', function(topic,data) {
    console.log("message " + toggle)
    if(data=="OFF"){
      toggle = 1;
      document.getElementById("click-door").style.backgroundColor = "#3C5817"
      document.getElementById("doorStatus").innerHTML =  "lock" +toggle;
      document.getElementById("doorImg").src = "images/open-door.png"
    }else if(data=="ON"){
      toggle = 0;
      document.getElementById("click-door").style.backgroundColor = "#824525"
      document.getElementById("doorStatus").innerHTML =  "unlock" + toggle; 
      document.getElementById("doorImg").src = "images/close-door.png";
    }
  });

  microgear.on('connected', function() {
    microgear.setAlias(ALIAS);
    document.getElementById("connectStatus").innerHTML = "connected"
  });

  microgear.on('present', function(event) {
    console.log(event);
  });

  microgear.on('absent', function(event) {
    console.log(event);
  });

  microgear.resettoken(function(err) {
    microgear.connect(APPID);
  });
