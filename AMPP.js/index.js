var Client = require('./Client');
module.exports.chat = {
    send: function(message) {
        gClient.sendArray([{m:"a", message: message}]);
    }
}
var channel_id = "";
if(channel_id.substr(0, 1) == "/") channel_id = channel_id.substr(1);
if(channel_id == "") channel_id = "testing1234";
var gClient = new Client("ws://www.multiplayerpiano.com");
module.exports.client = gClient;
gClient.setChannel(channel_id);
gClient.start();
// Setting status
(function() {
    gClient.on("status", function(status) {
        
    });
    gClient.on("count", function(count) {
    });
})();
// Handle changes to participants
(function() {
    gClient.on("participant added", function(part) {
    });
    gClient.on("participant removed", function(part) {
    });
    gClient.on("participant update", function(part) {
    });
    gClient.on("ch", function(msg) {
        for(var id in gClient.ppl) {
            if(gClient.ppl.hasOwnProperty(id)) {
                var part = gClient.ppl[id];
                
            }
        }
    });
    function updateCursor(msg) {
        const part = gClient.ppl[msg.id];
        
    }
    gClient.on("m", updateCursor);
    gClient.on("participant added", updateCursor);
})();