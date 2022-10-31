function getDiscordURL() {
  console.log(getJSONFile().discordurl)
}

function getJSONFile() {$.getJSON("./config.json", function(json) {return json});}