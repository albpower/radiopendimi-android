/* Takvimi Shkup,Tirane,Prishtine  */
function takvimiSK() {
    var data= {
		"Shkup":[
		  {
			"Dita": "1",
			"Data":"18-QER-15",
			"Imsaku": "02.40",
			"Iftari": "20.19"
		  },
		  {
			"Dita": "2",
			"Data":"19-QER-15",
			"Imsaku": "02.40",
			"Iftari": "20.19"
		  },
		  {
			"Dita": "3",
			"Data":"20-QER-15",
			"Imsaku": "02.41",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "4",
			"Data":"21-QER-15",
			"Imsaku": "02.41",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "5",
			"Data":"22-QER-15",
			"Imsaku": "02.41",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "6",
			"Data":"23-QER-15",
			"Imsaku": "02.41",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "7",
			"Data":"24-QER-15",
			"Imsaku": "02.42",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "8",
			"Data":"25-QER-15",
			"Imsaku": "02.42",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "9",
			"Data":"26-QER-15",
			"Imsaku": "02.43",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "10",
			"Data":"27-QER-15",
			"Imsaku": "02.43",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "11",
			"Data":"28-QER-15",
			"Imsaku": "02.44",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "12",
			"Data":"29-QER-15",
			"Imsaku": "02.44",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "13",
			"Data":"30-QER-15",
			"Imsaku": "02.45",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "14",
			"Data":"1-KOR-15",
			"Imsaku": "02.46",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "15",
			"Data":"2-KOR-15",
			"Imsaku": "02.47",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "16",
			"Data":"3-KOR-15",
			"Imsaku": "02.48",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "17",
			"Data":"4-KOR-15",
			"Imsaku": "02.49",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "18",
			"Data":"5-KOR-15",
			"Imsaku": "02.50",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "19",
			"Data":"6-KOR-15",
			"Imsaku": "02.51",
			"Iftari": "20.19"
		  },
		  {
			"Dita": "20",
			"Data":"7-KOR-15",
			"Imsaku": "02.52",
			"Iftari": "20.19"
		  },
		  {
			"Dita": "21",
			"Data":"8-KOR-15",
			"Imsaku": "02.53",
			"Iftari": "20.19"
		  },
		  {
			"Dita": "22",
			"Data":"9-KOR-15",
			"Imsaku": "02.54",
			"Iftari": "20.18"
		  },
		  {
			"Dita": "23",
			"Data":"10-KOR-15",
			"Imsaku": "02.55",
			"Iftari": "20.18"
		  },
		  {
			"Dita": "24",
			"Data":"11-KOR-15",
			"Imsaku": "02.56",
			"Iftari": "20.17"
		  },
		  {
			"Dita": "25",
			"Data":"12-KOR-15",
			"Imsaku": "02.58",
			"Iftari": "20.17"
		  },
		  {
			"Dita": "26",
			"Data":"13-KOR-15",
			"Imsaku": "02.59",
			"Iftari": "20.16"
		  },
		  {
			"Dita": "27",
			"Data":"14-KOR-15",
			"Imsaku": "03.00",
			"Iftari": "20.16"
		  },
		  {
			"Dita": "28",
			"Data":"15-KOR-15",
			"Imsaku": "03.02",
			"Iftari": "20.15"
		  },
		  {
			"Dita": "29",
			"Data":"16-KOR-15",
			"Imsaku": "03.03",
			"Iftari": "20.15"
		  },
		]}
          <!-- Takvimi per Shkup  -->
		var outputSK ='<ul style="padding:0px 15px;color:#fff ;text-shadow: none;font-family: Dosis;font-size:medium; font-weight: normal;" >';
		for (var i in data.Shkup)
		{
			outputSK+='<li>Dita: ' + data.Shkup[i].Dita + ' Ramazan <span style="float:right">Data: '+ data.Shkup[i].Data + '</span><br>';
            outputSK+='Imsaku: ' + data.Shkup[i].Imsaku + '<span style="float:right">Iftari: '+ data.Shkup[i].Iftari + '</span></li>';
		} 
		outputSK+= '</ul>';
		document.getElementById("takvimi-tabela").innerHTML = outputSK;
    
}


function takvimiPR() {
   var data= {
		"Prishtine":[
		  {
			"Dita": "1",
			"Data":"18-QER-15",
			"Imsaku": "02.32",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "2",
			"Data":"19-QER-15",
			"Imsaku": "02.33",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "3",
			"Data":"20-QER-15",
			"Imsaku": "02.33",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "4",
			"Data":"21-QER-15",
			"Imsaku": "02.33",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "5",
			"Data":"22-QER-15",
			"Imsaku": "02.33",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "6",
			"Data":"23-QER-15",
			"Imsaku": "02.33",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "7",
			"Data":"24-QER-15",
			"Imsaku": "02.34",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "8",
			"Data":"25-QER-15",
			"Imsaku": "02.34",
			"Iftari": "20.26"
		  },
		  {
			"Dita": "9",
			"Data":"26-QER-15",
			"Imsaku": "02.35",
			"Iftari": "20.26"
		  },
		  {
			"Dita": "10",
			"Data":"27-QER-15",
			"Imsaku": "02.36",
			"Iftari": "20.26"
		  },
		  {
			"Dita": "11",
			"Data":"28-QER-15",
			"Imsaku": "02.36",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "12",
			"Data":"29-QER-15",
			"Imsaku": "02.36",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "13",
			"Data":"30-QER-15",
			"Imsaku": "02.37",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "14",
			"Data":"1-KOR-15",
			"Imsaku": "02.38",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "15",
			"Data":"2-KOR-15",
			"Imsaku": "02.39",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "16",
			"Data":"3-KOR-15",
			"Imsaku": "02.39",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "17",
			"Data":"4-KOR-15",
			"Imsaku": "02.40",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "18",
			"Data":"5-KOR-15",
			"Imsaku": "02.41",
			"Iftari": "20.23"
		  },
		  {
			"Dita": "19",
			"Data":"6-KOR-15",
			"Imsaku": "02.42",
			"Iftari": "20.23"
		  },
		  {
			"Dita": "20",
			"Data":"7-KOR-15",
			"Imsaku": "02.43",
			"Iftari": "20.23"
		  },
		  {
			"Dita": "21",
			"Data":"8-KOR-15",
			"Imsaku": "02.44",
			"Iftari": "20.22"
		  },
		  {
			"Dita": "22",
			"Data":"9-KOR-15",
			"Imsaku": "02.45",
			"Iftari": "20.22"
		  },
		  {
			"Dita": "23",
			"Data":"10-KOR-15",
			"Imsaku": "02.47",
			"Iftari": "20.22"
		  },
		  {
			"Dita": "24",
			"Data":"11-KOR-15",
			"Imsaku": "02.49",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "25",
			"Data":"12-KOR-15",
			"Imsaku": "02.50",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "26",
			"Data":"13-KOR-15",
			"Imsaku": "02.51",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "27",
			"Data":"14-KOR-15",
			"Imsaku": "02.52",
			"Iftari": "20.19"
		  },
		  {
			"Dita": "28",
			"Data":"15-KOR-15",
			"Imsaku": "02.53",
			"Iftari": "20.18"
		  },
		  {
			"Dita": "29",
			"Data":"16-KOR-15",
			"Imsaku": "02.55",
			"Iftari": "20.18"
		  },
		 
		]}
        
            
          <!-- Takvimi per Prishtine  -->
		var outputPR ='<ul style="padding:0px 15px;color:#fff ;text-shadow: none;font-family: Dosis;font-size:medium; font-weight: normal;" >';
        for (var i in data.Prishtine)
		{
			outputPR+='<li>Dita: ' + data.Prishtine[i].Dita + ' Ramazan <span style="float:right">Data: '+ data.Prishtine[i].Data + '</span><br>';
            outputPR+='Imsaku: ' + data.Prishtine[i].Imsaku + '<span style="float:right">Iftari: '+ data.Prishtine[i].Iftari + '</span></li>';
		} 
		outputPR+= '</ul>';
		document.getElementById("takvimi-tabela").innerHTML = outputPR;
}


function takvimiTR() {
   var data= {
		"Tirane":[
		  {
			"Dita": "1",
			"Data":"18-QER-15",
			"Imsaku": "02.53",
			"Iftari": "20.23"
		  },
		  {
			"Dita": "2",
			"Data":"19-QER-15",
			"Imsaku": "02.53",
			"Iftari": "20.23"
		  },
		  {
			"Dita": "3",
			"Data":"20-QER-15",
			"Imsaku": "02.53",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "4",
			"Data":"21-QER-15",
			"Imsaku": "02.53",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "5",
			"Data":"22-QER-15",
			"Imsaku": "02.53",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "6",
			"Data":"23-QER-15",
			"Imsaku": "02.53",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "7",
			"Data":"24-QER-15",
			"Imsaku": "02.54",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "8",
			"Data":"25-QER-15",
			"Imsaku": "02.54",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "9",
			"Data":"26-QER-15",
			"Imsaku": "02.55",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "10",
			"Data":"27-QER-15",
			"Imsaku": "02.55",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "11",
			"Data":"28-QER-15",
			"Imsaku": "02.56",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "12",
			"Data":"29-QER-15",
			"Imsaku": "02.56",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "13",
			"Data":"30-QER-15",
			"Imsaku": "02.57",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "14",
			"Data":"1-KOR-15",
			"Imsaku": "02.58",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "15",
			"Data":"2-KOR-15",
			"Imsaku": "02.58",
			"Iftari": "20.25"
		  },
		  {
			"Dita": "16",
			"Data":"3-KOR-15",
			"Imsaku": "02.59",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "17",
			"Data":"4-KOR-15",
			"Imsaku": "03.00",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "18",
			"Data":"5-KOR-15",
			"Imsaku": "03.01",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "19",
			"Data":"6-KOR-15",
			"Imsaku": "03.02",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "20",
			"Data":"7-KOR-15",
			"Imsaku": "03.03",
			"Iftari": "20.24"
		  },
		  {
			"Dita": "21",
			"Data":"8-KOR-15",
			"Imsaku": "03.04",
			"Iftari": "20.23"
		  },
		  {
			"Dita": "22",
			"Data":"9-KOR-15",
			"Imsaku": "03.05",
			"Iftari": "20.23"
		  },
		  {
			"Dita": "23",
			"Data":"10-KOR-15",
			"Imsaku": "03.06",
			"Iftari": "20.22"
		  },
		  {
			"Dita": "24",
			"Data":"11-KOR-15",
			"Imsaku": "03.07",
			"Iftari": "20.22"
		  },
		  {
			"Dita": "25",
			"Data":"12-KOR-15",
			"Imsaku": "03.09",
			"Iftari": "20.22"
		  },
		  {
			"Dita": "26",
			"Data":"13-KOR-15",
			"Imsaku": "03.10",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "27",
			"Data":"14-KOR-15",
			"Imsaku": "03.11",
			"Iftari": "20.21"
		  },
		  {
			"Dita": "28",
			"Data":"15-KOR-15",
			"Imsaku": "03.12",
			"Iftari": "20.20"
		  },
		  {
			"Dita": "29",
			"Data":"16-KOR-15",
			"Imsaku": "03.14",
			"Iftari": "20.19"
		  },
		 
		]}
        
            
          <!-- Takvimi per Tirane  -->
		var outputTR ='<ul style="padding:0px 15px;color:#fff ;text-shadow: none;font-family: Dosis;font-size:medium; font-weight: normal;" >';
        for (var i in data.Tirane)
		{
			outputTR+='<li>Dita: ' + data.Tirane[i].Dita + ' Ramazan <span style="float:right">Data: '+ data.Tirane[i].Data + '</span><br>';
            outputTR+='Imsaku: ' + data.Tirane[i].Imsaku + '<span style="float:right">Iftari: '+ data.Tirane[i].Iftari + '</span></li>';
		} 
		outputTR+= '</ul>';
		document.getElementById("takvimi-tabela").innerHTML = outputTR;
}




/* =============================================================================================================================================== */
//DergoMesazh
function onSuccess(data, status)
        {
            data = $.trim(data);
            $("#notification").text(data);
        }
  
        function onError(data, status)
        {
            // handle an error
        }        
  
        $(document).ready(function() {
            $("#submit").click(function(){
  
                var formData = $("#callAjaxForm").serialize();
  
                $.ajax({
                    type: "POST",
                    url: "http://radio-pendimi.com/mobile/v2/send.php",
                    crossDomain:true,
                    cache: false,
                    data: formData,
                    success: onSuccess,
                    error: onError
                });
				return false;
            });
			$("#reset").click(function() {
				$('#callAjaxForm').trigger("reset");
				$('#notification').text("");
			});
        }); //end



/* =============================================================================================================================================== */
//Transmetime direkte
function broadcast(data){
	if (data.items.length != 0){
			var id,title;
		id = data.items[0].snippet.resourceId.videoId;
		title = data.items[0].snippet.title;
		document.getElementById("yt-status").innerHTML = title;
		//var output = '<div class="statusi-div"><span style="background:#6d4253; padding:8px; border-radius:8px;">Jeni duke shikuar: ' + title + '</span></div><br>';
		var output ='';
		output += '<iframe src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen class="yt-playeri"></iframe>';
		//output += '<p class="player-description">' + unescape(description) + '</p>';
	   // console.log(data);
		$('#transmetime-list').html(output);
	} else document.getElementById("yt-status").innerHTML = "Për momentin nuk ka transmetim direkt";
}
/*
function getYoutube(){
	$.get("https://www.googleapis.com/youtube/v3/playlistItems",{
		part: 'snippet',
		maxResults: 5,
		playlistId: 'PLBm6IaQX_2oLhbcD8AvsKyZdfD2lSvpqb',
		key: 'AIzaSyDhDZjburmzpaoH39Uj4dnU6X_GRLbCVW0'
	}, function(data){
		console.log(data);
	}); //get function end
}*/


/* =============================================================================================================================================== */
//Default transition
function tranzicionet() { 
    $.mobile.defaultPageTransition = "none";
	//getYoutube();
}