function getDiscordURL() {
  console.log(getJSONFile(String("discordurl")));
}

/**
 * 
 * @param {str} v 
 */
function getJSONFile(v) {
  $.getJSON("./config.json", function(json) {
    $.each(json, function(key, value) {  
      if (key == v) {return value} else {console.log(key + ":" + value)}
      return key + ":" + value
    });
  });
}