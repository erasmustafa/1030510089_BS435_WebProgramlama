/* Kedinin her oyunda rastgele konumlanması için 0-3 arasında bir random tanımladım.
Random sayı 3 karttan kedi olanı belirleyecek ve diğerleri de köpek olacak.
   Oyuncu kartlara her tıklayışında ona bir bilgi dönecek, 1 hakkın kaldı veya hakkın kalmadı gibi
Bu yüzden bir tane de köpeklere tanımlı sayaç değişkeni tanımladım.
*/
var imag,sayac;

imag = Math.floor(Math.random() * 3);
sayac = 0;

// Random sayı dönecek ve 0-1-2 değerlerine göre aşağıdaki komutlar çalışacak.

switch(imag) {
    case 0:
      // alert(imag);
      document.getElementById("img0").onclick = ()=>{
      	document.getElementById('img0').src = 'catc.jpg'; // Kedi konumlandı
        var audio = new Audio('cat.wav');
        audio.play();
      // alert("BRAVO!");
        document.getElementById("alanId").innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <a href='kedi.html'>buraya</a> tıklamalısın."
      }
      document.getElementById("img1").onclick = ()=>{
      	document.getElementById('img1').src = 'dogc.jpg'; 
        sayac++; // Köpeğe 1 veya 2 kez tıklanırsa çalışacak konumları için yeni bir switch-case yapısı.
      //  alert("sayac="+sayac);
        switch (sayac) {
          case 1:
            var audio = new Audio('wrong.mp3');
            audio.play();
          //  alert("1 seçim hakkın kaldı");
            break;
          case 2:
            //alert("Seçim hakkın kalmadı");
            var audio = new Audio('bitti.mp3');
            audio.play();
            document.getElementById("alanId").innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <a href='kedi.html'>buraya</a> tıklamalısın."
          break;
          default:
            break;
        }
      }
      document.getElementById("img2").onclick = ()=>{
      	document.getElementById('img2').src = 'dogc.jpg';
        sayac++;
      //  alert("sayac="+sayac);
        switch (sayac) {
          case 1:
            var audio = new Audio('wrong.mp3');
            audio.play();
          //  alert("1 seçim hakkın kaldı");
            break;
          case 2:
            //alert("seçim hakkın kalmadı");
            var audio = new Audio('bitti.mp3');
            audio.play();
            document.getElementById("alanId").innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <a href='kedi.html'>buraya</a> tıklamalısın."
          break;
          default:
            break;
        }
      }
      break;
    case 1:
      //alert(imag);
      document.getElementById("img0").onclick = ()=>{
      	document.getElementById('img0').src = 'dogc.jpg';
        sayac++;
        //alert("sayac="+sayac);
        switch (sayac) {
          case 1:
            var audio = new Audio('wrong.mp3');
            audio.play();
           // alert("1 seçim hakkın kaldı");
            break;
          case 2:
            //alert("seçim hakkın kalmadı");
            var audio = new Audio('bitti.mp3');
            audio.play();
            document.getElementById("alanId").innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <a href='kedi.html' >buraya</a> tıklamalısın."
          break;
          default:
            break;
        }
      }
      document.getElementById("img1").onclick = ()=>{
      	document.getElementById('img1').src = 'catc.jpg'; // Kedi konumlandı
        var audio = new Audio('cat.wav');
        audio.play();
      //  alert("BRAVO!");
        document.getElementById("alanId").innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <a href='kedi.html'>buraya</a> tıklamalısın."
      }
      document.getElementById("img2").onclick = ()=>{
      	document.getElementById('img2').src = 'dogc.jpg';
        sayac++;
        //alert("sayac="+sayac);
        switch (sayac) {
          case 1:
            var audio = new Audio('wrong.mp3');
            audio.play();
          //  alert("1 seçim hakkın kaldı");
            break;
          case 2:
            var audio = new Audio('bitti.mp3');
            audio.play();
            //alert("seçim hakkın kalmadı");
            document.getElementById("alanId").innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <a href='kedi.html' >buraya</a> tıklamalısın."
          break;
          default:
            break;
        }
      }
      break;
    case 2:
     // alert(imag);
      document.getElementById("img0").onclick = ()=>{
      	document.getElementById('img0').src = 'dogc.jpg';
        sayac++;
        //alert("sayac="+sayac);
        switch (sayac) {
          case 1:
            var audio = new Audio('wrong.mp3');
            audio.play();
          //  alert("1 seçim hakkın kaldı");
            break;
          case 2:
            var audio = new Audio('bitti.mp3');
            audio.play();
            //alert("seçim hakkın kalmadı");
            document.getElementById("alanId").innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <a href='kedi.html' >buraya</a> tıklamalısın."
          break;
          default:
            break;
        }
      }
      document.getElementById("img1").onclick = ()=>{
      	document.getElementById('img1').src = 'dogc.jpg';
        sayac++;
        //alert("sayac="+sayac);
        switch (sayac) {
          case 1:
            var audio = new Audio('wrong.mp3');
            audio.play();
          //  alert("1 seçim hakkın kaldı");
            break;
          case 2:
            var audio = new Audio('bitti.mp3');
            audio.play();
            //alert("seçim hakkın kalmadı");
            document.getElementById("alanId").innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <a href='kedi.html'>buraya</a> tıklamalısın."
          break;
          default:
            break;
        }
      }
      document.getElementById("img2").onclick = ()=>{
      	document.getElementById('img2').src = 'catc.jpg'; // Kedi konumlandı
        var audio = new Audio('cat.wav');
        audio.play();
        //alert("BRAVO!");
        document.getElementById("alanId").innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <a href='kedi.html'>buraya</a> tıklamalısın."
      }
      break;
    default:
      alert("Başarısız");  
  }
  