function play(vlm=4.0, lf=85, hf=12500){
  var voice = new Pizzicato.Sound({
      source: 'input',
      options: { volume: vlm }
  }, function(){
		var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
			frequency: hf,
			peak: 10
		});

		voice.addEffect(lowPassFilter);
				
		var highPassFilter = new Pizzicato.Effects.HighPassFilter({
				frequency: lf,
				peak: 10
			});

			voice.addEffect(highPassFilter);
	  
	  voice.play()});
}
function stop(){
	location.reload()
}