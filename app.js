$(document).ready(function () {
	var prefixes = ['Get','My','Total','Planning','Orbital','Adventist','Apostolic'];
	var middles = ['Ministry','Outreach','Church','Planner','Member','Faith','Community','Churches','Apostle','Apostles','Minister','Ministr','Tree','Planr','Grower','Growth'];
	var suffixes = ['Tools','Tool','Hub','Lander','365','360','Center','able','Point','File','Mover','Maker','Base'];
	var tlds = ['.com','.org','.tools','.church','.disciples','.faith','.community','.io','.family','.works','.directory','.center','.life','.cloud','.global'];

	var numPrefixes = randomNumber(0,2);
	var numMiddles = randomNumber(1,2);
	var numSuffixes = randomNumber(0,2);
	var numTlds = 1;

	var selectedPrefixes = getPieces(numPrefixes, prefixes);
	var selectedMiddles = getPieces(numMiddles, middles);
	var selectedSuffixes = getPieces(numSuffixes, suffixes);
	var selectedTlds = getPieces(numTlds, tlds);

	var result = selectedPrefixes.concat(selectedMiddles.concat(selectedSuffixes.concat(selectedTlds)));

	$('body').html('<a target="_blank" href="https://www.hover.com/domains/results?q='+result+'">'+result+'</a>');

	jQuery.get('https://randoma11y.com/combos?page=1&per_page=10', function (data) {
		var combo = randomChoice(data);
		var colors = shuffle([combo.color_one, combo.color_two]);
		$('body').css('background-color',colors[0]).css('color',colors[1]);
	});

	function getPieces(num, parts) {
		function recur(num, parts, selected) {
			if (num < 1) return selected;
			var newSelected = selected + randomChoice(parts);
			return recur(num-1, parts, newSelected);
		}
		return shuffle( recur( num, parts, [] ) );
	}

	function randomNumber(a,b) {
		return Math.floor(Math.random()*((b-a)+1))+a;
	}

	function randomChoice(items) {
		return items[Math.floor(Math.random()*items.length)];
	}

	function shuffle(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
});