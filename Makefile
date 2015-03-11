zip: heat-pack.zip

heat-pack.zip: heat-pack/*
	mv heat-pack/icon.psd .
	zip -r heat-pack.zip heat-pack
	mv icon.psd heat-pack