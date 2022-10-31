function getDiscordURL() {
  console.log(getJSONFile()[0])
}

function getJSONFile() {
  $.getJSON("./config.json", function(json) {
   return json
});
}