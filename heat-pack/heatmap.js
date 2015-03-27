(function() {
	var cants = []

	var elements = document.querySelectorAll('.cantCount')

	Array.prototype.forEach.call(elements, function(el, i) {
		cants.push({
			$el: el,
			cantCount: numFromCant(el.innerHTML)
		})
	})

	function numFromCant(cant) {
		var num = Number(cant)
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
		var cell = cant.$el.parentNode.parentNode.parentNode.parentNode

		cell.style.backgroundColor = colorFromCant(min, max, cant.cantCount)
		cell.style.color = 'white'

		cant.$el.style.color = 'white'
	})
})()