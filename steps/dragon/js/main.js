

	// 鎺у埗闊充箰鐨勬挱鏀�
	function musicPlayer (){
		var dragonStage = document.getElementById('dragon-poplayer'),
			switcher = document.getElementById('music'),
			media = switcher.getElementsByTagName('audio')[0],
			chooseMusic = document.getElementById('music-control'),
			wantedDragonDance = document.getElementById('dragon-ready-play'),
			dragonDanceStar = document.getElementById('dragon-playing'),
			firecrackers = document.querySelector('.firecrackers');

		// 鑾峰彇鑸為緳闊充箰閫変腑寮€濮嬫椂闂�
		var musicStartTime = pageData['startTime'];
		// 鑾峰彇鑸為緳闊充箰閫変腑缁撴潫鏃堕棿
		var musicStopTime = pageData['endTime'];
		// 灏嗚缃殑鏃堕棿瀛楃涓�(鎸夊啋鍙�)鎷嗗垎涓轰袱閮ㄥ垎
		var timeStart = musicStartTime.split(':');
		var timeEnd = musicStopTime.split(':');
		// 璁剧疆闄愬埗鐨勫紑濮嬫椂闂�
		var limitStart = new Date();
		limitStart.setHours(timeStart[0]);
		limitStart.setMinutes(timeStart[1]);
		// 璁剧疆闄愬埗鐨勭粨鏉熸椂闂�
		var limitEnd = new Date();
		limitEnd.setHours(timeEnd[0]);
		limitEnd.setMinutes(timeEnd[1]);

		// 鑾峰彇绯荤粺褰撳墠鏃堕棿
		var nowTime = new Date();

		// 濡傛灉绯荤粺鏃堕棿鍦� 闄愬埗鏃堕棿涔嬮棿锛宑heckbox涓嶉€変腑锛屽惁鍒欒嚜鍔ㄩ€変腑
		chooseMusic.checked = nowTime < limitStart || nowTime > limitEnd;
      

		switcher.addEventListener ('click', function (){
			var currentStatus = media.paused ? 'pause' : 'play';
			var wantedStatus = currentStatus === 'pause' && !chooseMusic.checked ? 'play' : 'pause';
			
			media[wantedStatus]();

			// 鎾斁鎸夐挳鐨勫煁鐐�
		
	
			// 濡傛灉wantedDragonDance 娌℃湁is-animationed绫诲悕锛屽氨娣诲姞锛屽弽涔嬩粈涔堜篃涓嶅仛
			if(!wantedDragonDance.classList.contains('is-animationed')){
				wantedDragonDance.classList.add('is-animationed');
			}
          
           // console.log('test1');

		}, false);

		// 鐩戝惉wantedDragonDance鐨剋ebkitAnimationEnd
		// 濡傛灉wantedDragonDance鐨勫姩鐢诲畬鎴愶紝缁檇ragonDanceStar 娣诲姞绫诲悕is-animationed
		wantedDragonDance.addEventListener('webkitAnimationEnd', function(){
			dragonDanceStar.classList.add('is-animationed');
		});

		firecrackers.addEventListener('webkitAnimationEnd', function(e){
            media.pause();
            document.body.removeChild(dragonStage);
			
		}, false);

		chooseMusic.addEventListener('change', function () {
			

			
		})
		
	}
	
   // 绂佹婊戝姩
	function cancleDocumentScroll () {
	    document.addEventListener('touchmove', function (e) {
	      	e.preventDefault();
	      	return false;
	    }, false);
	}
   
   // 鍏抽棴WVPopLayer 鍜� 闊充箰
	function closeAll () {
		var colseBtn = document.getElementById('close'),
			switcher = document.getElementById('music'),
			media = switcher.getElementsByTagName('audio')[0];
    	colseBtn.addEventListener('click', function () {
      		
      		media.pause();
          	
          	var source = appname === 'TM' ? 2 :1 ;
          
    	}, false);
  	}
   
	function init (){
		musicPlayer ();
    cancleDocumentScroll ();
    closeAll ();
	}

	// 寮€濮嬫墽琛屽嚱鏁�
	document.addEventListener('DOMContentLoaded', init, false);