
var cryptoCoin;

var init = function(){	
	cryptoCoin = new cryptoCoin();
	
	cryptoCoin.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + cryptoCoin.cards.length);

			var source = $("#card-list-template").html();
			var template = Handlebars.compile(source);

			var context = {cards:cryptoCoin.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
