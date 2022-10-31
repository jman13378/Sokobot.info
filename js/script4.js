function getDiscordURL() {
  console.log(getJSONFile(discordurl))
}

function getJSONFile(v) {
  $.getJSON("./config.json", function(json) {
    $.each(json, function(key, value){  
      if (key== v) {return value}
    });
  });
}