var Btn  		=   document.querySelector(".button");
var URLinput    =   document.querySelector(".URL-input");
//var select    =   document.querySelector('.opt');
let serverURL 	= 	'http://localhost:4000' || 'https://calm-reef-26651.herokuapp.com';

// convertBtn.addEventListener("click",function(){
//     console.log('URL : ${URLinput.value}');
//     sendURL(URLinput.value);
// })

// function sendURL(URL){
//     window.location.href='https://localhost:4000/download?URL=${URL}'
//     // fetch('http://localhost:8080/download?URL=${URL}',{
//     //     method:'GET'
//     // }).then(res=>res.json())
//     //   .then(json=>console.log(json));
// }


Btn.addEventListener('click', () => {
	if (!URLinput.value) {
		alert('Enter YouTube URL');
	} else {
		// if (select.value == 'mp3') {
		// 	downloadMp3(URLinput.value);
		// } else if (select.value == 'mp4') {
			downloadMp4(URLinput.value);
		//}
	}
});


// async function downloadMp3(query) {
// 	const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
// 	if(res.status == 200) {
// 		var a = document.createElement('a');
//   		a.href = `${serverURL}/downloadmp3?url=${query}`;
//   		a.setAttribute('download', '');
// 		a.click();
// 	} else if(res.status == 400) {
// 		alert("Invalid url");
// 	}
// }

async function downloadMp4(url_string) {
	const res = await fetch(`${serverURL}/downloadmp4?url=${url_string}`);
	console.log(res);
	if(res.status == 200) {
		// var a = document.createElement('a');
  		// a.href = `${serverURL}/downloadmp4?url=${url_string}`;
  		// a.setAttribute('download', '');
		// a.click();
		window.location.href=(`${serverURL}/downloadmp4?url=${url_string}`);
	} else if(res.status == 400) {
		alert('Invalid url');
	}
}