name = heat-pack

zip: $(name).zip

$(name).zip: $(name)/*
	mv $(name)/icon.psd .
	zip -r $(name).zip $(name)
	mv icon.psd $(name)