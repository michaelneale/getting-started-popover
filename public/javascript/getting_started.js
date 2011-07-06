 function hide() {
         document.body.removeChild(document.getElementById("beesbox_overlay"));
 }


 var BeesBox =
 {


 	show: function(url) {

                var overlay = document.createElement('div');

                overlay.setAttribute('id', 'beesbox_overlay');
                overlay.style.display = 'none';
                overlay.innerHTML = '<style type="text/css"> .header {background-color: #575656;} .close { color: white; }</style>' +
                        '<div id="beesbox_container">' +
                        '  <div class="header"><a href="javascript: hide();" class="close">- Close -</a></div>' +
                        '  <iframe id="beesbox_body" frameborder="0" scrolling="auto" allowTransparency="true"></iframe>' +
                        '</div>' +
                        '<div id="beesbox_scrim">&nbsp;</div>';
                    document.body.appendChild(overlay);

                var container   = document.getElementById('beesbox_container');
                var closeButton = document.getElementById('beesbox_close');
                var iframe      = document.getElementById('beesbox_body');                
                var scrim       = document.getElementById('beesbox_scrim');

                //
                overlay.style.height = '500px';
                overlay.style.width = '700px';
                overlay.style.position = 'fixed';
                overlay.style.top = '30px';
                overlay.style.left = '30px';
                overlay.style.border = '2px solid';  

               
                iframe.src = "mob.html";
                iframe.style.height = '500px';
                iframe.style.width = '700px';
                iframe.style.position = 'fixed';
                //iframe.style.top = '50px';
                iframe.style.left = '30px';
                iframe.style.border = '2px solid';  
                
                
                 overlay.style.display = "block"; 	



            }



 }


 
 



