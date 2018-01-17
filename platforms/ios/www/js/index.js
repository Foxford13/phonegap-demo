var errorHandler = function (fileName, e) {
	var msg = '';

	switch (e.code) {
		case FileError.QUOTA_EXCEEDED_ERR:
		msg = 'Storage quota exceeded';
		break;
		case FileError.NOT_FOUND_ERR:
		msg = 'File not found';
		break;
		case FileError.SECURITY_ERR:
		msg = 'Security error';
		break;
		case FileError.INVALID_MODIFICATION_ERR:
		msg = 'Invalid modification';
		break;
		case FileError.INVALID_STATE_ERR:
		msg = 'Invalid state';
		break;
		default:
		msg = 'Unknown error';
		break;
	};

	console.log('Error (' + fileName + '): ' + msg + e);
}

var app = {

	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},


	onDeviceReady: function() {
		console.log('Received Device Ready Event');



		window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

			console.log('file system open: ' + fs.name);
			console.log(fs.root);
			getSampleFile(fs.root);

		});
				let i = 0;
		function getSampleFile(dirEntry) {


	$('#imageFile').append('getSample');

			$('.moreComic').on('click', function () {


				$('.slider1').empty();
$('#imageFile').append('onClick');

$.ajax({
					type       : "GET",
					url        : "https://jsonplaceholder.typicode.com/photos",
					dataType   : 'json',
					success    : function(response) {
						var imgUrl = response[i].url

						var xhr = new XMLHttpRequest();
						xhr.open('GET', '' + imgUrl + '', true);
						console.log('here', xhr.response[0]);
						xhr.responseType = 'blob';
					console.log(xhr);
						xhr.onload = function() {
							if (this.status == 200) {

								var blob = new Blob([this.response], { type: 'image/png' });

								saveFile(dirEntry, blob, 'downloadedImage' + i + '.png');
							}
						};
						xhr.send();






				if (i >= 0) i = i + 1;



					},
					error      : function() {
						$('.test-div').append(`well, that doesnt work`);
						$('.test-div-err').append("error");
					}
				});






			});



		}

		function saveFile(dirEntry, fileData, fileName) {
	$('#imageFile').append('saveFile');
			dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {

				writeFile(fileEntry, fileData);

			});
		}

		function writeFile(fileEntry, dataObj, isAppend) {

			// Create a FileWriter object for our FileEntry (log.txt).
			fileEntry.createWriter(function (fileWriter) {

				fileWriter.onwriteend = function() {
						$('#imageFile').append('writeFile');
					console.log("Successful file write...");
					if (dataObj.type == "image/png") {
						readBinaryFile(fileEntry);
					}
					else {
						readFile(fileEntry);
					}
				};

				fileWriter.onerror = function(e) {
					console.log("Failed file write: " + e.toString());
				};

				fileWriter.write(dataObj);
			});
		}

		function readBinaryFile(fileEntry) {

			fileEntry.file(function (file) {
				var reader = new FileReader();

				reader.onloadend = function() {

					console.log("Successful file write: " + this.result);

						displayImage(fileEntry.fullPath, this.result);

	$('#imageFile').append('readBinary');
					var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
					// displayImage(blob);
				};

				reader.readAsArrayBuffer(file);

			});
		}

		//
		// function displayImage(blob) {
		// $('.small-change').append('ayayayays');
		// console.log('here' + blob);
		//     // Displays image if result is a valid DOM string for an image.
		//   $('.small-change').append(blob[0]);
		//
		// }
		function displayImage(fullPath, result) {



			console.log('result' + result);

			console.log('fullPath' + fullPath);



      //
			$('.slider1').html('<img src="cdvfile:///temporary/downloadedImage' + i + '.png" >');
			//
			$('.slider1').append('displayImage');

			// 	var elem = document.getElementById('imageFile');
			// elem.src = blob.toURL();
			// ]

			// var arrayBufferView = new Uint8Array( blob );
			// var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
			// var urlCreator = window.URL || window.webkitURL;
			// var imageUrl = urlCreator.createObjectURL( blob );
			// var img = document.getElementById('imageFile');
			// img.src = imageUrl;
			// console.log(imageUrl);
			// console.log('imageUrl' + imageUrl);
			// Displays image if result is a valid DOM string for an image.
			// var elem = document.getElementById('imageFile');
			// // Note: Use window.URL.revokeObjectURL when finished with image.
			// elem.src = window.URL.createObjectURL(blob);
		}

		// function displayImage(blob) {
		//
		//     // Displays image if result is a valid DOM string for an image.
		//     var elem = document.getElementById('imageFile');
		//     // Note: Use window.URL.revokeObjectURL when finished with image.
		//     elem.src = window.URL.createObjectURL(blob);
		// }








































		//
		// function writeToFile(fileName, data) {
		// 	console.log('1');
		// 	 // data = JSON.stringify(data, null, '\t');
		// 	 // console.log('here1' + window.resolveLocalFileSystemURL);
		// 	 // console.log('here2' + cordova.file.dataDirectory);
		// 	 window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (directoryEntry) {
		// 		 console.log('2');
		// 			 directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
		// 				 console.log('3');
		// 					 fileEntry.createWriter(function (fileWriter) {
		// 							 fileWriter.onwriteend = function (e) {
		// 								 console.log('4');
		// 									 // for real-world usage, you might consider passing a success callback
		// 									 console.log('Write of file "' + fileName + '"" completed.');
		// 							 };
		//
		// 							 fileWriter.onerror = function (e) {
		// 									 // you could hook this up with our global error handler, or pass in an error callback
		// 									 console.log('Write failed: ' + e.toString());
		// 							 };
		//
		// 							 var blob = new Blob();
		// 							 fileWriter.write(blob);
		// 					 }, errorHandler.bind(null, fileName));
		// 			 }, errorHandler.bind(null, fileName));
		// 	 }, errorHandler.bind(null, fileName));
		// }
		//
		//

		// writeToFile('example.json', 'bar' );





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


			// let i = 0;
			// $('.moreComic').on('click', function () {
      //
      //
			// 	$('.slider1').empty();

				// $.ajax({
				// 	type       : "GET",
				// 	url        : "https://jsonplaceholder.typicode.com/photos",
				// 	dataType   : 'json',
				// 	success    : function(response) {
				// 		$('.slider1').html('<img style="width: 200px;height: 200px;" src="' + response[i].url + '">');
				//
				// 		 writeToFile('Sebastian' + i, response[i].url);
				//
				//
				//
				//
				// 		if (i >= 0) i = i + 1;
				//
				//
				//
				// 	},
				// 	error      : function() {
				// 		$('.test-div').append(`well, that doesnt work`);
				// 		$('.test-div-err').append("error");
				// 	}
				// });


			// });


			$('.lessComic').on('click', function () {


				$('.slider1').empty();
				//
				// $.ajax({
				// 	type       : "GET",
				// 	url        : "https://jsonplaceholder.typicode.com/photos",
				// 	dataType   : 'json',
				// 	success    : function(response) {
				// 		$('.slider1').html('<img style="width: 200px;height: 200px;" src="' + response[i].url + '">');
				//
				//
				// 		if (i > 0) i = i - 1;
				//
				//
				// 	},
				// 	error      : function() {
				// 		$('.test-div').append(`well, that doesnt work`);
				// 		$('.test-div-err').append("error");
				// 	}
				// });


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



		// app.setupPush();
	},



};
