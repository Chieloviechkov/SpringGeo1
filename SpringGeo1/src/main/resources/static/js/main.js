$(document).ready(function() {
    $.getJSON('/rate', function(data) {
        $('#rate-ua').text(data.rates.UAH);
        $('#rate-usd').text(data.rates.USD);
        $('#date').text(data.date);

    });
});
