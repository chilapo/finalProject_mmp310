
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const videoIds = {
  Good: {
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

const mood = document.getElementById("mood").value;
const year = document.getElementById('year').value;
const station = document.getElementById('station').value;
const youtube = document.getElementById("submit");

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


      function onPlayerReady(event) {
        document.getElementById('submit').addEventListener('click', function() {
          player.loadVideoById({
                    videoId:  videoIds[mood][year][station],
                    startSeconds:1,
                    suggestedQuality:'large'});
          
        });
      }
     



/*youtube.onclick = function() {*/
  /*const answer = document.getElementById("mood", "song", "movie").value;
  */
/*};*/
//videoIds[mood][year][station];

/*if (youtube === videoIds[mood], [year], [station]) {
      document.getElementById('player').style.display = "block";
   }*/

