var devDes    = document.getElementsByClassName ( "dev-describtion"           ) [ 0 ] ;
var devTitle  = document.getElementsByClassName ( "infoTitle"                 ) [ 0 ] ;
let devTitle1 = document.getElementsByClassName ( "infoTitle"                 ) [ 1 ] ;
let devTitle2 = document.getElementsByClassName ( "infoTitle"                 ) [ 2 ] ;
var comPara   = document.querySelector          ( ".ourCommitteesDescription" )       ;
let track1    = document.getElementsByClassName ( "TT1"                       ) [ 0 ] ;
let track2    = document.getElementsByClassName ( "TT2"                       ) [ 0 ] ;
let track3    = document.getElementsByClassName ( "TT3"                       ) [ 0 ] ;
let track4    = document.getElementsByClassName ( "TT4"                       ) [ 0 ] ;
let track5    = document.getElementsByClassName ( "TT5"                       ) [ 0 ] ;
let track6    = document.getElementsByClassName ( "TT6"                       ) [ 0 ] ;
let track7    = document.getElementsByClassName ( "TT7"                       ) [ 0 ] ;
let track8    = document.getElementsByClassName ( "TT8"                       ) [ 0 ] ;
let track9    = document.getElementsByClassName ( "TT9"                       ) [ 0 ] ;
let track10   = document.getElementsByClassName ( "TT10"                      ) [ 0 ] ;
let track11   = document.getElementsByClassName ( "TT11"                      ) [ 0 ] ;
let track12   = document.getElementsByClassName ( "TT12"                      ) [ 0 ] ;
let track13   = document.getElementsByClassName ( "TT13"                      ) [ 0 ] ;
let track14   = document.getElementsByClassName ( "TT14"                      ) [ 0 ] ;
let track15   = document.getElementsByClassName ( "TT15"                      ) [ 0 ] ;
let track16   = document.getElementsByClassName ( "TT16"                      ) [ 0 ] ;
let ser1      = document.getElementsByClassName ( "services"                  ) [ 0 ] ;
let describ1  = document.getElementsByClassName ( "dev-describtion"           ) [ 1 ] ;
let describ2  = document.getElementsByClassName ( "dev-describtion"           ) [ 2 ] ;

function checkNetworkSpeed() {
    if ( navigator.onLine ) {
        setTimeout(() => {
        // Start Splash Screen
        document.getElementById( "splash" ).classList.add( "fade" );
        setTimeout(() => {
            document.getElementById( "splash" ).classList.add( "hidden" );
            document.body.style.overflow = "hidden auto";
        }, 900);
        // End Splash Screen

        // Start animation Header
        document.querySelector(
            ".main-effect"
        ).style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
        setTimeout(function adding() {
            comPara === null || comPara === void 0
            ? void 0
            : comPara.classList.add( "show1" );
        }, 2000);
        // End animation Header

        // Start Animation Developers Section
        setTimeout(function adding() {
            devTitle === null || devTitle === void 0
            ? void 0
            : devTitle.classList.add( "show1" );
        }, 2700);
        setTimeout(function adding() {
            devDes === null || devDes === void 0
            ? void 0
            : (devDes.style.opacity = "1");
        }, 3400);

        setTimeout(function adding() {
            ser1 === null || ser1 === void 0 ? void 0 : ser1.classList.add( "show" );
        }, 4100);

        // End Animation Developers Section
        setTimeout(
            (window.onscroll = function showing() {
            let totalHeight  = (window.innerHeight / 5) * 4;
            let track1Top    = track1    . getBoundingClientRect () . top ;
            let track2Top    = track2    . getBoundingClientRect () . top ;
            let track3Top    = track3    . getBoundingClientRect () . top ;
            let track4Top    = track4    . getBoundingClientRect () . top ;
            let track5Top    = track5    . getBoundingClientRect () . top ;
            let track6Top    = track6    . getBoundingClientRect () . top ;
            let track7Top    = track7    . getBoundingClientRect () . top ;
            let track8Top    = track8    . getBoundingClientRect () . top ;
            let track9Top    = track9    . getBoundingClientRect () . top ;
            let track10Top   = track10   . getBoundingClientRect () . top ;
            let track11Top   = track11   . getBoundingClientRect () . top ;
            let track12Top   = track12   . getBoundingClientRect () . top ;
            let track13Top   = track13   . getBoundingClientRect () . top ;
            let track14Top   = track14   . getBoundingClientRect () . top ;
            let track15Top   = track15   . getBoundingClientRect () . top ;
            let track16Top   = track16   . getBoundingClientRect () . top ;
            let decTit1Top   = devTitle1 . getBoundingClientRect () . top ;
            let decTit2Top   = devTitle2 . getBoundingClientRect () . top ;
            let describ1Top  = describ1 . getBoundingClientRect () . top ;
            let describ2Top  = describ2 . getBoundingClientRect () . top ;
            if (track1Top < totalHeight) {
                track1.classList.add("show");
            } else {
                track1.classList.remove("show");
            }
            if (track2Top < totalHeight) {
                track2.classList.add("show");
            } else {
                track2.classList.remove("show");
            }
            if (track3Top < totalHeight) {
                track3.classList.add("show");
            } else {
                track3.classList.remove("show");
            }
            if (track4Top < totalHeight) {
                track4.classList.add("show");
            } else {
                track4.classList.remove("show");
            }
            if (track5Top < totalHeight) {
                track5.classList.add("show");
            } else {
                track5.classList.remove("show");
            }
            if (track6Top < totalHeight) {
                track6.classList.add("show");
            } else {
                track6.classList.remove("show");
            }
            if (track7Top < totalHeight) {
                track7.classList.add("show");
            } else {
                track7.classList.remove("show");
            }
            if (track8Top < totalHeight) {
                track8.classList.add("show");
            } else {
                track8.classList.remove("show");
            }
            if (track9Top < totalHeight) {
                track9.classList.add("show");
            } else {
                track9.classList.remove("show");
            }
            if (track10Top < totalHeight) {
                track10.classList.add("show");
            } else {
                track10.classList.remove("show");
            }
            if (track11Top < totalHeight) {
                track11.classList.add("show");
            } else {
                track11.classList.remove("show");
            }
            if (track12Top < totalHeight) {
                track12.classList.add("show");
            } else {
                track12.classList.remove("show");
            }
            if (track13Top < totalHeight) {
                track13.classList.add("show");
            } else {
                track13.classList.remove("show");
            }
            if (track14Top < totalHeight) {
                track14.classList.add("show");
            } else {
                track14.classList.remove("show");
            }
            if (track15Top < totalHeight) {
                track15.classList.add("show");
            } else {
                track15.classList.remove("show");
            }
            if (track16Top < totalHeight) {
                track16.classList.add("show");
            } else {
                track16.classList.remove("show");
            }
            if (decTit1Top < totalHeight) {
                devTitle1.classList.add("show");
            } else {
                devTitle1.classList.remove("show");
            }
            if (decTit2Top < totalHeight) {
                devTitle2.classList.add("show");
            } else {
                devTitle2.classList.remove("show");
            }
            if (describ1Top < totalHeight) {
                describ1.classList.add("show");
            } else {
                describ1.classList.remove("show");
            }
            if (describ2Top < totalHeight) {
                describ2.classList.add("show");
            } else {
                describ2.classList.remove("show");
            }
            }),
            4800
        );
        }, 2000);
    } 
    else {
        document.getElementById("splash").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}
checkNetworkSpeed();
// window.onscroll = function showing(){
//     // console.log(totalHeight);
//     tracks.forEach((tr)=>{
//         var totalHeight = window.innerHeight /5*4;
//         var trackTop = tr.getBoundingClientRect().top;
//         if(trackTop<totalHeight +150){
//             tr.classList.add("show");
//         }
//         else{
//             tr.classList.remove("show")
//         }
//     })
// }