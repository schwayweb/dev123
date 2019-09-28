/**
 * Name: JS Dev123
 * Description: Javascript Advanced Console Log for developers. Hide console logs, save your logs by categories/period, set password for your logs...
 * Version: 1.0
 * Link: https://github.com/schwayweb/dev123
 * Licence: GPL v3 - https://www.gnu.org/licenses/gpl-3.0.en.html
 * Author: Schway
 * Author link: https://schway.me
 */

/* Developer Console CTRL+SHIFT+L - for starting */
if(dev123 === undefined
   && window.dev123 === undefined) {
    
    var dev123 = {
        visible: false,
        chrome: true,
        password: '',
        data: [],
        tries: 0,
        maxTries: 3,
        log: function(message, color, header, category){
                
            if(dev123.visible) {
                dev123.display(message, color, header, category);
            } else {
                dev123.save(message, color, header, category);
            }
        },
        start: function(){
            window.addEventListener("keypress", dev123.shortcut);
        },
        shortcut: function(e){
            if(e.keyCode === 12){
                dev123.autostart();
            }
        },
        autostart: function(){
            
            if(dev123.password !== '') {
                var password = prompt("Developer password:", "Type your developer password.");
                
                if(dev123.e(window.location.hostname, password) === dev123.password) {
                    dev123.show(category, password);
                    dev123.tries = 0;
                } else {
                    dev123.tries++;
                    
                    if(dev123.tries < dev123.maxTries) {
                        alert('Wrong developer password. Please try again.');
                        dev123.autostart();
                    } else {
                        alert('Wrong developer password.');
                    }
                }
            } else {
                var category = prompt("Category:", "Type your log category here or leave empty for all.");
                dev123.show(category);
            }
        },
        pwd: function(password){
            // Change Password
            dev123.password = dev123.e(window.location.hostname, password);
        },
        visibility: function(visible){
            dev123.visible = visible;
        },
        allBrowsers: function(){
            dev123.chrome = true;
        },
        show: function(category, password){
            
            if(password === dev123.password
               || dev123.password === '') {
                
                dev123.visible = true;
                
                if(category === undefined
                   || category === '') {
                    
                    for(var i in dev123.data) {
                        
                        if(dev123.data[i]['message'] !== undefined) {
                            dev123.display(dev123.data[i]);
                        } else {
                            // Display from Categories
                            for(var j=0; j<dev123.data[i].length; j++) {
                                dev123.display(dev123.data[i][j]);
                            }
                        }
                    } 
                } else {
                    
                    if(dev123.data[category] !== undefined){
                        
                        for(var i=0; i<dev123.data[category].length; i++) {
                            dev123.display(dev123.data[category][i]);
                        }
                    }
                }
            } else {
                return 'wrong password';
            }
            
            return '----------------------------------------------------------------------------------------------------------------';
        },
        save: function(message, color, header, category){
            var devData = [];
                devData['message'] = typeof message === 'string' ? '%c'+message:message;
                devData['color'] = typeof message === 'string' ? dev123.getColor(color):'';
                devData['header'] = header !== undefined ? header:'';
            
            // Save 
            if(category === undefined) {
                dev123.data.push(devData);
            } else {
                // Save by category
                if(dev123.data[category] === undefined) {
                    dev123.data[category] = [];
                }
                dev123.data[category].push(devData);
            }
        },
        display: function(message, color, header, category){
            var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            
            // Show all chrome or all browsers 
            isChrome = dev123.chrome ? isChrome:true;
            
            if(isChrome) {
                
                if(color !== undefined
                    && color !== '') {
                
                    if(header !== undefined
                        && header !== '') {
                        console.log('%c'+header, dev123.getColor('good')+' font-size:18px;');
                    }
                    
                    message = typeof message === 'string' ? '%c'+message:message;
                    color = typeof message === 'string' ? dev123.getColor(color):'';
                    
                    if(color !== '') {
                        console.log(message, color);
                    } else {
                        console.log(message);
                    }
                } else {
                    
                    if(typeof message === 'string') {
                        console.log(message);
                    } else if(typeof message === 'object') {
                        
                        // Header
                        if(message['header'] !== undefined
                           && message['header'] !== ''){
                            console.log('%c'+message['header'], dev123.getColor('good')+' font-size:18px;');
                        }
                        
                        // Message
                        console.log(message['message'], message['color']);
                    }
                }
            }
        },
        getColor: function (color){
            var retColor = dev123.normal();
            
            switch(color){
                case "error":
                    retColor = dev123.error();
                    break;
                case "good":
                    retColor = dev123.good();
                    break;
                default:
                    retColor = dev123.normal();
                    break;
            }
            
            return retColor;
        },
        good: function(){
            var color = 'background: #009900; color: #fff;';
            return color;
        },
        error: function(){
            var color = 'background: #ef4e5a; color: #fff;';
            return color;
        },
        normal: function(){
            var color = 'color: #000;';
            return color;
        },
        e: function(key, value) {
          var result="";
          for(i=0;i<value.length;++i) {
            result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i));
          }
          return result;
        }
    };
    
    // Start Dev123
    dev123.start();
    
    window.dev123 = dev123;
}