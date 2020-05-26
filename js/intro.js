$(window).resize(vidRatio);
vidRatio();

function vidRatio() {
	var boxHeight = $('.intro').height(),  // 부모 박스
		boxWidth = $('.intro').width(),
		boxRatio = boxHeight/boxWidth,
		stanRatio = 1080/1920;  // 영상height/width
	if(boxRatio >= stanRatio){
		$('.intro .intro_vid').css({"width": + boxHeight/stanRatio , "height": + boxHeight});
		$('.intro video').css({"width": + boxHeight/stanRatio , "height": + boxHeight});
	} else if(boxRatio < stanRatio) {
		$('.intro .intro_vid').css({"width": + boxWidth , "height": boxWidth*stanRatio});
		$('.intro video').css({"width": + boxWidth , "height": boxWidth*stanRatio})
	}
}

function canIUseVideo() {
	var testVideo = document.createElement('video');
	if(typeof testVideo.canPlayType === 'function') {
		if(testVideo.canPlayType('video/webm; codecs="vp8.0, vorbis"') === '' && testVideo.canPlayType('video/mp4; codecs="avc1.4D401E, mp4a.40.2"') === '') return false;
	} else {
		return false;
	}
	return true;
}

if(canIUseVideo() === true) {

	var video = $('.intro_vid > video')[0];
	video.addEventListener('canplay', function() {
		video.play();
		if(video.paused === true) {
			setTimeout(function() {
				location.href = 'main.html' + location.search;
			}, 3000);
		} else {
			video.addEventListener('ended', function() {
				setTimeout(function() {
					location.href = 'main.html' + location.search;
				}, 3000);
			});
		}
	}, false);
} else {
	location.href = 'main.html' + location.search;
}