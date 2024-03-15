function shout(hello) {
    return hello.toUpperCase();
  }
function whisper(HELLO){
    return HELLO.toLowerCase();
}

function logShout(hello) {
    console.log(hello.toUpperCase());
      }
 function logWhisper(HELLO){
    console.log(HELLO.toLowerCase());
 } 
 function sayHiToHeadphonedRoommate(hello){
    if (hello===hello.toLowerCase()) {
        return ("I can't hear you!");
    }
    if (hello===hello.toUpperCase()){
        return ("YES INDEED!");
    }
    if (hello === "Let's have dinner together!"){
        return ("I would love to!");
    }
 }