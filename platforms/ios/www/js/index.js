
var app = {

	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		console.log('Received Device Ready Event');
		console.log('calling setup push');
		// app.setupPush();
	},
	// setupPush: function() {
	//     console.log('calling push init');
	//     var push = PushNotification.init({
	//         "android": {
	//             "senderID": "XXXXXXXX"
	//         },
	//         "browser": {},
	//         "ios": {
	//             "sound": true,
	//             "vibration": true,
	//             "badge": true
	//         },
	//         "windows": {}
	//     });
	//     console.log('after init');
	//
	//     push.on('registration', function(data) {
	// 			console.log('1');
	//         console.log('registration event: ' + data.registrationId);
	//
	//         var oldRegId = localStorage.getItem('registrationId');
	//         if (oldRegId !== data.registrationId) {
	//
	//             localStorage.setItem('registrationId', data.registrationId);
	//
	//         }
	//
	//         var parentElement = document.getElementById('registration');
	//         var listeningElement = parentElement.querySelector('.waiting');
	//         var receivedElement = parentElement.querySelector('.received');
	//
	//         listeningElement.setAttribute('style', 'display:none;');
	//         receivedElement.setAttribute('style', 'display:block;');
	//     });
	//
	//     push.on('error', function(e) {
	// 				console.log('123');
	//         console.log("push error = " + e.message);
	//     });
	//
	//     push.on('notification', function(data) {
	//         console.log('notification event');
	//         navigator.notification.alert(
	//             data.message,
	//             null,
	//             data.title,
	//             'Ok'
	//         );
	//    });
	// }
};










$.support.cors=true;
$(document).ready(function() {

	$(".slider1").slick({

		dots: true,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true
				}
			},
		]
	});


	let i = 0;
	$('.moreComic').on('click', function () {


		$('.slider1').empty();

		$.ajax({
			type       : "GET",
			url        : "https://jsonplaceholder.typicode.com/photos",
			dataType   : 'json',
			success    : function(response) {
				$('.slider1').html('<img style="width: 200px;height: 200px;" src="' + response[i].url + '">');
				console.log(response);

					if (i >= 0) i = i + 1;
				console.log(i);


			},
			error      : function() {
				$('.test-div').append(`well, that doesnt work`);
				$('.test-div-err').append("error");
			}
		});


	});


	$('.lessComic').on('click', function () {


		$('.slider1').empty();

		$.ajax({
			type       : "GET",
			url        : "https://jsonplaceholder.typicode.com/photos",
			dataType   : 'json',
			success    : function(response) {
				$('.slider1').html('<img style="width: 200px;height: 200px;" src="' + response[i].url + '">');
				console.log(response);

				if (i > 0) i = i - 1000;
				console.log(i);

			},
			error      : function() {
				$('.test-div').append(`well, that doesnt work`);
				$('.test-div-err').append("error");
			}
		});


	});

	console.log(new Date());


	// 	 function getBase64Image(img) {
	//     var canvas = document.createElement("canvas");
	//     canvas.width = img.width;
	//     canvas.height = img.height;
	//
	//     var ctx = canvas.getContext("2d");
	//     ctx.drawImage(img, 0, 0);
	//
	//     var dataURL = canvas.toDataURL("image/png");
	//
	//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	// }


	var imageUrl = 'https://i.imgur.com/co1uroL.jpg';

	// var imageData = getBase64Image(imageUrl);
	window.localStorage.setItem('imageOne', imageUrl);
	// window.localStorage.setItem('imageOne', imageData);



	// $('.test-div-err').html('<img src="' +window.localStorage.getItem('imageOne') + '" >');

	// $('.test-div-err').html(window.localStorage.getItem('imageOne'));

});
