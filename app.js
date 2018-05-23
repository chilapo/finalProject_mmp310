
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const videoIds = {
  Good: {
    1980: {
      Spring: "DODLEX4zzLQ",//"rY0WxgSXdEE", 
      Winter: "iyLdoQGBchQ", 
      Summer: "crbFmpezO4A", 
      Fall: "tLTGs4fqxBk", 
    },
    1990:{
       Spring: "HEXWRTEbj1I",
      Winter: "NmbOQcd1yR8",
      Summer: "fBRJa0OVl8s",
      Fall: "m5Va3BwUZj0",   
    },
    2000:{
       Spring: "q8HcWBfspoY",
      Winter: "7PDUO3l8xiM",
      Summer: "",
      Fall: "",   
    },
    2010:{
       Spring: "",
      Winter: "",
      Summer: "",
      Fall: "",   
    },
    
    2018:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },  

  /*HAppy*/

  Happy: {
     1980: {
      Spring: "DODLEX4zzLQ", 
      Winter: "YIpNFB2rFEY", 
      Summer: "iyLdoQGBchQ", 
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
    2010:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2015:{
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
  },


  /*Sad*/

  Sad: {
     1980: {
      Spring: "DODLEX4zzLQ", 
      Winter: "YIpNFB2rFEY", 
      Summer: "iyLdoQGBchQ", 
      Fall: "DODLEX4zzLQ", 
    },
    1990:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2000:{
       Spring: "TlDInVqv8cs",
      Winter: "yGpGsG8bvWk",
      Summer: "",
      Fall: "DODLEX4zzLQ",   
    },
    2010:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2015:{
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
  },


  /*Loving*/
  

  Loving:{
     1980: {
      Spring: "DODLEX4zzLQ", 
      Winter: "YIpNFB2rFEY", 
      Summer: "iyLdoQGBchQ", 
      Fall: "DODLEX4zzLQ", 
    },
    1990:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2000:{
       Spring: "nX1VeFBo9AQ",
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
    2015:{
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
  },

  /*funny*/
  
  Funny:{
     1980: {
      Spring: "DODLEX4zzLQ", //Billy Idol - Eyes Without A Face
      Winter: "YIpNFB2rFEY", //Michael Jackson - Beat It
      Summer: "iyLdoQGBchQ", //Kaoma - Lambada
      Fall: "DODLEX4zzLQ", //Michael Jackson - Thriller   
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
    2010:{
       Spring: "wEWF2xh5E8s",
      Winter: "y6Sxv-sUYtM",
      Summer: "wEWF2xh5E8s",
      Fall: "DODLEX4zzLQ",   
    },
    2015:{
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
  }
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
                    suggestedQuality:'large'
                    });
          
          
        });
      }
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }

     youtube.onclick = function(){
      if (videoIds[mood][year][station].value) {
          const video = videoIds[Math.floor(Math.random() * videoIds.length)];
                player.loadVideoById = video;
            }
};
     


/*youtube.onclick = function() {*/
  /*const answer = document.getElementById("mood", "song", "movie").value;
  */
/*};*/
//videoIds[mood][year][station];

/*if (youtube === videoIds[mood], [year], [station]) {
      document.getElementById('player').style.display = "block";
   }*/

