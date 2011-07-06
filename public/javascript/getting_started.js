 var BeesBox =
 
 {
 	show: function(url) {
                var overlay = document.createElement('div');
                overlay.setAttribute('id', 'beesbox_overlay');
                overlay.style.display = 'none';
                overlay.innerHTML = '<div id="beesbox_container">' +
                        '  <div class="header"><img id="beesbox_close" /></div>' +
                        '  <iframe id="beesbox_body" frameborder="0" scrolling="auto" allowTransparency="true"></iframe>' +
                        '</div>' +
                        '<div id="beesbox_scrim">&nbsp;</div>';
                    document.body.appendChild(overlay);

                var container   = document.getElementById('beesbox_container');
                var closeButton = document.getElementById('beesbox_close');
                var iframe      = document.getElementById('beesbox_body');                
                var scrim       = document.getElementById('beesbox_scrim');

                iframe.src = "mob.html";
                iframe.style.height = '500px';
                iframe.style.width = '700px';
                iframe.style.position = 'fixed';
                iframe.style.top = '30px';
                iframe.style.left = '30px';
                iframe.style.border = '2px solid';  
                
                overlay.style.display = "block"; 	

            }



 } 
