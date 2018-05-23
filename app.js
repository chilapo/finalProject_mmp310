
//https://www.googleapis.com/auth/youtube
//https://console.cloud.google.com/home/activity?project=my-project-youtube-203622

/*$(document).ready(function () {

    var $video = $('#video');
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key="
    var key = "AIzaSyD_SbAZcuNTOgJq6mQ9WkPFHvjxUltJhC0";
    $.getJSON(url + key, function(data){
      console.log(data);
    })
});*/

/*<iframe id="naruto" width="560" height="315" src="https://www.youtube.com/embed/wEWF2xh5E8s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <iframe id="action" width="560" height="315" src="https://www.youtube.com/embed/aijFRVLD_j8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <iframe id="happysong" width="560" height="315" src="https://www.youtube.com/embed/y6Sxv-sUYtM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <iframe id="cat" width="560" height="315" src="https://www.youtube.com/embed/DODLEX4zzLQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>*/






var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const videoIds = {
  good: {
    1980: {
      Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",    
    },
    1990:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2000:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2005:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2007:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2010:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2014:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2018:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },   
  
  /*happy: {},
  sad: {}*/
}};

       var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          //videoId: videoIds,
          events: {
            'onReady': onPlayerReady,
          }
        });
      }
const youtube = document.getElementById("submit");
      function onPlayerReady(event) {
        document.getElementById('submit').addEventListener('click', function() {
          player.loadVideoById({videoId: videoIds,
                     suggestedQuality:'large'});
          player.playVideo();1
        });
        
  if (youtube === videoIds[mood], [year], [station]) {
      document.getElementById('player').style.display = "block";
   }
      }
     



/*youtube.onclick = function() {*/
  /*const answer = document.getElementById("mood", "song", "movie").value;
  */
/*  const mood = document.getElementById("mood").value;
  const year = document.getElementById('year').value;
  const station = document.getElementById('station').value;
  console.log();
  
 */

/*};*/
//videoIds[mood][year][station];



