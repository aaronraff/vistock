$(document).ready(function() {
    $('#search-bar').keypress(function(e) {
        if(e.key === "Enter") {
            symbol = $('#search-bar').val();
            console.log(symbol);
        }
    });
});