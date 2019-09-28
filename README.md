# JS DEV123 - Advanced Console Log for developers 
This library is tested only in Google Chrome.

## Description 
Auto hide console logs, save your logs by categories/period, protect your logs by setup a password.
Instead of use *console.log("Hello");* you can use **dev123.log("Hello", "good");** and the message will be saved and displayed with green when you want to see it in console.

## Display logs
After you opened your console log press **CTRL+SHIFT+L**.
If your logs is protected enter your password and the logs category. Else just enter your logs category or leave empty for all logs.

## How to use it
```
dev123.log(message, color, header, category);
```
- **message**[required]:  string or object ( your variable ex: console.log(message);  ). This
- **color**[optional]: "good", "error", "normal" ( good - green color, error - red color, normal - black color)
- **header**[optional]: Green header will be displayed before the log.
- **category**[optional]: helps you to display only logs from a custom category.

## Example
```
var price = 10;
dev123.log(price, "good", "Price:", "price_category");
```

## How to set a password for your logs
```
dev123.pwd('your password');
```
**Attention!!!** Use it only for public data.Do not use this option for private data because this password can be cracked by hackers.

## How to set logs to be always visible in console 
```
dev123.visibility(true);
```

## How to set logs to be visible in all browsers (default value: Google Chrome)
```
dev123.allBrowsers(true);
```
