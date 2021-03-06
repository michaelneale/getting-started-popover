var BeesBox = function() {    
    var PublicInterface = {

                //data_url is url to the JSONP which provides the data, boxpage (optiona) is the html for the box
                show: function(data_url, boxpage, options) {

                        options = options || {};

                        var BEESBOX_HTML = "http://web-static-cloudfront.s3.amazonaws.com/components/gettingstarted/beesbox.html";
                        var overlay = document.createElement('div');

                        overlay.setAttribute('id', 'beesbox_overlay');
                        overlay.style.display = 'none';
                        overlay.innerHTML = '<style type="text/css"> .header {background-color: #575656;} .close { color: white; }</style>' +
                                '<div id="beesbox_container">' +
                                '  <div class="header"><a href="javascript: BeesBox.hide();" class="close">- Close -</a></div>' +
                                '  <iframe id="beesbox_body" frameborder="0" scrolling="auto" allowTransparency="true"></iframe>' +
                                '</div>' +
                                '<div id="beesbox_scrim">&nbsp;</div>';
                            document.body.appendChild(overlay);

                        var container   = document.getElementById('beesbox_container');
                        var closeButton = document.getElementById('beesbox_close');
                        var iframe      = document.getElementById('beesbox_body');                
                        var scrim       = document.getElementById('beesbox_scrim');

                        var top = options.top || 30;
                        var left = options.left || 30;
                        var height = options.height || 500;
                                

                        overlay.style.height = height + "px";
                        overlay.style.width = '700px';
                        overlay.style.position = 'fixed';
                        overlay.style.top = top + "px";
                        overlay.style.left = left + "px";
                        overlay.style.border = '2px solid';  
                       
                        url = boxpage || BEESBOX_HTML;

                        //iframe.src = "mob.html?_data_=http://localhost:9000/application/data";
                        iframe.src = url + "?_data_=" + data_url;
                        iframe.style.height = height + 'px';
                        iframe.style.width = '700px';
                        iframe.style.position = 'fixed';
                        iframe.style.top = (top + 20) + 'px';
                        iframe.style.left = left + 'px';
                        iframe.style.border = '2px solid';  
                        
                        overlay.style.display = "block";       

                    },

                    hide: function() {
                         document.body.removeChild(document.getElementById("beesbox_overlay"));    
                    }

        };  
        
        return PublicInterface;             

}();

/**

EXAMPLE JSONP: 

taskdata({
                                        "tasks" : { "Something" : "Yeah this works",
                                                                "Set up a build" : 
                                                                        "You can enable the Jenkins build service on your account <a href='http://grandcentral.cloudbees.com' target='_parent'>here</a>",
                                                                "Deploy an application" : 
                                                                        "Subscribe to the RUN@cloud application service here and imediately deploy apps",
                                                                "Create a automated selenium test suite" : 
                                                                        "Subscribe to the sauce labs service here.",
                                                                "Use a CouchDB database" :
                                                                        "Add the Cloudant CouchDB subscription to your account here (it is free !).",
                                                                "Analyse your code in your repositories":
                                                                        "With the sonar service - this requites the Build service to be subscribed."            
                                                },
                                        "completed" : ["Something"]                     

                                })

*/