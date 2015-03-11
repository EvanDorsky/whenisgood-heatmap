(function() {
	alert('hiiiiiiii')
	var cants = []

	$('.cantCount').each(function() {
		cants.push({
			$el: this,
			cantCount: numFromCant($(this).html())
		})
	})

	function numFromCant(cant) {
		var num = (cant | 0)
		if (num === num)
			return num

		return (cant.charAt(26) | 0)
	}

	var max = Math.max.apply(null, cants.map(function(cant) { return cant.cantCount }))
	var min = Math.min.apply(null, cants.map(function(cant) { return cant.cantCount }))

	function colorFromCant(min, max, cant) {
		var severity = (cant-min)/(max-min)

		return 'rgb('+(severity*255 | 0)+', '+((1-severity)*255 | 0)+', '+((1-severity)*100 | 0)+')'
	}

	cants.forEach(function(cant) {
		var cell = $(cant.$el).parent().parent().parent().parent()

		cell.css({
			'background-color': function() {
				return colorFromCant(min, max, cant.cantCount)
			},
			'color': 'white'
		})
		$(cant.$el).css({'color': 'white'})
	})
})()