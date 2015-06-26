$(window).load(function() {
               
               
               
               
               //               $("footer, #info-arrow").css({transform: 'translateY(250px) '})
               $("header").css({transform: 'translateY(-250px) '})
               
               // CANVAS BEACON
               
               var canvas = document.getElementById('beacon');
               var context = canvas.getContext('2d');
               var centerX = canvas.width / 2;
               var centerY = canvas.height / 2;
               var radius = 0;
               var innerRadius = 0;
               var gradient;
               var strokeOpacity = 1;
               var fillOpacity = 0.5;
               var fps = 30;
               var now;
               var then = Date.now();
               var interval = 1000/fps;
               var delta;
               
               var incrementer = 0.01;
               var whiteR = 255;
               var whiteG = 255;
               var whiteB = 255;
               var dotRadius = 2.5;
               
               
               var isPaused = false;
               
               function animate() {
               
               
               if (isPaused) {
               return;
               } else {
               
               requestAnimationFrame = window.requestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.msRequestAnimationFrame;
               
               requestAnimationFrame(animate);
               
               drawPulse();
               
               }
               }
               
               function drawPulse() {
               
               now = Date.now();
               delta = now - then;
               
               if (delta > interval) {
               
               then = now - (delta % interval);
               
               if (radius >= 130) {
               radius = 0;
               innerRadius = 0;
               strokeOpacity = 1;
               fillOpacity = 0.5;
               incrementer = 0.01;
               whiteR = 255;
               whiteG = 255;
               whiteB = 255;
               dotRadius = 2.5;
               }
               
               if (whiteR <= 31 ) {
               whiteR = 31;
               }
               if (whiteG <= 186 ) {
               whiteG = 186;
               }
               if (whiteB <= 215 ) {
               whiteB = 215;
               }
               if (dotRadius <=2 ) {
               dotRadius = 2;
               }
               
               whiteR -= 15;
               whiteG -= 5;
               whiteB -= 3;
               incrementer += 0.03;
               // radius += 4;
               radius += (1 / incrementer);
               // innerRadius += 0.1;
               innerRadius += (1 / incrementer/5);
               // strokeOpacity -= 3/100;
               strokeOpacity -= (1 / incrementer)/130;
               // fillOpacity -= 1.25/100;
               fillOpacity -= (1 / incrementer)/250;
               dotRadius -= 0.1;
               
               
               context.clearRect ( 0 , 0 , canvas.width, canvas.height );
               context.beginPath();
               context.arc(centerX, centerY, dotRadius, 0, 2 * Math.PI, false);
               context.fillStyle = 'rgba(' + whiteR + ', ' + whiteG + ', ' + whiteB + ', 1)';
               context.fill();
               context.closePath();
               
               context.beginPath();
               context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
               var gradient = context.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, radius);
               gradient.addColorStop(0, 'rgba(31, 186, 214, 0)');
               gradient.addColorStop(1, 'rgba(31, 186, 214, ' + fillOpacity + ')' );
               context.fillStyle = gradient;
               context.fill();
               context.lineWidth = 1;
               context.strokeStyle = 'rgba(31, 186, 214, ' + strokeOpacity + ')';
               context.stroke();
               
               
               
               }
               
               
               }
               
               animate();
               
               
               
               
               if ( $( "#video1-1" ).length != 0 ) {
               
               var video1 = document.getElementById("video1-1");
               var video2 = document.getElementById("video1-2");
               var video3 = document.getElementById("video1-3");
               
               video1.pause();
               video2.pause();
               video3.pause();
               
               }
               
               if ($.cookie('modal_shown') == null) {
               $('.dialog').css({display:"block"});
               windowDialog();
               }
               
               function windowDialog() {
               $("#letsgo").click(function(){
                                  $(".dialog").velocity("fadeOut");
                                  $.cookie('modal_shown', 'yes', { expires: 7, path: '/' });
                                  });
               }
               
               
               
               if ($.cookie('tooltip_playground') == null) {
               $('#tooltip-playground').css({display:"block"});
               }
               
               if ($.cookie('tooltip_menu') == null) {
               $('#tooltip-menu').css({display:"block"});
               }
               
               if ($.cookie('tooltip_down') == null) {
               $('#tooltip-down').css({display:"block"});
               }
               
               
               
               $("#beacon").fadeOut("slow", function(){
                                    var isPaused = false;
                                    
                                    
                                    $(".loader").fadeOut("slow", function() {
                                                         
                                                         
                                                         $("header").css({transform: 'translateY(0px) ', opacity:"1"});
                                                         
                                                         //                                                         $("footer, #info-arrow").css({transform: ''})
                                                         
                                                         if ( $( "#video1-1" ).length !=0 ) {
                                                         
                                                         video1.play();
                                                         video2.play();
                                                         video3.play();
                                                         
                                                         //                                                         var timer;
                                                         
                                                         //                                                         timer = setTimeout(function() {
                                                         //                                                                            $('.tabs li span:nth-child(2), #info-arrow').addClass("footer-fadeOut");
                                                         //                                                                            $('footer, #info-arrow').addClass("footer-idle");
                                                         //                                                                            }, 1250);
                                                         
                                                         
                                                         }
                                                         
                                                         $("#beacon").appendTo(".menu-wrapper");
                                                         });
                                    });
               })

$( document ).ready(function() {
                    
                    
                    
                    
                    
                    var _gaq=[["_setAccount","UA-60612015-2"],["_trackPageview"]];

                    
                    // MENU STATE
                    
                    if (location.hash === "#about") {
                    
                    
                    $(".scene-bg").removeClass("scene-bg-black");
                    $("#tooltip-playground").velocity("fadeOut");
                    $("#tooltip-down").velocity("fadeOut");
                    $("#tooltip-menu").velocity("fadeOut");
                    
                    
                    $(".info-arrow-svg").addClass("arrow-up");
                    
                    $(".header-mobile").addClass("header-mobile-visible");
                    
                    $(".section").addClass("section-info");
                    $(".content-nav").addClass("content-nav-reveal");
                    $(".content-nav span").removeClass("nav-float-above");
                    $("footer").addClass("footerLeave");
                    $(".menu-icon, .menu-label").addClass("font-white");
                    $("span.playground-obj").addClass("blur");

                    
                    
                    
                    } else if (location.hash === "#menu") {
                    
                    $("button").addClass("close");
                    // $("footer, .about-wrapper").addClass("hide");
                    $("#nav-search").addClass("open");
                    $(".parallax").css({overflowY:"hidden"});
                    $("span.playground-obj").addClass("blur");
                    // $("#bgvid").addClass("blur-noscale");
                    // $(".cover-wrapper, .cover-divider, .resources-wrapper, .changelog-wrapper").addClass("fadeOut");
                    $("#wrapper, .menu-headline-main-float").css({opacity:"0"});
                    
                    
                    $(".menu-icon, .nav-divider").velocity("fadeOut", 250, function() {
                                                           $(".menu-return").css({display:"block"}).velocity({opacity:"1",translateX:"-35px"}, 500, [0.19, 1, 0.22, 1]);
                                                           });
                    
                    
                    $(".search-clear-wrapper").css({display:"none"});
                    
                    $( ".menu-headline-main" ).css({verticalAlign:"top"});
                    
                    if ( $(".menu-headline-main-float").children().length > 0 ) {
                    var resetID = $(".menu-headline-main-float > .menu-desc-wrapper").attr("id").slice(-2);
                    $("#menu-desc-wrapper-" + resetID ).appendTo( $( "#menu-headline-main-" + resetID ) );
                    }
                    
                    $("#float-menu a:nth-child(2)").css({color:"#1FBAD6"});
                    $("#float-menu a").not("#float-menu a:nth-child(2)").removeAttr( 'style' );
                    $(".float-menu-indicator").removeAttr( 'style' );
                    
                    $(".menu").velocity("fadeIn", 500, function(){
                                        
                                        
                                        loaded();
                                        });
                    $(".menu-label").addClass("font-white");
                    $("#s").focus();
                    $("#s").val("");
                    
                    
                    }

                    
                    $(window).on('hashchange', function() {

                          if ( (!window.location.hash) || (location.hash === "#main") ) {

                                 if ( $("#about-container").length ) {
                                 
                                 contentScroll.scrollTo(0, -1);
                                 $(".info-arrow-svg").removeClass("arrow-up");
                                 $(".section").removeClass("section-info");
                                 $(".content-nav").removeClass("content-nav-reveal");
                                 $(".content-nav span").addClass("nav-float-above");
                                 $("footer").removeClass("footerLeave");
                                 $(".menu-icon, .menu-label").removeClass("font-white");
                                 $("span.playground-obj").removeClass("blur");
                                 $(".header-mobile").removeClass("header-mobile-visible");
                                 
                                 }
                                 
                                 $("button").removeClass("close");
                                 $("#s").blur();
                                 $("#nav-search").removeClass("open");
                                 
                                 $(".menu-return").velocity({opacity:"0",translateX:"-0px"}, 500, [0.19, 1, 0.22, 1], function() {
                                                            $(".menu-return").css({display:"none"});
                                                            $(".menu-icon, .nav-divider").css({display:"inline-block"}).velocity({opacity:"1"}, 250);
                                                            });
                                 
                                 $(".menu").velocity("fadeOut", 250, function() {
                                                     
                                                     
                                                     // $("footer, .about-wrapper").removeClass("hide");
                                                     // $("#bgvid").removeClass("blur-noscale");
                                                     // $(".cover-wrapper, .cover-divider, .resources-wrapper, .changelog-wrapper").removeClass("fadeOut");
                                                     
                                                     
                                                     $(".menu").css({display:"none"});
                                                     $(".parallax").css({overflowY:"auto"});
                                                     
                                                     var $container = $('.menu-contents').packery();
                                                     $container.packery('destroy');
                                                     destroy();
                                                     $( ".menu-headline-main" ).css({verticalAlign:"top"});
                                                     
                                                     });
                                 
                                 if ( !$(".info-arrow-svg").hasClass("arrow-up") ) {
                                 $(".menu-icon, .menu-label").removeClass("font-white");
                                 $("span.playground-obj").removeClass("blur");
                                 }

                                 
                                 
                                 } else if (location.hash === "#about") {
                                 
                                 
                                 $(".scene-bg").removeClass("scene-bg-black");
                                 $("#tooltip-playground").velocity("fadeOut");
                                 $("#tooltip-down").velocity("fadeOut");
                                 $("#tooltip-menu").velocity("fadeOut");
                                 
                                 
                                 $(".info-arrow-svg").addClass("arrow-up");
                                 
                                 $(".header-mobile").addClass("header-mobile-visible");
                                 
                                 $(".section").addClass("section-info");
                                 $(".content-nav").addClass("content-nav-reveal");
                                 $(".content-nav span").removeClass("nav-float-above");
                                 $("footer").addClass("footerLeave");
                                 $(".menu-icon, .menu-label").addClass("font-white");
                                 $("span.playground-obj").addClass("blur");
                                 contentScroll.refresh();
                                 contentScroll.scrollTo(0, -1);

                                 $("button").removeClass("close");
                                 $("#s").blur();
                                 $("#nav-search").removeClass("open");
                                 
                                 $(".menu-return").velocity({opacity:"0",translateX:"-0px"}, 500, [0.19, 1, 0.22, 1], function() {
                                                            $(".menu-return").css({display:"none"});
                                                            $(".menu-icon, .nav-divider").css({display:"inline-block"}).velocity({opacity:"1"}, 250);
                                                            });
                                 
                                 $(".menu").velocity("fadeOut", 250, function() {
                                                     
                                                     
                                                     // $("footer, .about-wrapper").removeClass("hide");
                                                     // $("#bgvid").removeClass("blur-noscale");
                                                     // $(".cover-wrapper, .cover-divider, .resources-wrapper, .changelog-wrapper").removeClass("fadeOut");
                                                     
                                                     
                                                     $(".menu").css({display:"none"});
                                                     $(".parallax").css({overflowY:"auto"});
                                                     
                                                     var $container = $('.menu-contents').packery();
                                                     $container.packery('destroy');
                                                     destroy();
                                                     $( ".menu-headline-main" ).css({verticalAlign:"top"});
                                                     
                                                     });
                                 
                                 if ( !$(".info-arrow-svg").hasClass("arrow-up") ) {
                                 $(".menu-icon, .menu-label").removeClass("font-white");
                                 $("span.playground-obj").removeClass("blur");
                                 }
                                 
                                 
                                 
                                 } else if (location.hash === "#menu") {
                                 
                                 $("button").addClass("close");
                                 // $("footer, .about-wrapper").addClass("hide");
                                 $("#nav-search").addClass("open");
                                 $(".parallax").css({overflowY:"hidden"});
                                 $("span.playground-obj").addClass("blur");
                                 // $("#bgvid").addClass("blur-noscale");
                                 // $(".cover-wrapper, .cover-divider, .resources-wrapper, .changelog-wrapper").addClass("fadeOut");
                                 $("#wrapper, .menu-headline-main-float").css({opacity:"0"});
                                 
                                 
                                 $(".menu-icon, .nav-divider").velocity("fadeOut", 250, function() {
                                                                        $(".menu-return").css({display:"block"}).velocity({opacity:"1",translateX:"-35px"}, 500, [0.19, 1, 0.22, 1]);
                                                                        });
                                 
                                 
                                 $(".search-clear-wrapper").css({display:"none"});
                                 
                                 $( ".menu-headline-main" ).css({verticalAlign:"top"});
                                 
                                 if ( $(".menu-headline-main-float").children().length > 0 ) {
                                 var resetID = $(".menu-headline-main-float > .menu-desc-wrapper").attr("id").slice(-2);
                                 $("#menu-desc-wrapper-" + resetID ).appendTo( $( "#menu-headline-main-" + resetID ) );
                                 }
                                 
                                 $("#float-menu a:nth-child(2)").css({color:"#1FBAD6"});
                                 $("#float-menu a").not("#float-menu a:nth-child(2)").removeAttr( 'style' );
                                 $(".float-menu-indicator").removeAttr( 'style' );
                                 
                                 $(".menu").velocity("fadeIn", 500, function(){
                                                     
                                                     
                                                     loaded();
                                                     });
                                 $(".menu-label").addClass("font-white");
                                 $("#s").focus();
                                 $("#s").val("");
                                 
                                 
                                 }

                                 
//                                 if (!window.location.hash) {
//                                 leaveAbout();
//                                 menuLeave();
//                                 }
                                 
//                                   if (location.hash === "#main") {
//                                    leaveAbout();
//                                    menuLeave();
//                                   }
                                 
                    });
                    
                    // HIDE EMPTY DOWNLOAD LINKS
                    
                    function downloadLinks() {
                    
                    var assetLink = $(".download-item:nth-child(1)").attr("href");
                    var guidelineLink = $(".download-item:nth-child(2)").attr("href");
                    
                    if (assetLink=="") {
                    $(".download-item:nth-child(1)").css({display:"none"});
                    }
                    
                    if (guidelineLink=="") {
                    $(".download-item:nth-child(2)").css({display:"none"});
                    }
                    
                    if ( !$(".download-item:nth-child(1)").is(":visible") && !$(".download-item:nth-child(2)").is(":visible")  )
                    
                    $(".about-container .divider").css({display:"none"});
                    
                    }
                    
                    downloadLinks();
                    
                    
                    
                    
                    
                    // SEARCH TYPE
                    
                    ;(function($){
                      $.fn.extend({
                                  donetyping: function(callback,timeout){
                                  timeout = timeout || 1e3; // 1 second default timeout
                                  var timeoutReference,
                                  doneTyping = function(el){
                                  if (!timeoutReference) return;
                                  timeoutReference = null;
                                  callback.call(el);
                                  };
                                  return this.each(function(i,el){
                                                   var $el = $(el);
                                                   // Chrome Fix (Use keyup over keypress to detect backspace)
                                                   // thank you @palerdot
                                                   $el.is(':input') && $el.on('keyup keypress',function(e){
                                                                              // This catches the backspace button in chrome, but also prevents
                                                                              // the event from triggering too premptively. Without this line,
                                                                              // using tab/shift+tab will make the focused element fire the callback.
                                                                              
                                                                              if (e.type=='keyup' && e.keyCode!=8) return;
                                                                              
                                                                              // Check if timeout has been set. If it has, "reset" the clock and
                                                                              // start over again.
                                                                              if (timeoutReference) clearTimeout(timeoutReference);
                                                                              timeoutReference = setTimeout(function(){
                                                                                                            // if we made it here, our timeout has elapsed. Fire the
                                                                                                            // callback
                                                                                                            doneTyping(el);
                                                                                                            }, timeout);
                                                                              }).on('blur',function(){
                                                                                    // If we can, fire the event since we're leaving the field
                                                                                    doneTyping(el);
                                                                                    });
                                                   });
                                  }
                                  });
                      })(jQuery);
                    
                    $("#s").keypress(function(e) { // PREVENT ENTER
                                     if(e.keyCode == 13) {
                                     e.preventDefault();
                                     }
                                     });
                    
                    $('#s').donetyping(function(){
                                       searchField();
                                       });
                    
                    
                    // CLEAR SEARCH FIELD
                    
                    $(".search-span-wrapper").on("click", ".search-clear-wrapper", function() {
                                                 $("#s").val("");
                                                 $("#s").focus();
                                                 returnMenu();
                                                 });
                    
                    function searchField() { // RUN SEARCH
                    
                    
                    var str = $("#s").val();
                    var searchQuery = str.split(' ').join('+');
                    
                    if (searchQuery != "") { // IF THERE IS A SEARCH QUERY
                    
                    var isPaused = true;
                    $("#beacon").velocity("fadeIn");
                    
                    $("#menu-wrapper, #search-wrapper, .menu-headline-main-float, #float-menu").velocity("fadeOut", function() {
                                                                                                         
                                                                                                         myScrollMenu.refresh();
                                                                                                         
                                                                                                         // RESET FLOATING MENU DESCRIPTIONS
                                                                                                         
                                                                                                         if ( $(".menu-headline-main-float").children().length > 0 ) {
                                                                                                         var resetID = $(".menu-headline-main-float > .menu-desc-wrapper").attr("id").slice(-2);
                                                                                                         $("#menu-desc-wrapper-" + resetID ).appendTo( $( "#menu-headline-main-" + resetID ) );
                                                                                                         }
                                                                                                         
                                                                                                         $( ".menu-headline-main" ).css({verticalAlign:"top"});
                                                                                                         
                                                                                                         $('#search-wrapper').html("").load("https://brand.uber.com/?s=" + searchQuery, function() {
                                                                                                                                            
                                                                                                                                            setTimeout(function () {
                                                                                                                                                       var $searchcontainer = $('.search-contents').packery();
                                                                                                                                                       
                                                                                                                                                       
                                                                                                                                                       $searchcontainer.packery({
                                                                                                                                                                                itemSelector: '.search-box',
                                                                                                                                                                                gutter: 35
                                                                                                                                                                                });
                                                                                                                                                       }, 200);
                                                                                                                                            
                                                                                                                                            
                                                                                                                                            
                                                                                                                                            setTimeout(function () {
                                                                                                                                                       myScrollMenu.refresh();
                                                                                                                                                       }, 400);
                                                                                                                                            
                                                                                                                                            $("#beacon").velocity("fadeOut");
                                                                                                                                            var isPaused = false;
                                                                                                                                            $(".search-clear-wrapper").fadeIn();
                                                                                                                                            $("#search-wrapper").velocity("fadeIn", function() {
                                                                                                                                                                          // MENU IS READY
                                                                                                                                                                          });
                                                                                                                                            });
                                                                                                         });
                    
                    } else {  // IF NO QUERY
                    
                    returnMenu();
                    
                    }
                    
                    }
                    
                    var $container = $('.menu-contents').packery();
                    
                    $container.packery( 'on', 'layoutComplete',
                                       function( laidOutItems ) {
                                       myScrollMenu.refresh();
                                       }
                                       );
                    
                    
                    // RETURN TO MENU
                    
                    function returnMenu() {
                    
                    $(".search-clear-wrapper").fadeOut();
                    var isPaused = true;
                    $("#beacon").velocity("fadeIn");
                    
                    $("#float-menu a:nth-child(2)").css({color:"#1FBAD6"});
                    $("#float-menu a").not("#float-menu a:nth-child(2)").removeAttr( 'style' );
                    $(".float-menu-indicator").removeAttr( 'style' );
                    
                    $("#search-wrapper, #menu-wrapper").velocity("fadeOut", function() {
                                                                 $('#search-wrapper').html("");
                                                                 myScrollMenu.refresh();
                                                                 
                                                                 $("#menu-wrapper").css({display:"block",opacity:"0"});
                                                                 var $container = $('.menu-contents').packery();
                                                                 
                                                                 var currentWidth = $(window).width();
                                                                 
                                                                 if ( currentWidth > 991 ) {
                                                                 $("#float-menu").velocity("fadeIn");
                                                                 }
                                                                 
                                                                 $("#menu-wrapper, .menu-headline-main-float").velocity("fadeIn", function() {
                                                                                                                        $("#beacon").velocity("fadeOut");
                                                                                                                        var isPaused = false;
                                                                                                                        myScrollMenu.refresh();
                                                                                                                        // MENU LOADED
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        });
                                                                 });
                    
                    }
                    
                    
                    
                    // MENU - CLICK NAV
                    
                    $(".results-wrapper").on("click", ".float-menu-link", function() {
                                             var scrollItem = "#menu-" + $(this).attr("id");
                                             myScrollMenu.scrollToElement(scrollItem,650);
                                             });
                    
                    // CLICK TAB
                    
                    $("ul.tabs > li").click( function() {
                                            var tabPos = $(this).index()*100;
                                            var tabIndex = $(this).index()+1;
                                            var thisTab = $(".tab-selected").index()+1;
                                            
                                            if ( !$(this).hasClass("tab-selected") ) {
                                            
                                            $("#tab-scene-" + thisTab).velocity({opacity: "0"},500, function(){
                                                                                $("#tab-scene-" + thisTab).appendTo(".scene-hidden");
                                                                                $("#tab-scene-" + tabIndex).css({opacity:"0"}).appendTo("#section-canvas").velocity({opacity:"1"},500);
                                                                                });
                                            
                                            }
                                            
                                            $(".active-tab").css({
                                                                 transform: 'translateX(' + tabPos + '%)',
                                                                 MozTransform: 'translateX(' + tabPos + '%)',
                                                                 WebkitTransform: 'translateX(' + tabPos + '%)',
                                                                 msTransform: 'translateX(' + tabPos + '%)',
                                                                 });
                                            
                                            $(this).attr("class","tab-selected");
                                            $("ul.tabs > li").not(this).attr("class","tab");
                                            $(".hover-tab").addClass("hover-tab-hidden");
                                            
                                            });
                    
                    // HOVER TAB
                    
                    $("ul.tabs > li").hover( function() {
                                            var tabPos = $(this).index()*100;
                                            
                                            $(".hover-tab").css({
                                                                transform: 'translateX(' + tabPos + '%)',
                                                                MozTransform: 'translateX(' + tabPos + '%)',
                                                                WebkitTransform: 'translateX(' + tabPos + '%)',
                                                                msTransform: 'translateX(' + tabPos + '%)',
                                                                });
                                            
                                            $(".hover-tab").removeClass("hover-tab-hidden");
                                            $(".tabs").css({borderTop: "1px solid rgba(192, 192, 200, 1)"});
                                            
                                            }, function() {
                                            
                                            $(".hover-tab").addClass("hover-tab-hidden");
                                            $(".tabs").css({borderTop: ""});
                                            
                                            }
                                            
                                            );
                    
                    // HOVER ABOUT TABS
                    
                    $(".download-item").hover( function() {
                                              var aboutSliderPos = ($(this).index()-2)*100;
                                              
                                              $(".download-item").not(this).addClass("download-item-50");
                                              
                                              $(".about-slider").css({
                                                                     transform: 'translateX(' + aboutSliderPos + '%)',
                                                                     MozTransform: 'translateX(' + aboutSliderPos + '%)',
                                                                     WebkitTransform: 'translateX(' + aboutSliderPos + '%)',
                                                                     msTransform: 'translateX(' + aboutSliderPos + '%)',
                                                                     });
                                              
                                              $(".about-slider").removeClass("hover-tab-hidden");
                                              
                                              }, function() {
                                              
                                              $(".download-item").removeClass("download-item-50");
                                              $(".about-slider").addClass("hover-tab-hidden");
                                              
                                              }
                                              );
                    
                    // CLICK INFO ARROW
                    
                    $("#info-arrow").bind("click", arrowClick );
                    
                    function arrowClick() {
                    $(".info-arrow-svg").toggleClass("arrow-up");
                    $(".info-arrow-label").toggleClass("fadeOut");
                    $(".section").toggleClass("section-info");
                    $("footer").toggleClass("footerLeave");
                    
                    $(".menu-icon, .menu-label").toggleClass("font-white");
                    
                    if ( $(".info-arrow-svg").hasClass("arrow-up") ) {
                    $("span.playground-obj").addClass("blur");
                    } else {
                    $("span.playground-obj").removeClass("blur");
                    }
                    
                    }
                    
                    function leaveAbout() {
                    
                    if ( (location.hash != "#main") && (location.hash != "") ) {
                        window.history.back();
                    
                    }
                    
                    contentScroll.scrollTo(0, -1);
                    $(".info-arrow-svg").removeClass("arrow-up");
                    $(".section").removeClass("section-info");
                    $(".content-nav").removeClass("content-nav-reveal");
                    $(".content-nav span").addClass("nav-float-above");
                    $("footer").removeClass("footerLeave");
                    $(".menu-icon, .menu-label").removeClass("font-white");
                    $("span.playground-obj").removeClass("blur");
                    $(".header-mobile").removeClass("header-mobile-visible");

                    
                    }
                    
                    function enterAbout() {
                    
                    window.location.hash = '#about';
                    
                    $.cookie('tooltip_down', 'yes', { expires: 7, path: '/' });
                    
                    
                    
                    $(".scene-bg").removeClass("scene-bg-black");
                    $("#tooltip-playground").velocity("fadeOut");
                    $("#tooltip-down").velocity("fadeOut");
                    $("#tooltip-menu").velocity("fadeOut");
                    
                    
                    $(".info-arrow-svg").addClass("arrow-up");
                    
                    $(".header-mobile").addClass("header-mobile-visible");
                    
                    $(".section").addClass("section-info");
                    $(".content-nav").addClass("content-nav-reveal");
                    $(".content-nav span").removeClass("nav-float-above");
                    $("footer").addClass("footerLeave");
                    $(".menu-icon, .menu-label").addClass("font-white");
                    $("span.playground-obj").addClass("blur");
                    contentScroll.refresh();
                    contentScroll.scrollTo(0, -1);
                    }
                    
                    // IDLE
                    
                    //                    var timer;
                    
                    //                    $("footer").mouseenter( function(){
                    //                                           if (timer) {
                    //                                           clearTimeout(timer);
                    //                                           timer = 0;
                    //                                           }
                    //                                           $('.tabs li span:nth-child(2), #info-arrow').removeClass("footer-fadeOut");
                    //                                           $('footer, #info-arrow').removeClass("footer-idle");
                    
                    //                                           }).mouseleave( function() {
                    
                    //                                                         if ( !$(".info-arrow-svg").is(":hover") && !$(".info-arrow-svg").hasClass("arrow-up") ) {
                    
                    //                                                         timer = setTimeout(function() {
                    //                                                                            $('.tabs li span:nth-child(2), #info-arrow').addClass("footer-fadeOut");
                    //                                                                            $('footer, #info-arrow').addClass("footer-idle");
                    
                    //                                                                            }, 750);
                    
                    //                                                        }
                    //                                                         });
                    
                    
                    
                    
                    
                    // MENU
                    
                    $("#nav-search").click( function() {
                                           $.cookie('tooltip_menu', 'yes', { expires: 7, path: '/' });
                                           });
                    
                    
                    $("#nav-search, #cover-btn, .menu-return").bind("click", menuClick );
                    
                    function menuClick() {
                    
                    
                    $("#tooltip-playground").velocity("fadeOut");
                    $("#tooltip-menu").velocity("fadeOut");
                    $("#tooltip-down").velocity("fadeOut");
                    
                    if ( !$("#nav-search").hasClass("open") ) {  // MENU CLOSED
                    
                    
                    window.location.hash = '#menu';
                    
                    
                    } else {                            // MENU OPEN
                    
                    if ( $(".section").hasClass("section-info") ) {
                    window.history.back();
                    } else {
                    window.history.back();
                    }
                    
                    
                    }
                    
                    function menuLeave() {
                    
                    
                        if ( (location.hash != "#main") && (location.hash != "") && (location.hash != "#about") ) {
                        window.history.back();
                        }
                    
                        
                    
                    
                    }
                    }
                    
                    // HOVER PLAYGROUND-OBJ
                    
                    function enterPlayGroundObj() {
                    $(".playground-obj img:nth-child(1)").addClass("fadeOut");
                    $(".playground-obj img:nth-child(2)").removeClass("fadeOut");
                    
                    if ( $( ".playground-obj video:nth-child(2)" ).length == 0 ) {
                    $(".playground-obj video:nth-child(1)").addClass("fadeOut");
                    $(".playground-obj video:nth-child(2)").removeClass("fadeOut");
                    }
                    
                    
                    }
                    
                    function exitPlayGroundObj() {
                    $(".playground-obj img:nth-child(1)").removeClass("fadeOut");
                    $(".playground-obj img:nth-child(2)").addClass("fadeOut");
                    
                    if ( $( ".playground-obj video:nth-child(2)" ).length == 0 ) {
                    $(".playground-obj video:nth-child(1)").removeClass("fadeOut");
                    $(".playground-obj video:nth-child(2)").addClass("fadeOut");
                    }
                    }
                    
                    // HOVER PLAYGROUND-COLOR
                    
                    function enterPlayGroundColor() {
                    $(".scene-bg").addClass("scene-bg-black");
                    $(".info p:nth-child(3)").addClass("font-white");
                    $(".menu-icon, .menu-label").addClass("font-white");
                    $(".section").addClass("section-invert");
                    $(".playground-obj img:nth-child(1), .playground-obj img:nth-child(2), .playground-obj video:nth-child(1), .playground-obj video:nth-child(2)").addClass("fadeOut");
                    $(".playground-obj img:nth-child(3), .playground-obj video:nth-child(3)").removeClass("fadeOut");
                    $(".tab").addClass("tab-white");
                    }
                    
                    function exitPlayGroundColor() {
                    $(".scene-bg").removeClass("scene-bg-black");
                    $(".info p:nth-child(3)").removeClass("font-white");
                    $(".section").removeClass("section-invert");
                    
                    if ( !$(".info-arrow-svg").hasClass("arrow-up") ) {
                    $(".menu-icon, .menu-label").removeClass("font-white");
                    }
                    
                    $(".playground-obj img:nth-child(1), .playground-obj video:nth-child(1)").removeClass("fadeOut");
                    $(".playground-obj img:nth-child(3), .playground-obj img:nth-child(2), .playground-obj video:nth-child(3), .playground-obj video:nth-child(2)").addClass("fadeOut");
                    $(".tab").removeClass("tab-white");
                    }
                    
                    // HOVER PLAYGROUND-SIZE
                    
                    function enterPlayGroundSize() {
                    $(".playground-obj").css({ width: $(".playground-size").attr("data-min-size") });
                    $(".outer-guides-vert, .outer-motion").css({ width: $(".playground-size").attr("data-min-size"), marginLeft: -$(".playground-size").attr("data-min-size")/2 });
                    }
                    
                    function exitPlayGroundSize() {
                    $(".playground-obj").css({ width: "" });
                    $(".outer-guides-vert, .outer-motion").css({ width:"", marginLeft:"" });
                    }
                    
                    
                    // PLACE INFO-POINTS
                    
                    var origObjWidth = $("#tab-scene-1").attr("data-width");
                    var origObjHeight = $("#tab-scene-1").attr("data-height");
                    
                    function placeInfoPoints() {
                    
                    
                    
                    
                    var objWidth = parseInt($(".playground-obj").outerWidth())/2;
                    var objHeight = (objWidth*origObjHeight)/origObjWidth;
                    
                    $(".info-point").each( function() {
                                          
                                          var iMarginLeft = parseInt($(this).attr("data-margin-left"))/100;
                                          var iMarginTop = parseInt($(this).attr("data-margin-top"))/(-100);
                                          
                                          var xVal = iMarginLeft*objWidth;
                                          var yVal = iMarginTop*objHeight;
                                          
                                          $(this).css({marginLeft: xVal + "px", marginTop: yVal + "px"}); // PLACE POINTS
                                          
                                          if ( ( iMarginLeft <= -0.35 ) && ( iMarginTop >= -0.60 ) ) {
                                          $(this).find(".info").addClass("info-left");
                                          } else if ( ( iMarginLeft > 0.35 ) && ( iMarginTop >= -0.60 ) ) {
                                          $(this).find(".info").addClass("info-right");
                                          } else {
                                          $(this).find(".info").addClass("info-top");
                                          }
                                          
                                          
                                          
                                          });
                    
                    
                    $(".playground-box, .playground-color, .playground-size").each( function() {
                                                                                   var regionMarginLeft = (parseInt($(this).attr("data-left"))/2)+50;
                                                                                   var regionMarginTop =  -(parseInt($(this).attr("data-top"))/2)+50;
                                                                                   
                                                                                   $(this).css({left: regionMarginLeft + "%", top: regionMarginTop + "%"}); // PLACE POINTS
                                                                                   
                                                                                   });
                    }
                    
                    placeInfoPoints();
                    
                    var waitForFinalEvent = (function () {
                                             var timers = {};
                                             return function (callback, ms, uniqueId) {
                                             if (!uniqueId) {
                                             uniqueId = "Don't call this twice without a uniqueId";
                                             }
                                             if (timers[uniqueId]) {
                                             clearTimeout (timers[uniqueId]);
                                             }
                                             timers[uniqueId] = setTimeout(callback, ms);
                                             };
                                             })();
                    
                    
                    var rtime = new Date(1, 1, 2000, 12,00,00);
                    var timeout = false;
                    var delta = 200;
                    $(window).resize(function() {
                                     
                                     
                                     var currentWidth = $(window).width();
                                     
                                     if ( ( currentWidth > 991 ) && ( !$("#search-wrapper").is(':visible') ) ) {
                                     $("#float-menu").removeAttr( 'style' );
                                     }
                                     
                                     
                                     rtime = new Date();
                                     if (timeout === false) {
                                     timeout = true;
                                     setTimeout(resizeend, delta);
                                     }
                                     });
                    
                    function resizeend() {
                    if (new Date() - rtime < delta) {
                    setTimeout(resizeend, delta);
                    } else {
                    timeout = false;
                    placeInfoPoints();
                    
                    
                    }
                    }
                    
                    
                    
                    // HOVER PLAYGROUND
                    
                    $(".playground-clearspace, .playground-color, .playground-size, .playground-box").hover( function(){
                                                                                                            
                                                                                                            $("#tooltip-playground").velocity("fadeOut");
                                                                                                            $.cookie('tooltip_playground', 'yes', { expires: 7, path: '/' });
                                                                                                            
                                                                                                            var thisID = "#" + $(this).attr("id") + "-info";
                                                                                                            $(thisID + " .info").removeClass("fadeOut");
                                                                                                            $(thisID + " .info-left span").addClass("info-left-span-hover");
                                                                                                            $(thisID + " .info-right span").addClass("info-right-span-hover");
                                                                                                            $(thisID + " .info-top span").addClass("info-top-span-hover");
                                                                                                            
                                                                                                            $(".info-circle").removeClass("fadeOut-scale");
                                                                                                            $(".outer-guides-vert span, .outer-motion span").addClass("outer-guides-vert-hover");
                                                                                                            $(".outer-guides-horiz").addClass("outer-guides-horiz-hover");
                                                                                                            
                                                                                                            var i = 1;
                                                                                                            
                                                                                                            while (i <= 4) {  // LOOP 4 LINES
                                                                                                            $(".inner-guides span:nth-child(" + i + ")").addClass("inner-guides-" + i);
                                                                                                            i++;
                                                                                                            }
                                                                                                            
                                                                                                            if ( $(this).hasClass("playground-clearspace") ) {
                                                                                                            enterPlayGroundObj();
                                                                                                            } else if ( $(this).hasClass("playground-color") ) {
                                                                                                            enterPlayGroundColor();
                                                                                                            } else if ( $(this).hasClass("playground-size") ) {
                                                                                                            enterPlayGroundSize();
                                                                                                            $(".info-circle:not(" + thisID + " .info-circle)").addClass("fadeOut-scale");
                                                                                                            } else if ( $(this).hasClass("playground-box") ) {
                                                                                                            enterPlayGroundObj();
                                                                                                            }
                                                                                                            
                                                                                                            }, function(){
                                                                                                            
                                                                                                            var thisID = "#" + $(this).attr("id") + "-info";
                                                                                                            $(thisID + " .info").addClass("fadeOut");
                                                                                                            $(thisID + " .info-left span").removeClass("info-left-span-hover");
                                                                                                            $(thisID + " .info-right span").removeClass("info-right-span-hover");
                                                                                                            $(thisID + " .info-top span").removeClass("info-top-span-hover");
                                                                                                            
                                                                                                            $(".info-circle").addClass("fadeOut-scale");
                                                                                                            $(".outer-guides-vert span, .outer-motion span").removeClass("outer-guides-vert-hover");
                                                                                                            $(".outer-guides-horiz").removeClass("outer-guides-horiz-hover");
                                                                                                            var i = 1;
                                                                                                            
                                                                                                            while (i <= 4) {  // LOOP 4 LINES
                                                                                                            $(".inner-guides span:nth-child(" + i + ")").removeClass("inner-guides-" + i);
                                                                                                            i++;
                                                                                                            }
                                                                                                            exitPlayGroundObj();
                                                                                                            
                                                                                                            if ( $(this).hasClass("playground-clearspace") ) {
                                                                                                            exitPlayGroundObj();
                                                                                                            } else if ( $(this).hasClass("playground-color") ) {
                                                                                                            exitPlayGroundColor();
                                                                                                            } else if ( $(this).hasClass("playground-size") ) {
                                                                                                            exitPlayGroundSize();
                                                                                                            } else if ( $(this).hasClass("playground-box") ) {
                                                                                                            exitPlayGroundObj();
                                                                                                            }
                                                                                                            
                                                                                                            });
                    
                    
                    
                    
                    $('#playground-wrapper').bind('DOMMouseScroll', function(e){
                                                  if(e.originalEvent.detail > 0) {
                                                  //scroll down
                                                  enterAbout();
                                                  }else {
                                                  //scroll up
                                                  return false;
                                                  }
                                                  
                                                  //prevent page fom scrolling
                                                  return false;
                                                  });
                    
                    //IE, Opera, Safari
                    $('#playground-wrapper').bind('mousewheel', function(e){
                                                  if(e.originalEvent.wheelDelta < 0) {
                                                  //scroll down
                                                  enterAbout();
                                                  }else {
                                                  return false;
                                                  }
                                                  
                                                  //prevent page fom scrolling
                                                  return false;
                                                  });
                    
                    $(".circle-down, #readGuidelines").click( function() {
                                            enterAbout();
                                            });
                    
                    $(".explore-nav").click( function() {
                                            leaveAbout();
                                            });
                    
                    // CONTENT SCROLL
                    
                    var contentScroll;
                    
                    function contentScrollLoaded () {
                    
                    if ( $( "#about-container" ).length ) {
                    
                    contentScroll = new IScroll('#about-container', {
                                                scrollbars: true,
                                                mouseWheel: true,
                                                disableMouse: true,
                                                interactiveScrollbars: true,
                                                shrinkScrollbars: 'scale',
                                                fadeScrollbars: false,
                                                bounce: false,
                                                scrollY: true,
                                                interactiveScrollbars: true,
                                                probeType: 3,
                                                useTransition: false,
                                                tap: true,
                                                });
                    
                    $(".content-nav a:nth-child(2)").css({color:"#1FBAD6"});
                    
                    contentScroll.on('scroll', function () {
                                     
                                     var contentScrollY = -contentScroll.y;
                                     
                                     if ( ( contentScrollY == 0 ) ) {
                                     exitPlayGroundColor();
                                     leaveAbout();
                                     }
                                     
                                     $("article").each( function() {
                                                       
                                                       var contentY = $(this).position().top;
                                                       var contentHeight = $(this).outerHeight();
                                                       var contentIndex = $(this).index();
                                                       var contentNavIndex = $(this).index()+2;
                                                       
                                                       if (  contentScrollY >= contentY  ) {
                                                       
                                                       if ( $(".content-nav a:nth-child(" + contentNavIndex + ")").css("color") != "#1FBAD6" ) {
                                                       
                                                       $(".content-nav a:nth-child(" + contentNavIndex + ")").css({color:"#1FBAD6"});
                                                       $(".content-nav a").not(".content-nav a:nth-child(" + contentNavIndex + ")").removeAttr( 'style' );
                                                       
                                                       } else { return false; }
                                                       
                                                       
                                                       
                                                       var contentMovePercent = contentIndex*100 + "%";
                                                       $(".float-content-indicator").velocity("stop").velocity({translateY:contentMovePercent},500,[0.19, 1, 0.22, 1]);
                                                       } else {
                                                       return false;
                                                       }
                                                       });
                                     
                                     });
                    
                    }
                    }
                    
                    contentScrollLoaded();
                    
                    // CONTENT - CLICK NAV
                    
                    $(".content-nav").on("click", ".float-nav-link", function() {
                                         var clickIndex = $(this).index();
                                         var goToArticle = "article:nth-child(" + clickIndex + ")";
                                         
                                         if ( clickIndex == 1 ) {
                                         contentScroll.scrollTo(0, -1, 1000, IScroll.utils.ease.quadratic);
                                         } else {
                                         contentScroll.scrollToElement(goToArticle,650);
                                         }
                                         
                                         });
                    
                    // MENU SCROLL
                    
                    var myScrollMenu;
                    
                    
                    
                    
                    function loaded () {
                    
                    $('#search-wrapper').html("");
                    $( ".menu-headline-main" ).css({verticalAlign:"top"});
                    
                    var $container = $('.menu-contents').packery();
                    // init
                    $container.packery({
                                       itemSelector: '.menu-box',
                                       gutter: 8
                                       });
                    
                    
                    $('#wrapper').on('click, tap', '.menu-box', function() {
                                      var gotolink = $(this).attr("href");
                                      
                                      window.location.href = gotolink;
                                      
                                      });
                    
                    
                    $('#wrapper').on('click, tap', '.search-box', function() {
                                     var gotoslink = $(this).attr("href");
                                     
                                     window.location.href = gotoslink;
                                     
                                     });
                    
                    
                    $("#wrapper, #menu-wrapper, .menu-headline-main-float").velocity("fadeIn", function() {
                                                                                     
                                                                                     
                                                                                     myScrollMenu = new IScroll('#wrapper', {
                                                                                                                scrollbars: true,
                                                                                                                mouseWheel: true,
                                                                                                                disableMouse: true,
                                                                                                                interactiveScrollbars: true,
                                                                                                                shrinkScrollbars: 'scale',
                                                                                                                fadeScrollbars: false,
                                                                                                                bounce: false,
                                                                                                                scrollY: true,
                                                                                                                interactiveScrollbars: true,
                                                                                                                probeType: 3,
                                                                                                                useTransition: false,
                                                                                                                tap: true,
                                                                                                                });
                                                                                     
                                                                                     myScrollMenu.on('scroll', function () {
                                                                                                     
                                                                                                     var scrollY = -myScrollMenu.y;
                                                                                                     
                                                                                                     $(".menu-section").each( function() {
                                                                                                                             
                                                                                                                             var offsetYHeight = $(this).outerHeight()+$(this).position().top;
                                                                                                                             var sectionID = $(this).attr("id");
                                                                                                                             var floatID = "#menu-desc-wrapper-" + sectionID.slice(-2);
                                                                                                                             var headlineID = "#menu-headline-main-" + sectionID.slice(-2);
                                                                                                                             
                                                                                                                             var offsetY = parseInt($("#" + sectionID).position().top) + parseInt($("#" + sectionID).css("marginTop"));
                                                                                                                             var offsetYCopyHeight = (offsetYHeight + parseInt($("#" + sectionID).css("marginTop"))) - $(floatID).outerHeight();
                                                                                                                             
                                                                                                                             if (( scrollY >= offsetY ) && ( scrollY < offsetYCopyHeight )) {
                                                                                                                             
                                                                                                                             if ( $(headlineID).children().length > 0 ) {
                                                                                                                             $(this).find(".menu-desc-wrapper").appendTo(".menu-headline-main-float");
                                                                                                                             $(headlineID).css({verticalAlign:""});
                                                                                                                             
                                                                                                                             menuSectionIndex = $(this).index();
                                                                                                                             menuIndicatorY = menuSectionIndex*100 + "%";
                                                                                                                             menuSectionIndexN = menuSectionIndex+2;
                                                                                                                             $(".float-menu-indicator").velocity("stop").velocity({translateY:menuIndicatorY},500,[0.19, 1, 0.22, 1]);
                                                                                                                             $("#float-menu a:nth-child(" + menuSectionIndexN + ")").css({color:"#1FBAD6"});
                                                                                                                             $("#float-menu a").not("#float-menu a:nth-child(" + menuSectionIndexN + ")").removeAttr( 'style' );
                                                                                                                             
                                                                                                                             } else {
                                                                                                                             return false;
                                                                                                                             }
                                                                                                                             
                                                                                                                             
                                                                                                                             } else if ( scrollY > offsetYCopyHeight ) {
                                                                                                                             
                                                                                                                             
                                                                                                                             if ( $(headlineID).children().length == 0 ) {
                                                                                                                             $(floatID).appendTo( $(headlineID) );
                                                                                                                             $(headlineID).css({verticalAlign:"bottom"});
                                                                                                                             
                                                                                                                             menuSectionIndex = $(this).index()+1;
                                                                                                                             menuIndicatorY = menuSectionIndex*100 + "%";
                                                                                                                             menuSectionIndexN = menuSectionIndex+2;
                                                                                                                             $(".float-menu-indicator").velocity("stop").velocity({translateY:menuIndicatorY},500,[0.19, 1, 0.22, 1]);
                                                                                                                             $("#float-menu a:nth-child(" + menuSectionIndexN + ")").css({color:"#1FBAD6"});
                                                                                                                             $("#float-menu a").not("#float-menu a:nth-child(" + menuSectionIndexN + ")").removeAttr( 'style' );
                                                                                                                             }
                                                                                                                             
                                                                                                                             
                                                                                                                             } else if ( scrollY < offsetY ) {
                                                                                                                             
                                                                                                                             if ( $(headlineID).children().length == 0 ) {
                                                                                                                             $(floatID).appendTo( $(headlineID) );
                                                                                                                             $(headlineID).css({verticalAlign:"top"});
                                                                                                                             }
                                                                                                                             
                                                                                                                             }
                                                                                                                             
                                                                                                                             });
                                                                                                     
                                                                                                     });
                                                                                     
                                                                                     
                                                                                     });
                    
                    
                    
                    
                    
                    
                    }
                    
                    function destroy () {
                    myScrollMenu.destroy();
                    }
                    
                    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
                    
                    if ( $("#tab-scene-1").length ) {
                    var scene = document.getElementById('tab-scene-1');
                    var parallax = new Parallax(scene);
                    }
                    
                    
                    window.addEventListener('load', function(){
                                            
                                            var touchsurface = document.getElementById('tab-scene-1'),
                                            startX,
                                            startY,
                                            dist,
                                            threshold = 10, //required min distance traveled to be considered swipe
                                            allowedTime = 200, // maximum time allowed to travel that distance
                                            elapsedTime,
                                            startTime
                                            
                                            function handleswipe(isrightswipe){
                                            if (isrightswipe)
                                                enterAbout();
                                            else{
                                            }
                                            }
                                            
                                            touchsurface.addEventListener('touchstart', function(e){
                                                                          var touchobj = e.changedTouches[0]
                                                                          dist = 0
                                                                          startX = touchobj.pageX
                                                                          startY = touchobj.pageY
                                                                          startTime = new Date().getTime() // record time when finger first makes contact with surface
                                                                          e.preventDefault()
                                                                          }, false)
                                            
                                            touchsurface.addEventListener('touchmove', function(e){
                                                                          e.preventDefault() // prevent scrolling when inside DIV
                                                                          }, false)
                                            
                                            touchsurface.addEventListener('touchend', function(e){
                                                                          var touchobj = e.changedTouches[0]
                                                                          dist = startY - touchobj.pageY // get total dist traveled by finger while in contact with surface
                                                                          elapsedTime = new Date().getTime() - startTime // get time elapsed
                                                                          // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
                                                                          var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageX - startX) <= 100)
                                                                          handleswipe(swiperightBol)
                                                                          e.preventDefault()
                                                                          }, false)
                                            
                                            }, false) // end window.onload
                    
                    
                    
                    });