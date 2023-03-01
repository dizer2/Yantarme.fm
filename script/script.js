let stream;
let streamPlay = false;
let titel;
let degree = 1;
let myInterval;
let bgMount = 1;








$(".homePage").css("background-image", "url(" + `../img/home/bg${bgMount}.png` + ")");
$(".homePage").animate({
	transition: '2s',
});






let bgSlider = setInterval(() => {

	bgMount++;
	if(bgMount == 9){
		bgMount = 1;
	}
	$(".homePage").css("background-image", "url(" + `../img/home/bg${bgMount}.png` + ")");

	console.log(bgMount)
	


}, "8000")





$(".right__arrow").click(function () {

	bgMount++;
	if(bgMount == 9){
		bgMount = 1;
	}
	
	$(".homePage").css("background-image", "url(" + `../img/home/bg${bgMount}.png` + ")");

	
	
});



$(".left__arrow").click(function () {

	if(bgMount == 1){
		bgMount = 8;
	}else{
		bgMount--;
	}
	
	$(".homePage").css("background-image", "url(" + `../img/home/bg${bgMount}.png` + ")");
	
	
});






fetch(`https://complex.in.ua/status-json.xsl?mount=/yantarne`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
		titel = data.icestats.source.title;

		let indexOf = titel.indexOf("-");
		let nameSound = titel.slice(0, indexOf +1);
		let MusicanSound = titel.slice(indexOf+2, titel.length);



		if(indexOf == -1){
		$(".sound__musican").text(titel);

		}else{
			$(".sound__name").text(nameSound);
			$(".sound__musican").text(MusicanSound);
		}





		console.log(indexOf)
		console.log(nameSound)
		console.log(MusicanSound)




		if (data.icestats.source == undefined) { 
			$(".sound__name").text("У нас зараз перерва");

		}
		
	});


$(".navigation__box").hover(function() {
	$(this).find(".navigation__text").toggleClass("navigation__text__active");
	$(this).find(".navigation__kolo").toggleClass("navigation__kolo__active");


});


let animationBar;

$(".sound__box").click(function () { 
	$(".play").toggleClass("play__active");
	$(".pause").toggleClass("pause__active");
	$(".sound__box").toggleClass("sound__box__active");


   if(streamPlay == false) {
	fetch(`https://complex.in.ua/status-json.xsl?mount=/yantarne`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
		console.log(data.icestats);
		setInterval(() => {
			fetch(`https://complex.in.ua/status-json.xsl?mount=/yantarne`)
			.then((response) => {
			return response.json()
			})
			.then((data) => {
			console.log('changed')
			titel = data.icestats.source.title;
			console.log(titel);
			$(".sound__name").empty();
			$(".sound__musican").empty();
			let indexOf2 = titel.indexOf("-");
			let nameSound2 = titel.slice(0, indexOf2 +1);
			let MusicanSound2 = titel.slice(indexOf2+2, titel.length);

			if(indexOf2 == -1){
				$(".sound__musican").text(titel);
		
				}else{
					$(".sound__name").text(nameSound2);
					$(".sound__musican").text(MusicanSound2);
				}
		


		});
		  }, 8000)
		stream = new Audio(data.icestats.source.listenurl);
		titel = data.icestats.source.title;

		stream.play();
		streamPlay = true;
		console.log("paly");


	
		$('.bar').css({"animation-name": "wave-lg" });


		let indexOf2 = titel.indexOf("-");
		let nameSound2 = titel.slice(0, indexOf2 +1);
		let MusicanSound2 = titel.slice(indexOf2+2, titel.length);


		if(indexOf2 == -1){
			$(".sound__musican").text(titel);
	
			}else{
				$(".sound__name").text(nameSound2);
				$(".sound__musican").text(MusicanSound2);
			}
	

		if (data.icestats.source == undefined) { 
			$(".sound__name").text("У нас зараз перерва");

		}

		animationBar = setTimeout(() => {
			const bar = document.querySelectorAll(".bar");
			for (let i = 0; i < bar.length; i++) {
			  bar.forEach((item, j) => {
				// Random move
				item.style.animationDuration = `${Math.random() * (0.7 - 0.2) + 0.2}s`;
			  });
			}




		  }, "1200")
	
		  


		
	});
   } else{

	console.log("pause")
	stream.pause();
	streamPlay = false;
	$('.bar').css({"animation-name": "none" });
    clearTimeout(animationBar);


   }


});



$(".navigation__schedule").click(function () { 
	LivePage.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
	
});

$(".navigation__about").click(function () { 
	about__page.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
	
});




$(".navigation__friends").click(function () { 
	friends__page.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
	
});


$(".navigation__contact").click(function () { 
	footer.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
	
});



$(".life__button").click(function () { 
	footer.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
	
});















new Vivus(
	'cofee',
	{
	  type: 'delayed',
	  duration: 200,
	  start: 'inViewport',
	},

  );

  new Vivus(
	'sign',
	{
	  type: 'delayed',
	  duration: 200,
	  start: 'inViewport',
	},

  );



  
  new Vivus(
	'news',
	{
	  type: 'delayed',
	  duration: 200,
	  start: 'inViewport',
	},

  );

  new Vivus(
	'yantar',
	{
	  type: 'delayed',
	  duration: 200,
	  start: 'inViewport',
	},

  );



$(".about__button").click(function () { 
	$(".popup").addClass("popup__active");
	$("body").addClass("body__active");
	new Vivus(
		'popup__arrow',
		{
		  type: 'delayed',
		  duration: 200,
		  start: 'autostart',
		},
	
	  );
	  new Vivus(
		'left__element',
		{
		  type: 'delayed',
		  duration: 200,
		  start: 'autostart',
		},
	
	  );
	  new Vivus(
		'right__element',
		{
		  type: 'delayed',
		  duration: 200,
		  start: 'autostart',
		},
	
	  );
	
});


$(".close").click(function () { 
	$(".popup").removeClass("popup__active");
	$("body").removeClass("body__active");
	
});

$(".popup__privat").click(function () { 
	$(".popup__privatCopy").addClass("popup__privatCopy__active");
	setTimeout(() => {
		$(".popup__privatCopy").removeClass("popup__privatCopy__active");
	  }, "2000")
	  
	  navigator.clipboard.writeText("8841114456006327");
	
});

$(".popup__monobank").click(function () { 
	$(".popup__MononbankCopy").addClass("popup__privatCopy__active");
	setTimeout(() => {
		$(".popup__MononbankCopy").removeClass("popup__privatCopy__active");
	  }, "2000")
	  
	  navigator.clipboard.writeText("4441114456006327");
	
});




const slider = document.querySelector('.slider');
const sl = new Swiper(slider, {
  slidesPerView: 'auto',
  loop: true,
  speed: 5000,
  slidesPerView: '3',
  autoplay: {
    enabled: true,
    delay: 1,
  },
});










$(".center__shedu").click(function () { 
	LivePage.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
	
});

$(".centaer__about").click(function () { 
	about__page.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
	
});




$(".center__friend").click(function () { 
	friends__page.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
	
});


$(".center__team").click(function () { 
	team__page.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
	
});




