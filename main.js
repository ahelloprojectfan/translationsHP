const formElement = document.querySelector('form');
const filterLinksElement = document.querySelector('.filter-links');
const loadingElement = document.querySelector('#loading');
const videosElement = document.querySelector('#videos');
const filterInput = document.querySelector('#filter');

let allVideos = [
  {
    "id": "1", "url": "https://i.imgur.com/xUMTaXn.jpg",
    "text": `<h5>Oricon News (01/21/2020) | Morning Musume。'20 New Single Commemorative Release Event Performance & Interview</h5><br>
Translation: @da1suk1day0 <br>
Timing & Typesetting: @Davidguy <br><br>
Youtube: <a target="_blank" href="https://www.youtube.com/watch?v=SO3FAxEdnkY">https://www.youtube.com/watch?v=SO3FAxEdnkY</a> <br><br>
Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7rcyp0">https://www.dailymotion.com/video/x7rcyp0</a> <br><br>
Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1w_tzsgPNzttlGaADWrxqwYANDFs7cG8C">https://drive.google.com/open?id=1w_tzsgPNzttlGaADWrxqwYANDFs7cG8C</a> <br><br>
Torrent: <a target="_blank" href="https://aidoru-online.me/torrents-details.php?id=162358">https://aidoru-online.me/torrents-details.php?id=162358</a> ` },
  {
    "id": "2", "url": "https://i.imgur.com/Er4UiFy.jpg",
    "text": `<h5>Hello! Project ONE x ONE (1/20/2020) | Episode 9: Hamaura Ayano & Oda Sakura</h5><br>

    Translation & Typesetting: <a href="https://www.instagram.com/harunaogatajp/">https://www.instagram.com/harunaogatajp/</a> <br> 
    Timing: @Davidguy, @Di <br><br>
    
    YouTube: <a href="https://www.youtube.com/watch?v=cOxfWgm2XOs">https://www.youtube.com/watch?v=cOxfWgm2XOs</a> <br><br>
    Dailymotion: <a href="https://www.dailymotion.com/video/x7rm7zw">https://www.dailymotion.com/video/x7rm7zw</a> <br><br>
    Google Drive: <a href="https://drive.google.com/open?id=1crPjoASAIBc_0AJ8RBQNXPWykBzXeQeR">https://drive.google.com/open?id=1crPjoASAIBc_0AJ8RBQNXPWykBzXeQeR</a><br><br> 
    Torrent: <a href="https://aidoru-online.me/torrents-details.php?id=162703">https://aidoru-online.me/torrents-details.php?id=162703</a> ` },
  {
    "id": "3",
    "url": "https://i.imgur.com/c8oIVZb.jpg",
    "text": `<h5>Premium MelodiX! (01/28/2020) | Morning Musume。'20 Talk & Performance</h5>

  Translation: <a target="_blank" href="https://www.instagram.com/harunaogatajp/">https://www.instagram.com/harunaogatajp/</a> <br>
  Timing: @Davidguy <br><br>
  Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7rcypa">https://www.dailymotion.com/video/x7rcypa</a> <br><br>
  Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1E7OqQgqeWBfLhD3ShZe8TYrADxLQsYwW">https://drive.google.com/open?id=1E7OqQgqeWBfLhD3ShZe8TYrADxLQsYwW
  </a>  <br><br>
  Torrent: <a target="_blank" href="https://aidoru-online.me/torrents-details.php?id=162354">https://aidoru-online.me/torrents-details.php?id=162354</a> `,
  },
  {
    "id": "4",
    "url": "https://i.imgur.com/YChqgL7.jpg",
    "text": `<h5>McDonald's KitKat McFlurry CM (15 sec)</h5> <br>
  Translation:  @Honeydew <br>
  Timing: @Davidguy <br><br>
  Twitter Videos: <a target="_blank" href="https://twitter.com/HPTDiscord/status/1227368693425786882">https://twitter.com/HPTDiscord/status/1227368693425786882</a> <span hidden>kamiko</span>`

  },
  {
    "id": "5",
    "url": "https://i.imgur.com/F9uMp0i.jpg",
    "text": `<h5>musicRu TV (12/04/2019) | Hyadain BEYOOOOONDS commentary</h5> 
  Translation: @shelliana <br> 
  Timing & Typesetting: @Davidguy <br><br>
  
  YouTube: <a target="_blank" href="https://www.youtube.com/watch?v=NfZVj5ofzOE">https://www.youtube.com/watch?v=NfZVj5ofzOE</a> <br><br>
  Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7rx6r1">https://www.dailymotion.com/video/x7rx6r1</a> <br><br>
  Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1DrzlQNgHkuerAtL4Z_I13Ox3vrxJ8M9C">https://drive.google.com/open?id=1DrzlQNgHkuerAtL4Z_I13Ox3vrxJ8M9C</a> <br><br>
  softsub: <a target="_blank" href="https://drive.google.com/open?id=1Lmksbxz38xeceK8JKmY3gRUv6VDpeoJn">https://drive.google.com/open?id=1Lmksbxz38xeceK8JKmY3gRUv6VDpeoJn</a> <br><br>
   `

  },
  {
    "id": "6",
    "url": "https://i.imgur.com/PxhcyjW.jpg",
    "text": `<h5>Hello Pro no Oshigoto Challenge! 2 | Episode 1</h5><br>

  Translation: @Amy @QueenAgonna <br> 
  Timing: @mekia <br>
  Typesetting: @Davidguy <br><br>
  
 
  Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7s2nc4">https://www.dailymotion.com/video/x7s2nc4</a> <br><br>
  Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1uLvcbg_0vdrNdA1Pbf1PQZpyc0pLK6eJ">https://drive.google.com/open?id=1uLvcbg_0vdrNdA1Pbf1PQZpyc0pLK6eJ</a> <br><br> 
  softsub: <a target="_blank" href="https://drive.google.com/open?id=1_x13-RZ0e-1rxeJM792whatzfuoJ3rf_">https://drive.google.com/open?id=1_x13-RZ0e-1rxeJM792whatzfuoJ3rf_</a> <br><br>
  Torrent 1 (1080p): <a target="_blank" href="https://aidoru-online.me/torrents-details.php?id=163562">https://aidoru-online.me/torrents-details.php?id=163562</a> <br><br>
  Torrent 2 (720p): <a target="_blank" href="https://aidoru-online.me/torrents-details.php?id=163563">https://aidoru-online.me/torrents-details.php?id=163563</a> <span hidden>Morning Musume</span>`

  },
  {
    "id": "7",
    "url": "https://i.imgur.com/u9EsPcu.jpg",
    "text": `<h5>Upcoming #176 | Kanazawa Tomoko Solo Live Interview</h5>
Translation: @Skoban <br>
Timing: @Davidguy <br>
Proofreading: @Neminia @QueenAgonna <br><br>
YouTube: <a target="_blank" href="https://www.youtube.com/watch?v=FwOcIsl36uQ">https://www.youtube.com/watch?v=FwOcIsl36uQ</a> <br><br>
Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7s404t">https://www.dailymotion.com/video/x7s404t</a> <br><br>
Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1cEKSyD28_qsbpxihZUYoqH2Ifrp-KZfl">https://drive.google.com/open?id=1cEKSyD28_qsbpxihZUYoqH2Ifrp-KZfl</a> <br>`
  },
  {
    "id": "8",
    "url": "https://i.imgur.com/tiW4kED.jpg",
    "text": `<h5>OMAKE CHANNEL | Kobushi Factory「Seishun no Hana」MV Reaction</h5> 
  Translation: @QueenAgonna <br>
  Timing: @Davidguy <br><br>
  
  YouTube: <a target="_blank" href="https://www.youtube.com/watch?v=p6J1C_8vhW0">https://www.youtube.com/watch?v=p6J1C_8vhW0</a> <br><br>
  Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7s4vfu">https://www.dailymotion.com/video/x7s4vfu</a> <br><br>
  Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1lr9qFEW509ePbCx8IxVp-HEWgGUpNZra">https://drive.google.com/open?id=1lr9qFEW509ePbCx8IxVp-HEWgGUpNZra</a> `


  },
  {
    "id": "9",
    "url": "https://i.imgur.com/PxhcyjW.jpg",
    "text": `<h5>Hello Pro no Oshigoto Challenge! 2 | Episode 2</h5> 
    Translation: @Amy @shelliana <br>
    Timing: @mekia <br>
    Typesetting: @Davidguy <br> <br> 
    
    Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7sdk6r">https://www.dailymotion.com/video/x7sdk6r</a> <br><br> 
    Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1Y0n04K34sy4F5-KiqkBKqFRFPeqsaSv6">https://drive.google.com/open?id=1Y0n04K34sy4F5-KiqkBKqFRFPeqsaSv6</a><br><br> 
    softsub: <a target="_blank" href="https://drive.google.com/open?id=1T_4QHM7xFcEDG-f0PQsJflSGaK682RIP">https://drive.google.com/open?id=1T_4QHM7xFcEDG-f0PQsJflSGaK682RIP</a> <br><br>
    Torrent 1: <a target="_blank" href="https://aidoru-online.me/torrents-details.php?id=164092">https://aidoru-online.me/torrents-details.php?id=164092</a> <br><br>
    Torrent 2: <a target="_blank" href="https://aidoru-online.me/torrents-details.php?id=164093">https://aidoru-online.me/torrents-details.php?id=164093</a> <span hidden>Morning Musume</span>`

  },
  {
    "id": "10",
    "url": "https://i.imgur.com/qyquKi5.jpg",
    "text": `<h5> Hello Pro no Oshigoto Challenge! 2 | Episode 3</h5>
    Translation: @Amy 🦒, @chanting-to-u, @fr0d0b0ls0n, Itos Atos <br>
    Timing: @mekia <br>
    Typesetting: @Davidguy <br><br>
    
    Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7sy3le">https://www.dailymotion.com/video/x7sy3le</a> <br><br>
    Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1nGCY4KbTH7Qffug6MDYSDyJbqdDtoaHN">https://drive.google.com/open?id=1nGCY4KbTH7Qffug6MDYSDyJbqdDtoaHN</a><br><br>
    softsub: <a target="_blank" href="https://drive.google.com/open?id=1LvSxshDFG7L9tef4LEAtNPa4y_09niA2">https://drive.google.com/open?id=1LvSxshDFG7L9tef4LEAtNPa4y_09niA2</a> <span hidden>angerme<span>`
  },
  {
    "id": "11",
    "url": "https://i.imgur.com/kpMPhSU.jpg",
    "text": `<h5>Morning Musume'17 DVD Magazine Vol.98</h5> 
    Translation, Timing & Typesetting: @Neminia <br> 
    Proofreading: @chanting-to-u <br>
    Encoding: @mekia <br><br>
    
    YouTube: <a target="_blank" href="https://youtu.be/d58GENByAwM">https://youtu.be/d58GENByAwM</a> <br><br>
    Dailymotion: Part1 <a target="_blank" href="https://dai.ly/x7szdlo">https://dai.ly/x7szdlo</a>  Part2 <a target="_blank" href="https://dai.ly/x7szdlr">https://dai.ly/x7szdlr</a>  Part3 <a target="_blank" href="https://dai.ly/x7szdnd">https://dai.ly/x7szdnd</a> <br><br>
    Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1I8zKkWNkydRC42m85--lITPhpT7cMHTF">https://drive.google.com/open?id=1I8zKkWNkydRC42m85--lITPhpT7cMHTF</a> <br><br>
    softsub: <a target="_blank" href="https://drive.google.com/open?id=1uD4id_kWpq3MJ9lQaPq1apw2569kPjlk">https://drive.google.com/open?id=1uD4id_kWpq3MJ9lQaPq1apw2569kPjlk</a> <br><br>
    Torrent: <a target="_blank" href="https://aidoru-online.me/torrents-details.php?id=165509">https://aidoru-online.me/torrents-details.php?id=165509</a> <br><br>`
  },
  {
    "id": "12",
    "url": "https://i.imgur.com/NiEJN37.jpg",
    "text": `<h5> Aware! Meisaku-kun Episodes 121 & 123 (feat. Satou Masaki) </h5>
    Translation & Typesetting: @shelliana  <br>
    Timing: @mekia <br> <br>
    
    Episode 121 <br>
    Youtube: <a target="_blank" href="https://youtu.be/zT9b_uITv1I">https://youtu.be/zT9b_uITv1I</a>  <br><br>
    Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7sz8c0">https://www.dailymotion.com/video/x7sz8c0</a> <br><br>
    Google Drive: <a target="_blank" href="https://drive.google.com/open?id=19Ob8S87kFBwFG4b977Ti0nutEWGHcb9c">https://drive.google.com/open?id=19Ob8S87kFBwFG4b977Ti0nutEWGHcb9c</a> <br><br>
    
    Episode 123 <br>
    Youtube: <a target="_blank" href="https://youtu.be/rvuCMYm3iEk">https://youtu.be/rvuCMYm3iEk</a> <br><br>
    Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7sz8bz">https://www.dailymotion.com/video/x7sz8bz</a> <br><br>
    Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1ly3_JlVESdL8prr3m9CKMbyZCaTsldr3">https://drive.google.com/open?id=1ly3_JlVESdL8prr3m9CKMbyZCaTsldr3</a> <br><br>`
  },
  {
    "id": "13",
    "url": "https://i.imgur.com/qHO3vzV.jpg",
    "text": `<h5>tiny tiny #125 | Hello! Project Kenshuusei Corner - Yonemura Kirara</h5> 
    Translation & Timing: @shelliana <br><br>
    Youtube: <a target="_blank" href="https://www.youtube.com/watch?v=Q6DwTe6ijRU">https://www.youtube.com/watch?v=Q6DwTe6ijRU</a> <br><br>
    Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7ta9yb">https://www.dailymotion.com/video/x7ta9yb</a> <br><br>
    Google Drive: <a target="_blank" href="https://drive.google.com/open?id=1geVlmr207AZMdxG_iHsmavzdQeiyQo2l">https://drive.google.com/open?id=1geVlmr207AZMdxG_iHsmavzdQeiyQo2l</a> <br><br>`

  },

  {
    "id": "14", "url": "https://i.imgur.com/AMzAENu.jpg",
    "text": ` <h5>BEYOOOOONDS - Vitamin ME [ENG SUB] </h5>
Translation: @da1suk1day0, @shelliana <br> 
Timing & Typesetting: @Davidguy <br><br>
Youtube: <a target="_blank" href="https://www.youtube.com/watch?v=-PYoDI3bTNs">https://www.youtube.com/watch?v=-PYoDI3bTNs</a> <br><br>
softsub: <a target="_blank" href="https://drive.google.com/open?id=1Gr2jboe-bVCu6VNuvgIjcdyGg2i3NTYJ">https://drive.google.com/open?id=1Gr2jboe-bVCu6VNuvgIjcdyGg2i3NTYJ</a>`
  },
  {
    "id": "15",
    "url": "https://i.imgur.com/j6EaVlO.jpg",
    "text":`<h5>「Hello! History '20 」Hello! Project [ENG SUB]</h5><br>
    Translated, subbed & timed: @kimaagure <br><br>
    Youtube: <a target="_blank" href="https://www.youtube.com/watch?v=6h7zQVzC_gI">https://www.youtube.com/watch?v=6h7zQVzC_gI</a>`,

  },{
    "id":"16",
    "url":"https://i.imgur.com/Jist4UI.jpg",
    "text":`<h5>Start Line (short ver) - Kobushi Factory (こぶしファクトリー) [Eng SUB]</h5><br>
  Translated, subbed & timed: @kimaagure <br><br>
  Youtube <a target="_blank" href="https://www.youtube.com/watch?v=upyXxO9qrgE">https://www.youtube.com/watch?v=upyXxO9qrgE</a>`
  },{
    "id":"17",
    "url":"https://i.imgur.com/Q2bjXkN.jpg",
    "text":`<h5>[ENG SUB] ANGERME Murota Mizuki Graduation Speech & Solo</h5><br>
    Translated, subbed & timed: @kimaagure <br><br>
    Youtube <a  target="_blank" href="https://www.youtube.com/watch?v=eCLn8xNfbLY">https://www.youtube.com/watch?v=eCLn8xNfbLY</a>`
  },
  {
    "id":"18",
    "url":"https://i.imgur.com/or44RCH.jpg",
    "text":`<h5>[ENG SUB] UpFront Group Remote Chorus Medley - "Love will Win" "It's okay to cry" "Don't give up"</h5><br>
    Translated, subbed & timed: @kimaagure <br><br>
    Youtube <a target="_blank" href="https://www.youtube.com/watch?v=9rInokjV9IQ">https://www.youtube.com/watch?v=9rInokjV9IQ</a>`
  },
  {
    "id":"19",
    "url":"https://i.imgur.com/Z7M8K6n.jpg",
    "text":`<h5>(engsub) anime’s director talking about maachan and her character モーニング娘。佐藤優樹 あはれ！名作くん</h5><br>

    Uploaded: maachanmarkeu 99 <br> <br>
    
    Youtube: <a target="_blank" href="https://www.youtube.com/watch?v=rvDdE4hehKw">https://www.youtube.com/watch?v=rvDdE4hehKw</a> <span hidden>Sato</span>`

  },
  {
    "id":"20",
    "url":"https://i.imgur.com/hjrtvgZ.jpg",
    "text":`<h5>(Cooking classes with Sato Masaki and Makino Maria (with English subs)</h5><br>

    Uploaded:  Translator Guy <br> <br>
    
    Youtube: <a target="_blank" href="https://www.youtube.com/watch?v=22FhZZccvhA">https://www.youtube.com/watch?v=22FhZZccvhA</a>`

  }
  ,
  {
    "id":"21",
    "url":"https://i.imgur.com/y2umx4n.jpg",
    "text":`
    <h5>[ENG SUB] Morning Musume ’20 WEB Talk PART 1 
      
    </h5><br> 
    <h6>Members talk after not meeting awhile & celebrate Maa-chan’s 21st birthday</h6><br>
    
    Translated, subbed & timed: @kimaagure <br> <br>
    Video rendering: @pOuNd66 <br> <br>
    
    Youtube: <a target="_blank" href="https://www.youtube.com/watch?v=Q2ZLueFu8Gg">https://www.youtube.com/watch?v=Q2ZLueFu8Gg</a> <br><br>
    Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7u2zc7">https://www.dailymotion.com/video/x7u2zc7</a>
    `
  }
  ,
  {
    "id":"22",
    "url":"https://i.imgur.com/SBKL2V2.jpg",
    "text":`<h5>Hello Pro no Oshigoto Challenge! 2 | Episode 4</h5>
    <br> <br>
    
    Translation: @Amy, @fr0d0b0ls0n, Itos Atos<br>
    Timing: @mekia<br>
    Typesetting: @Davidguy<br><br>
    
    Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7ufle0">https://www.dailymotion.com/video/x7ufle0</a> <br><br>
    Google Drive: <a target="_blank" href="https://drive.google.com/file/d/1GM8O6a8t8apOz75sYcDbOlq0kt-KPq84/view?usp=sharing">https://drive.google.com/file/d/1GM8O6a8t8apOz75sYcDbOlq0kt-KPq84/view?usp=sharing</a><br><br>
    softsub: <a target="_blank" href="https://drive.google.com/file/d/1UdMXokHpR9vXHMFqR76evUNgGuH9tq9x/view?usp=sharing"> https://drive.google.com/file/d/1UdMXokHpR9vXHMFqR76evUNgGuH9tq9x/view?usp=sharing</a>
    <span hidden>angerme<span>
    `
  }
  ,
  {
    "id":"23",
    "url":"https://i.imgur.com/zqVGrZH.jpg",
    "text":`<h5>Hello Pro ONE x ONE | Episode 6 - Inaba Manaka & Morito Chisaki</h5>
    <br> <br>
    
    Translation: @Skoban , @fr0d0b0ls0n , Itos Atos, @Davidguy <br> 
    Timing: @Davidguy, @Di <br>
    Typesetting: @Davidguy <br><br>
    
    Youtube: <a target="_blank" href="https://www.youtube.com/watch?v=I4rTMcB53Wc">https://www.youtube.com/watch?v=I4rTMcB53Wc</a> <br><br>
    Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7ul8f4">https://www.dailymotion.com/video/x7ul8f4</a> <br><br>
    Google Drive: <a target="_blank" href="https://drive.google.com/file/d/1Yi41UdzrM-n7tTH3YoTBZnVFLW0FNxGU/view?usp=sharing">https://drive.google.com/file/d/1Yi41UdzrM-n7tTH3YoTBZnVFLW0FNxGU/view?usp=sharing</a><br><br>
    softsub: <a target="_blank" href="https://drive.google.com/file/d/1mzG-N5D3dL8xiQFBHvqlo5QV4yuEXR26/view?usp=sharing
    ">https://drive.google.com/file/d/1mzG-N5D3dL8xiQFBHvqlo5QV4yuEXR26/view?usp=sharing</a>
    <span hidden>Morito Chisaki, Inaba Manaka<span>
    `
  }
  ,
  {
    "id":"24",
    "url":"https://i.imgur.com/26aSnTk.jpg",
    "text":
    `<h5>[ENG SUB] Morning Musume ’20 WEB Talk PART 2 </h5><br><br>


    Twitter: @kimaagure <br><br>
    
    
    YouTube: <a target="_blank" href="https://www.youtube.com/watch?v=3L_tFIzRzyk">https://www.youtube.com/watch?v=3L_tFIzRzyk</a>
    
    <br><br>Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7upgem">https://www.dailymotion.com/video/x7upgem</a>
    <span hidden><span>`
  }
   ,
  {
    "id":"25",
    "url":"https://i.imgur.com/uguKVHJ.jpg",
    "text":
    `<h5>Hello! Project Station Special Plan #12 | Yamazaki Yuhane x Shimakura Rika Phone Call</h5><br><br>


    Translation: @Skoban 
    
    <br>Timing: @Davidguy 
    
    <br>Typesetting: @Davidguy <br><br>
    
    
    YouTube: <a target="_blank" href="https://www.youtube.com/watch?v=6gyCJvU63nw">https://www.youtube.com/watch?v=6gyCJvU63nw</a>
    
    <br><br>Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7uypwj">https://www.dailymotion.com/video/x7uypwj</a>
    
    <br><br>Google Drive: <a target="_blank" href="https://drive.google.com/file/d/1KPLwRRwoKYot48vyVpB4r-o_HeX1IkrG/view?usp=sharing">https://drive.google.com/file/d/1KPLwRRwoKYot48vyVpB4r-o_HeX1IkrG/view?usp=sharing</a>
    
    <br><br>softsub: <a target="_blank" href="https://drive.google.com/file/d/1_fTOLg6SG8SssZAhGaUihAZ1WrIApGm8/view?usp=sharing">https://drive.google.com/file/d/1_fTOLg6SG8SssZAhGaUihAZ1WrIApGm8/view?usp=sharing</a>
    <span hidden>beyooooonds<span> 
    `
  }
  ,
  {
    "id":"26",
    "url":"https://i.imgur.com/f8xxCnq.jpg",
    "text":
    `<h5>Hello! Project Special Plan #12 | Yamazaki Yuhane tiny play back "Magic of Love (J=J 2015 Ver.)"</h5><br><br>


    Translation: @Skoban 
    
    <br>Timing: @Davidguy 
    
    <br>Typesetting: @Davidguy <br><br>
    
    
    YouTube: <a target="_blank" href="https://www.youtube.com/watch?v=SrqA90grKJo">https://www.youtube.com/watch?v=SrqA90grKJo</a>
    
    <br><br>Dailymotion: <a target="_blank" href="https://www.dailymotion.com/video/x7uyxsx">https://www.dailymotion.com/video/x7uyxsx</a>
    
    <br><br>Google Drive: <a target="_blank" href="https://drive.google.com/file/d/1PwZBhjO3dysMarxaaCRabH7js3SXEakI/view?usp=sharing">https://drive.google.com/file/d/1PwZBhjO3dysMarxaaCRabH7js3SXEakI/view?usp=sharing</a>
    
    <br><br>softsub: <a target="_blank" href="https://drive.google.com/file/d/1iCH16QsdR8V78d8M9U6pljAOq5Ce73Pw/view?usp=sharing">https://drive.google.com/file/d/1iCH16QsdR8V78d8M9U6pljAOq5Ce73Pw/view?usp=sharing</a>
    <span hidden>beyooooonds<span>`
  }

  
];
allVideos = allVideos.reverse();
let videoElementsById = {};

const filterLinks = [
  "Oshigoto Challenge",
  "BEYOOOOONDS",
  "Kenshuusei",
  "ANGERME",
  "Morning Musume",
  "Sato",
  "ONE x ONE"
];

filterLinks.forEach(link => {
  const linkElement = document.createElement('a');
  linkElement.textContent = link;
  linkElement.setAttribute('class', 'link');
  linkElement.href = `#/?filter=${link}`;
  filterLinksElement.appendChild(linkElement);
  const spacer = document.createElement('span');
  spacer.textContent = '|';
  filterLinksElement.appendChild(spacer);
});

formElement.addEventListener('submit', (e) => e.preventDefault());
filterInput.addEventListener('input', filterList);

if (window.location.hash) {
  filterInput.value = decodeURIComponent(window.location.hash.replace('#/?filter=', ''));
}

window.addEventListener('hashchange', (e) => {
  filterInput.value = decodeURIComponent(window.location.hash.replace('#/?filter=', ''));
  filterList({
    target: filterInput
  });
});

if (allVideos.length > 0) {
  showVideos(allVideos);
}


function showVideos(videos) {
 
  localStorage.videos = JSON.stringify(videos);
  allVideos = videos;
  loadingElement.style.display = 'none';

  videosElement.innerHTML = '';
  videos.forEach((video) => {
    const videoElement = createVideoElement(video);
    videosElement.appendChild(videoElement);
  });
  filterList({
    target: filterInput
  });
}

function createVideoElement(video) {
  const colDiv = document.createElement('div');
  colDiv.className = 'col-xs-1 col-sm-6 col-md-4 video';
  videoElementsById[video.id] = colDiv;

  const link = document.createElement('span');
  link.href = `https://www.youtube.com/watch?v=`;

  const videoElement = document.createElement('div');
  videoElement.className = 'card ma-1';

  const img = document.createElement('img');



  img.src = video.url;
  img.className = 'card-img-top';

  videoElement.appendChild(img);

  const mediaBody = document.createElement('div');
  mediaBody.className = 'card-body';

  videoElement.appendChild(mediaBody);

  const h6 = document.createElement('h6');
  h6.className = 'card-title';
  h6.innerHTML = video.text;
  mediaBody.appendChild(h6);

  link.appendChild(videoElement);
  colDiv.appendChild(link);

  return colDiv;
}

function filterList(event) {
  const filter = event.target.value;
  window.location.hash = `#/?filter=${filter}`;
  if (allVideos) {
    const regExp = new RegExp(filter, 'gi');
    allVideos.forEach(video => {
      if (video.text.match(regExp)) {
        videoElementsById[video.id].className = 'video video-show col-xs-1 col-sm-6 col-md-4';
      } else {
        videoElementsById[video.id].className = 'video video-hide';
      }
    });

  }
}
