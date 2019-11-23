
  const APPID = "SmartDoor26";
  const KEY = "ksLK3hrnB2XHSKL";
  const SECRET = "g7Df3e9DbF5H3wd2yDxDcu8oN";

  const ALIAS = "DigitalOUTPUT_HTML_web";     //  ชื่อตัวเอง
  const thing1 = "NodeMCU1";                                   //  ชื่อเพื่อนที่จะคุย

  function switchPress(logic){
    if(logic == 1 ){
      microgear.chat(thing1,"ON");
    }else if(logic == 0 ){
      microgear.chat(thing1,"OFF");
    }
  }

  var microgear = Microgear.create({
    key: KEY,
    secret: SECRET,
    alias : ALIAS
  });


  microgear.on('message', function(topic,data) {
    if(data=="OFF"){
      document.getElementById("Status").innerHTML =  "Lock is ON.";
    }else if(data=="ON"){
      document.getElementById("Status").innerHTML =  "Lock is OFF."; 
    }
  });

  microgear.on('connected', function() {
    microgear.setAlias(ALIAS);
    document.getElementById("connected_NETPIE").innerHTML = "Connected to NETPIE"
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
