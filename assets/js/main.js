// Main JavaScript and jQuery file
   
var shuffled = false;
 
 $('#shuffle_toggle').on("click" , function (){
   
   if(shuffled == false){
     shuffled = true;
      $(".shuffle-icon").addClass('active');
   }else{
      shuffled = false;
    //  $(this).html('shuffling disabled');
      $(".shuffle-icon").removeClass('active');
   }
   
   }); 
   
    
   var looping = false;
   
    $('#looping').on("click", function(){
      
      if(looping == false){
        looping = true;
       
        $(this).html('<i class="fa fa-repeat loop" aria-hidden="true"></i>');
         $('.loop').addClass('active');
        
        document.getElementById("playmusic").loop = true;
        
      }else{
        looping = false;
       //  $(this).css('color' , 'blue');
       $('.loop').removeClass('active');
      
        document.getElementById("playmusic").loop = false;
      }
    });
  
    
    
//javascript  

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? "" : "") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? "" : "") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
    
    if(sDisplay == 0){
      sDisplay = "0";
    }
   
   if(mDisplay < 10 && mDisplay != 0){
     mDisplay = "0"+mDisplay+ ":";
   }
     if(hDisplay < 10  && hDisplay !=0){
        hDisplay = "0"+ hDisplay;
    }
  
    if(sDisplay < 10){
      sDisplay = "0"+sDisplay;
    }
 
    if(hDisplay !=0){
      hDisplay = hDisplay + ":";
    }
 if(mDisplay==0){
   mDisplay = "00:";
 }
    
    return hDisplay  + mDisplay +  sDisplay; 
}  
    
//jQuery

  $("#mute").on("click", function (){
    if( $("#playmusic").prop('muted') ) {
          $("#playmusic").prop('muted', false);
          
          $(this).html('<i class="material-icons">volume_up</i>');
    } else {
      $("#playmusic").prop('muted', true);
     $(this).html('<i class="material-icons">volume_off</i>');
    }
  });
  
 var vol;
$('#up').on('click' , function (){
 // alert('v up');
  vol = playMusic.volume;
    
  if(vol ==1){
      $('#volume').val(100);
       audio_volume.style.backgroundImage = "linear-gradient(90deg, #0581FD 100% , #888 0)";
 // alert(' Maximum Volume');
  }else{
    vol = vol + 0.10;
    if( vol > 1){
    $('#playmusic').prop( "volume" , 1);
     vol = playMusic.volume;
     //  alert(vol);
      audio_volume.style.backgroundImage = "linear-gradient(90deg, #0581FD 100% , #888 0)";
       $('#volume').val(100);
    }else{
        $('#playmusic').prop( "volume" , vol);
       vol = playMusic.volume;
       
     //Action to be done here 
     
     $('#volume').val(vol*100);
     
      var volly = vol;
    //alert(volly);
    volly = volly*100;
  
    audio_volume.style.backgroundImage = "linear-gradient(90deg, #0581FD "+volly+"% , #888 0)";
    
    //   alert(vol);
    }
  }
  
});
$('#down').on('click' , function (){
 
  vol = playMusic.volume;
    
  if(vol <= 0){
  //alert(' Minimum Volume');
  vol= 0;
  }else{
    vol = eval(vol - 0.10);
    if(vol < 0){
      vol =0;
    $('#playmusic').prop( "volume" , 0);
     vol = playMusic.volume;
     audio_volume.style.backgroundImage = "linear-gradient(90deg, #0581FD 0% , #888 0)";
    
        $('#volume').val(0);
     //  alert('Minimum Volume');
    }else{
        $('#playmusic').prop( "volume" , vol);
       vol = playMusic.volume;
    //Action to be done here 
    
      var volly = vol;
    //alert(volly);
    volly = volly*100;
  
    audio_volume.style.backgroundImage = "linear-gradient(90deg, #0581FD "+volly+"% , #888 0)";
    
        $('#volume').val(vol*100);
      
   //  alert(vol);
    }
  }
  
});

  
   
  $('#volume').change(function(){
    
  //var v = audio.volume ;
 //var  vol = v /100;
   var vol = $('#volume').val();
   
   vol = vol/100;
 $('#playmusic').prop("volume" , vol);
 
  });
  
  var song = document.getElementById('playmusic')
 
   $("#seek").bind("change", function() {
      song.currentTime = this.value;   
 });


song.addEventListener('seek',function (){
 $('#seek').val(song.currentTime);
    });
   
  $('#playmusic').bind('canplay', function() {
        var dura = this.duration ; //Get song Duration
      $("#seek").attr("max", dura);
      
     $('#min').html(secondsToHms(dura));
 });



//javascript

function update(){

  document.getElementById("sec").innerHTML=
               secondsToHms( document.getElementById("playmusic").currentTime);


 var jak = document.getElementById("playmusic").currentTime;
     $('#seek').val(jak)
     
     
     var duration_time =  document.getElementById('playmusic').duration;
    var percentage = (slider.value/ duration_time)*100;
   // alert(percentage);
    //alert(slider.value);
    slider.style.backgroundImage = "linear-gradient(90deg, black "+ percentage+"% , #888 0)";
    

}


function forwardVideo(){
document.getElementById("video").currentTime++;
}

function stopVideo(){
document.getElementById("playmusic").pause();
document.getElementById("playmusic").currentTime=0;

$('#playMusicBtn').html('<i class="material-icons play-pause">play_arrow</i>');
$('#song_poster').css('animation-play-state' , 'paused');
$('#seek').val(0);
}


var slider = document.getElementById("seek");

slider.oninput = function() {
    document.getElementById('playmusic').currentTime = this.value;
    var duration_time =  document.getElementById('playmusic').duration;
    var percentage = (slider.value/ duration_time)*100;
   // alert(percentage);
    //alert(slider.value);
    slider.style.backgroundImage = "linear-gradient(90deg, black "+ percentage+"% , #888 0)";
    
   // $('#mute').html(percentage);
    
}



var audio_volume = document.getElementById("volume");
var testing = document.getElementById("sec");
audio_volume.oninput = function() {
  
   document.getElementById('playmusic').volume = this.value/100;
   
   var volly = document.getElementById('playmusic').volume = this.value/100;
 
    volly = volly*100;
  
    audio_volume.style.backgroundImage = "linear-gradient(90deg, #0581FD "+volly+"% , #888 0)";
    
       
}


var playMusic = document.getElementById('playmusic');

function togglePlay() {
  var myAudio = document.getElementById("playmusic");
 
   var id = $('#get_id').html();
  
  if(playMusic.paused == false){
  
       $('#playMusicBtn').html('<i class="material-icons play-pause">play_arrow</i>');
       $('#song_poster').css('animation-play-state' , 'paused');
       
        $('#select_song'+id).html('<i class="material-icons  start">play_arrow</i>' );
        
  }else{
        $('#playMusicBtn').html('<i class="material-icons play-pause">pause</i>');
     
       $('#song_poster').addClass('rotateframe');
       $('#song_poster').css('animation-play-state' , 'running');
        $('#select_song'+id).html('<i class="material-icons  start">pause</i>' );
  }

  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

var next_song = document.getElementById('next');
 var previous_song = document.getElementById('previous');







var songs = songs_playlist;

 
 var songname = document.getElementById('song_name') ;
 var songsrc = document.getElementById('playmusic');
 var songposter = document.getElementById("song_poster");
 var songartist = document.getElementById('song_artist');
 
 
var subs = "";
 
 var id = 0;
function loadSongs(id){
     
    $('#get_id').html(id);
 
  var loadsong = songs[id];
  
   songname.innerText =  loadsong.name;
   songsrc.setAttribute( "src" , loadsong.src);
   songposter.setAttribute("src" ,loadsong.poster);
   songartist.innerText =  loadsong.artist;
   
   
     $('.tab').removeClass('playing');
     $('#newsong_'+id).addClass('playing');
     
       if(playMusic.paused == true){
     $('.select_song'+id).html('<i class="material-icons  start">play_arrow</i>' );
     }else{
     $('#select_song'+id).html('<i class="material-icons  start">pause</i>' );
     }
   
    
   //alert(loadsong.subtitles);
   
    document.getElementById('body').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7) , rgba(65,65,65,0.6)),  url('"+loadsong.poster+"')";
    
   subs = loadsong.subtitles;
    
 // alert("i was clicked")
  $('#subtitles').attr('src', subs);

//playmusic.findTracks();
//playmusic.loadTrack(0);
 document.getElementById('playmusic').textTracks[0].addEventListener('cuechange', function() {
  //alert('hmm');
    document.getElementById('caps').innerHTML = (this.activeCues[0].text);
});

}




next_song.onclick = function(){ 
  $('.select_song').html('<i class="material-icons  start" >play_arrow</i>');
    $('#caps').html("");
   $('#song_poster').removeClass('rotateframe');
   $('#song_poster').addClass('rotateframe');
   
   var shuffling = Math.round(Math.random() * songs.length);
  
 if(shuffled == true){
    loadSongs(shuffling);
  playMusicBtn.click();
   
 }
 else{
   
  if(id >= (songs.length-1)){
    id = 0;
  }else{
    id = id+1;
  }
// alert( id);

  /*for (var i=0; i<songs.length; i++){
    console.log(i + ". " + songs[i]);
}
*/
 
  if((songs.length) == id){
  loadSongs(0);
  playMusicBtn.click();
  }else{
   
    loadSongs(id);
      playMusicBtn.click();
    
  }
}
  
};
previous_song.onclick = function(){ 
   $('.select_song').html('<i class="material-icons  start" >play_arrow</i>');
 $('#caps').html("");
 var shuffling = Math.round(Math.random() * songs.length);
 
if(shuffled == true){
   loadSongs(shuffling);
  playMusicBtn.click();
  
}else{
  if(id > 0){
  id = id-1;
  loadSongs(id);
   playMusicBtn.click();
  }
  
  if(id == 0){
    id= songs.length;
    loadSongs(id);
   playMusicBtn.click();
  }
 // alert(id);
 /* if(id){
   
    loadSongs(0);
    playMusicBtn.click();
  }*/
}

};

playMusic.onended = function (){
     next_song.click();
   
}


  $(document).ready(function(){
     loadSongs(0);
     
     
  });
     

$('#backward').on("click" , function(){
   $('#caps').html("");
     var ctime =  playMusic.currentTime ;
      playMusic.currentTime = (ctime-10);
});
$('#forward').on("click" , function(){
  $('#caps').html("");
     var ctime =  playMusic.currentTime ;
      playMusic.currentTime = (ctime+10);
});




 var songsTotal = songs.length;
      var songnumber = 0;
         songsTotal = songsTotal -1;
   while(songnumber <= songsTotal){
    
      if(songnumber <= songsTotal){
        var loadsong = "";
    loadsong= songs[songnumber];
     
    
    $('#get_songs').append('<div class="tab" id="newsong_'+songnumber+'"><div id="song_image"><img src="'+loadsong.poster+'" alt=""  class="thumbnail"/></div>                   <div class="song_info"  onclick="play_selectedsong('+songnumber+')">           <div id="songname"> '+ loadsong.name+'        </div><div id="singer">'+loadsong.artist+'</div> </div>   <div class="select_song" id="select_song'+songnumber+'" onclick="playorpause('+songnumber+')">  <i class="material-icons  start" >play_arrow</i></div></div>');
    
      songnumber = songnumber +1;
      }
   }

function playorpause(id){
  var getting = $('#get_id').html();
   if(getting == id){
       
   }else{
     loadSongs(id);
   }
  togglePlay();
   var  Ismusic = document.getElementById('playmusic');
  
   $('.select_song').html('<i class="material-icons  start" >play_arrow</i>');
   
    if(Ismusic.paused == true){
      
       $('#select_song'+id).html('<i class="material-icons  start" >play_arrow</i>');
       
         
    }else{
       
       $('#select_song'+id).html('<i class="material-icons  start">pause</i>' );
    }
    
    
      $('.tab').removeClass('playing');
     $('#newsong_'+id).addClass('playing');
 //  alert(id);
    
}

function play_selectedsong(id){
  $('#caps').html("");
    loadSongs(id);
    
     $('.tab').removeClass('playing');
     $('#newsong_'+id).addClass('playing');
 //  alert(id);
 
    playMusicBtn.click();
   
  /* $('#select_song'+id).html('<i class="material-icons  start" >play_arrow</i>');*/
  var  Ismusic = document.getElementById('playmusic');
  
   $('.select_song').html('<i class="material-icons  start" >play_arrow</i>');
   
      
    if(Ismusic.paused == true){
       $('#select_song'+id).html('<i class="material-icons  start" >play_arrow</i>');
       
       
    }else{
       $('#select_song'+id).html('<i class="material-icons  start">pause</i>' );
    }
   
}


   
     
