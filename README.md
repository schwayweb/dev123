# Javascript - Advanced Console Log for developers

## Description
Hide console logs, save your logs by categories/period, protect your logs by setup a password.

## Display logs
After you opened your console log press **CTRL+SHIFT+L** and the display settings popup will open.
If your logs is protected enter your password and the logs category. Else just enter your logs category or leave empty for all logs.

## How to use it
```
dev123.log(message, color, header, category);
```
- message[required]:  string or object ( your variable ex: console.log(message);  ). This
- color[optional]: "good", "error", "normal" ( good - green color, error - red color, normal - black color)
- header[optional]: Green header will be displayed before the log.
- category[optional]: helps you to display only logs from a custom category.
