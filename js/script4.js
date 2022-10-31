function getDiscordURL() {
  console.log(getJSONFile()[0].discordurl)
}

function getJSONFile() {$.getJSON("./config.json", function(json) {return json});}