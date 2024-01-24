!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("axios")):"function"==typeof define&&define.amd?define(["react","axios"],t):(e=e||self).lib=t(e.React,e.axios)}(this,(function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function o(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}o('.deni-react-treeview-container {\n  font-family: tahoma,arial;\n  font-size: 12px;\n  padding: 0px;\n  overflow-x: auto;\n  overflow-y: auto;\n  border: solid 1px;\n  border-color: #a5c7e3;\n  width: 400px;\n  height: 350px;\n  background-color: #fafafa; }\n  .deni-react-treeview-container * {\n    box-sizing: border-box; }\n    .deni-react-treeview-container *.unselectable {\n      -webkit-touch-callout: none;\n      /* iOS Safari */\n      -webkit-user-select: none;\n      /* Chrome/Safari/Opera */\n      -khtml-user-select: none;\n      /* Konqueror */\n      -moz-user-select: none;\n      /* Firefox */\n      -ms-user-select: none;\n      /* Internet Explorer/Edge */\n      user-select: none;\n      /* Non-prefixed version, currently\n                                  not supported by any browser */ }\n  .deni-react-treeview-container.loading {\n    background-image: url("data:image/gif;base64,R0lGODlhEAAQALMMAKqooJGOhp2bk7e1rZ2bkre1rJCPhqqon8PBudDOxXd1bISCef///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAMACwAAAAAEAAQAAAET5DJyYyhmAZ7sxQEs1nMsmACGJKmSaVEOLXnK1PuBADepCiMg/DQ+/2GRI8RKOxJfpTCIJNIYArS6aRajWYZCASDa41Ow+Fx2YMWOyfpTAQAIfkEBQAADAAsAAAAABAAEAAABE6QyckEoZgKe7MEQMUxhoEd6FFdQWlOqTq15SlT9VQM3rQsjMKO5/n9hANixgjc9SQ/CgKRUSgw0ynFapVmGYkEg3v1gsPibg8tfk7CnggAIfkEBQAADAAsAAAAABAAEAAABE2QycnOoZjaA/IsRWV1goCBoMiUJTW8A0XMBPZmM4Ug3hQEjN2uZygahDyP0RBMEpmTRCKzWGCkUkq1SsFOFQrG1tr9gsPc3jnco4A9EQAh+QQFAAAMACwAAAAAEAAQAAAETpDJyUqhmFqbJ0LMIA7McWDfF5LmAVApOLUvLFMmlSTdJAiM3a73+wl5HYKSEET2lBSFIhMIYKRSimFriGIZiwWD2/WCw+Jt7xxeU9qZCAAh+QQFAAAMACwAAAAAEAAQAAAETZDJyRCimFqbZ0rVxgwF9n3hSJbeSQ2rCWIkpSjddBzMfee7nQ/XCfJ+OQYAQFksMgQBxumkEKLSCfVpMDCugqyW2w18xZmuwZycdDsRACH5BAUAAAwALAAAAAAQABAAAARNkMnJUqKYWpunUtXGIAj2feFIlt5JrWybkdSydNNQMLaND7pC79YBFnY+HENHMRgyhwPGaQhQotGm00oQMLBSLYPQ9QIASrLAq5x0OxEAIfkEBQAADAAsAAAAABAAEAAABE2QycmUopham+da1cYkCfZ94UiW3kmtbJuRlGF0E4Iwto3rut6tA9wFAjiJjkIgZAYDTLNJgUIpgqyAcTgwCuACJssAdL3gpLmbpLAzEQA7");\n    background-repeat: no-repeat;\n    background-position-x: 6px;\n    background-position-y: 6px; }\n');o('.deni-react-treeview-item-container {\n  align-items: center;\n  display: flex;\n  height: 22px;\n  margin-top: 2px;\n  margin-bottom: 3px;\n  width: 100%; }\n  .deni-react-treeview-item-container * {\n    box-sizing: border-box; }\n    .deni-react-treeview-item-container *.unselectable {\n      -webkit-touch-callout: none;\n      /* iOS Safari */\n      -webkit-user-select: none;\n      /* Chrome/Safari/Opera */\n      -khtml-user-select: none;\n      /* Konqueror */\n      -moz-user-select: none;\n      /* Firefox */\n      -ms-user-select: none;\n      /* Internet Explorer/Edge */\n      user-select: none;\n      /* Non-prefixed version, currently\n                                  not supported by any browser */ }\n  .deni-react-treeview-item-container.hidden {\n    display: none; }\n  .deni-react-treeview-item-container:hover.select-row {\n    border-style: dotted;\n    border-width: 1px;\n    border-color: silver;\n    background-color: transparent;\n    cursor: pointer;\n    border-left: 0;\n    border-right: 0;\n    z-index: 1; }\n    .deni-react-treeview-item-container:hover.select-row.selected {\n      border-top: 0;\n      border-bottom: 0; }\n  .deni-react-treeview-item-container:hover .action-button {\n    visibility: visible;\n    opacity: 1; }\n  .deni-react-treeview-item-container.selected {\n    outline: solid 1px;\n    outline-color: #ebf3f9;\n    z-index: 2; }\n  .deni-react-treeview-item-container .expand-button {\n    width: 18px;\n    height: 16px;\n    color: #245075;\n    font-size: 22px;\n    padding-top: 0px;\n    cursor: pointer;\n    text-align: center;\n    align-items: center;\n    display: none;\n    flex-direction: row;\n    font-family: courier new;\n    font-weight: bold; }\n    .deni-react-treeview-item-container .expand-button.hasChild {\n      display: flex; }\n    .deni-react-treeview-item-container .expand-button.expanded {\n      font-size: 24px; }\n      .deni-react-treeview-item-container .expand-button.expanded:before {\n        content: \'-\'; }\n    .deni-react-treeview-item-container .expand-button.colapsed:before {\n      content: \'+\'; }\n    .deni-react-treeview-item-container .expand-button.loading {\n      background-image: url("data:image/gif;base64,R0lGODlhEAAQALMMAKqooJGOhp2bk7e1rZ2bkre1rJCPhqqon8PBudDOxXd1bISCef///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAMACwAAAAAEAAQAAAET5DJyYyhmAZ7sxQEs1nMsmACGJKmSaVEOLXnK1PuBADepCiMg/DQ+/2GRI8RKOxJfpTCIJNIYArS6aRajWYZCASDa41Ow+Fx2YMWOyfpTAQAIfkEBQAADAAsAAAAABAAEAAABE6QyckEoZgKe7MEQMUxhoEd6FFdQWlOqTq15SlT9VQM3rQsjMKO5/n9hANixgjc9SQ/CgKRUSgw0ynFapVmGYkEg3v1gsPibg8tfk7CnggAIfkEBQAADAAsAAAAABAAEAAABE2QycnOoZjaA/IsRWV1goCBoMiUJTW8A0XMBPZmM4Ug3hQEjN2uZygahDyP0RBMEpmTRCKzWGCkUkq1SsFOFQrG1tr9gsPc3jnco4A9EQAh+QQFAAAMACwAAAAAEAAQAAAETpDJyUqhmFqbJ0LMIA7McWDfF5LmAVApOLUvLFMmlSTdJAiM3a73+wl5HYKSEET2lBSFIhMIYKRSimFriGIZiwWD2/WCw+Jt7xxeU9qZCAAh+QQFAAAMACwAAAAAEAAQAAAETZDJyRCimFqbZ0rVxgwF9n3hSJbeSQ2rCWIkpSjddBzMfee7nQ/XCfJ+OQYAQFksMgQBxumkEKLSCfVpMDCugqyW2w18xZmuwZycdDsRACH5BAUAAAwALAAAAAAQABAAAARNkMnJUqKYWpunUtXGIAj2feFIlt5JrWybkdSydNNQMLaND7pC79YBFnY+HENHMRgyhwPGaQhQotGm00oQMLBSLYPQ9QIASrLAq5x0OxEAIfkEBQAADAAsAAAAABAAEAAABE2QycmUopham+da1cYkCfZ94UiW3kmtbJuRlGF0E4Iwto3rut6tA9wFAjiJjkIgZAYDTLNJgUIpgqyAcTgwCuACJssAdL3gpLmbpLAzEQA7");\n      background-repeat: no-repeat; }\n      .deni-react-treeview-item-container .expand-button.loading:before {\n        content: \' \'; }\n    .deni-react-treeview-item-container .expand-button:hover {\n      color: #282d3e; }\n  .deni-react-treeview-item-container .checkbox {\n    width: 14px;\n    height: 14px;\n    border: solid 1px;\n    border-color: #adcce6;\n    border-radius: 2px;\n    display: inline-table;\n    cursor: pointer;\n    margin-right: 3px; }\n    .deni-react-treeview-item-container .checkbox.hidden {\n      display: none; }\n    .deni-react-treeview-item-container .checkbox.checked {\n      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcUlEQVQ4jZVR30tTcRw99/u9P5x36s1fA5d1lZWYpTdfCtRtiQmbmflWgTF78qnsL7D9BfPFBymSwEgjKE3QCKYPRmWml0TIDF1mc0NzVzc3NnW3hzBERul5/HDO+ZzP+TA4CrohE4Z08JSXBcr7eMrdY48glghDRq/JTtksFmB5y4+Pa1MyOayeMrT9krlGtpmrYUwzwH68Bpl8uv1QCbgHrCJyYodTrsf32AIAQGeSAAgOlYAlrOdW6XXwHIuoHkFZdjk+rargCNf5X4P0RwZXaXaJvdKk4GdiCeXZlQhEg5j5NeujhLr/nNAFBQQKGKhog7onzugxSoQhHlfZTYSTGnINeRA5I57NvQBL2NbJJlUj6ILHIhVNO07W9eSkHZtGNzz7ivM0WZxSrpiDLYRRnHEK71cmEN2Jdk42qWMAwIJB++2yFhg4AZflWvTO9bfPPvwiiZzhcX56nuuqpQGBnWVYMkrgj6xgKqj6KEPde0sIGMDIi1hLrGJzN4Q759tgL6xyUUJHW8+1YIckIPIiOMJj6NswKKHN7xontb8p0QgplNAu2s1WxPUY4noMtkIbiiUZFaaz2MA6ThiK4PWNYUHzud9emejbXzLFEF77awPy5vamYjNbEUcca7tBVORUIIwN5KeZ4A8HMPR1WB1v+HDj4JcoAOiv9IFQvSZHtiNKdUEVCGWwmgwik8+CgYjo/fwU28mEw/fkRyClAQDEXyYGYo6YPB+aV6zmGmQJmcgTTPAujmFBW3R7HeN9B8Upceb56R7nmzp9cL1f717q1OtGrNP/4jOphhcGK+8LVLgrUF6jhDaP1HvVVDwA+A0rr9F+/wY4EQAAAABJRU5ErkJggg==");\n      background-size: 10px 10px;\n      background-color: transparent;\n      background-repeat: no-repeat;\n      background-position: center; }\n    .deni-react-treeview-item-container .checkbox.undetermined {\n      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA4SURBVChTY3iDF4Ckf/z5gRVBpZ9/e44VQaWvvr969cNVTBIqfeTlEawIKr3n2R6siB7SOMGbNwBflQU0aOd8igAAAABJRU5ErkJggg==");\n      background-size: 10px 10px;\n      background-color: transparent;\n      background-repeat: no-repeat;\n      background-position: center; }\n    .deni-react-treeview-item-container .checkbox.selected {\n      border-color: #629ecf;\n      background-color: white; }\n  .deni-react-treeview-item-container .icon-and-text {\n    display: flex;\n    align-items: center;\n    padding-left: 5px;\n    padding-right: 5px;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 22px; }\n    .deni-react-treeview-item-container .icon-and-text.select-row {\n      flex: 1;\n      justify-content: space-around; }\n      .deni-react-treeview-item-container .icon-and-text.select-row:hover {\n        border-width: 0px;\n        padding-left: 5px; }\n    .deni-react-treeview-item-container .icon-and-text:hover {\n      border-style: dotted;\n      border-width: 1px;\n      border-color: silver;\n      background-color: transparent;\n      padding-left: calc(5px - 1px); }\n    .deni-react-treeview-item-container .icon-and-text.selected {\n      border: 1px solid;\n      border-color: #95bddf;\n      padding-left: calc(5px - 1px);\n      background: #ebf3f9;\n      /* Old browsers */\n      background: -moz-linear-gradient(top, #ebf3f9 0%, #9DC2E1 100%);\n      /* FF3.6-15 */\n      background: -webkit-linear-gradient(top, #ebf3f9 0%, #9DC2E1 100%);\n      /* Chrome10-25,Safari5.1-6 */\n      background: linear-gradient(to bottom, #ebf3f9 0%, #9DC2E1 100%);\n      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$selection-background-start-color, endColorstr=$end-color,GradientType=0 );\n      /* IE6-9 */ }\n    .deni-react-treeview-item-container .icon-and-text .icon {\n      width: 16px;\n      height: 16px;\n      display: inline-block;\n      background-repeat: no-repeat;\n      margin-right: 5px;\n      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARlJREFUeNqsUz1PwzAUPDtOUASpYKkQVWcQA/+DhbLA32CoKAMSTAwgFsQfQWLoX4GRDFXGIiqiyk4e7wUWmg8phJPOtvzunc6WrYgIXaD06KKhij0eD2uqUxBeDC9OmcNKCYd7ujm7ryodXz5ong6UPpqcP9+O76y1vwS+7yOOY1jr0OttlQyiaB0n148TAyK9XFqkaboiSTEYDNnkDUkyKxkkiSQkzQbwsiyHcBXz+Tv6/W1m+QiSEDT1igTO5RBWYbH4rNwPw/AnQU5ek0EdCj33SgLjHEHYzoAkgfmHBDmZuktsQqHPvxN0MyCbbWjtIQjWWhlIj/QqtT+6QrSz+6ef9DF7VTwFzE2madnu5K2prt/5S4ABADcIlSf6Ag8YAAAAAElFTkSuQmCC"); }\n      .deni-react-treeview-item-container .icon-and-text .icon.hidden {\n        display: none; }\n      .deni-react-treeview-item-container .icon-and-text .icon.isleaf {\n        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACjElEQVR42o2SW0hUURSG/32OhnhAqJDCzF6kN0lLGtJCtLQyKIMotRjBy1sqVEZS9mKZBdKFHBJpJEKD0urBvAchhqY5kp6MHkRlMhpHR2fOHuZybu3KxhEr+/fL3g/rWx9rL4Kl1La+ta0XwiNUTVf9sgJF0yB5FVCfAqt9Lnx8yt7Ph4Qc6btVtIigkN+XJ28s9MTeHQLPETipF3aXB7NOJ2wLXnyamYVlwgq/jN5Fj+9QX3WhZxXg8ethmpMSzwA666rDxSBOKsHhViBa7XC5ndgWuRH1PSP9XlnJZJDFFYBHXe/p6bQEIanoGTZECJDhh98jg6gc5ue+oqwkBXlp8TB3WfBiYLx3yuYwiqbS6QDA3DVEjWk7BZ7n8Kc09IzAEBsFm+RG6+BndFsmhsdMxYkBwIO2d7QwI1HIrmgH0XmEMo7MA5qiQ9PZQF0SrDNOpBq2YPPWcLT0i+KYqTQuALjzvJeePZr8V4Nf0fHF4cD49DzKHnaKo7Uly4Cqpg568WS6kH21GxpREIZQEKKxEo4ZaXDJfrgWJBwwxGBPfDTONbxigOJlQLm5jVYaD65hAHgUP77ZKY5fbxI/BAPOm9vpTWOGkH2lExzHIKwrYYcnPNQwnhnpkKjGukciddcm5N9tFkdNJasBaxnouo5J2wKOVTaKYjDggrmDVhvThVOX2S9wPOu8tGnk5+zAMRPqk7HfEI2kuEjk32tmvxAEKK1rpTUFh9c00JjBFDPIYgYrAAW3W2hdcZaQU9GGdWwJOMIFCnRNxY+X5FaxLyEK6ckxOFPzdCUg90YjbbyUK+A/Mk89yCyvFwfvBy1SbF6VLWF7TIRPUdV/FRNNh6qowsDHyaG5l9d2fwfyXD4gAGnljAAAAABJRU5ErkJggg=="); }\n      .deni-react-treeview-item-container .icon-and-text .icon.expanded {\n        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZpJREFUeNqkU0tLQkEUPjN3ShAzF66CaNGiaNEviFpLgbSpXf2ACIqgFkELaVFhtAratQ8qokU/oFVbMQtJvWpWGvYwtet9TWfu1QorvOGBb84M5/WdOTOEcw7tCKHBlT8sMIhr4BfLGXC4BrALM8QUoveHG9oPQ/NhwVCQbOjp0C5F6zDiwE7Aed/p5tKWruufTlY8bkqliqVN8wvH6wvhydWd5UYdkYCqqgaKotQTCEewnJuDBSqVmshOrWhKgCJVqeHcKtiGKdqTgGIOQmwGum7AxVUKinXKzX1/1y5Xp6g8gpe8iBxuGZhcKjyXQZIkmBkfczS62YnRQCKX75/b3t8QDNhD8QX83V5Ipe7Bybug2Pt5NJ7A4nEqGOQKT+Bzu0HTDNB1syUYYxCJy0kwzIRogb0rKjAiQVXXHLVQrqqvsZtsFu8hbyXwe73WeMQtO5GonJGxuiyeC+Oa4fF5PEirw9nbx9FdxtN5eMwkzcgRnoeCa9DVM/CvH/R2l+axkz3clQguOFjw1f+FUzEQCqJG2v3OHwIMAOW1JPnAAAJxAAAAAElFTkSuQmCC"); }\n    .deni-react-treeview-item-container .icon-and-text .text {\n      display: inline-block;\n      height: 22px;\n      align-items: center;\n      display: flex;\n      flex: 1;\n      justify-content: flex-start; }\n      .deni-react-treeview-item-container .icon-and-text .text .text-inner {\n        white-space: nowrap;\n        flex: 1;\n        height: 22px;\n        align-items: center;\n        flex-direction: row;\n        display: flex; }\n');o(".action-buttons-container {\n  display: flex;\n  flex: 1;\n  justify-content: space-around; }\n  .action-buttons-container .action-buttons-container-text {\n    flex: 1;\n    justify-content: space-around; }\n  .action-buttons-container .action-button {\n    margin-right: 5px;\n    cursor: pointer;\n    opacity: 0.3;\n    visibility: hidden; }\n");var i=function(t){function n(e){return t.call(this,e)||this}return r(n,t),n.prototype.onClick=function(e,t){console.log(this.props.onActionButtonClick),alert("sdjçflsjdflkdsjflçkdsj")},n.prototype.render=function(){var t=this,n=this.props.buttons.map((function(n,r){return e.createElement("span",{key:r,className:"action-button",onClick:t.props.onActionButtonClick?t.props.onActionButtonClick.bind(t,t.props.item,n):void 0},n)}));return e.createElement("div",{className:"action-buttons-container"},e.createElement("span",{className:"action-buttons-container-text"},this.props.item.text),n)},n}(e.Component),a=1,c=2,s=3,d=function(e,t){return e.state.selectedItem===t},A=function(e,t,n,r){var o=["deni-react-treeview-item-container"];return o.push("unselectable"),!0===t.root&&!1===e.props.showRoot?o.push("hidden"):(o.push(e.state.theme),o.push("level-"+n),r&&(o.push("select-row"),d(e,t)&&o.push("selected"))),o.join(" ")},p=function(e,t){var n=["icon"];return!1===e.props.showIcon?n.push("hidden"):(!t.isLeaf||t.children&&t.children.length>0||n.push("isleaf"),t.expanded&&n.push("expanded")),n.join(" ")},l=function(e,t,n){var r=["expand-button"];return(n.children&&n.children.length>0||!n.isLeaf&&e.props.lazyLoad)&&(r.push("hasChild"),n.expanded?r.push("expanded"):r.push("colapsed")),t.state.loading&&r.push("loading"),d(e,n)&&r.push("selected"),r.join(" ")},u=function(e,t){var n=["checkbox"];return e.props.showCheckbox?(t.state===a?n.push("checked"):t.state===s&&n.push("undetermined"),d(e,t)&&n.push("selected")):n.push("hidden"),n.join(" ")},f=function(e,t,n){var r=["icon-and-text"];return n&&r.push("select-row"),!n&&d(e,t)&&r.push("selected"),r.join(" ")},h=function(e,t,n,r){},m=function(e,t,n,r){if(e.state.selectedItem!==t){var o=r.target,i=function(){e.setState({selectedItem:t})};if((n||o.classList.contains("icon-and-text")||o.classList.contains("icon")||o.classList.contains("text-inner")||o.classList.contains("text")||o.classList.contains("action-buttons-container-text"))&&i(),e.props.onSelectItem)(e.props.selectRow&&r.target.classList.contains("deni-react-treeview-item-container")||!e.props.selectRow&&r.target.classList.contains("text-inner"))&&e.props.onSelectItem(t)}},g=function(e,t,n){var r=function(){n.expanded=!n.expanded,e.setState({selectedItem:n}),e.setState({loading:!1}),t.setState({loading:!1})};n.expanded?(r(),e.props.onColapsed&&e.props.onColapsed(n)):(e.props.lazyLoad?(e.setState({loading:!0}),t.setState({loading:!0}),e.props.lazyLoad&&e.props.onLazyLoad?e.props.onLazyLoad(n,(function(t){e.api.loadData(e,t,n),r()})):e.api.load(n).then((function(e){return r()}))):r(),e.props.onExpanded&&e.props.onExpanded(n))},x=function(e,t){E(t)?b(e,t):w(e,t),e.setState({selectedItem:t}),e.props.onCheckItem&&e.props.onCheckItem(t)},w=function(e,t){t.state=a,v(t),y(e)},b=function(e,t){t.state=c,v(t),y(e)},v=function(e){e.children&&e.children.forEach((function(t){t.state=e.state,v(t)}))},y=function(e){var t=e.props.parent;if(t){var n=t.props.item.children;if(function(e){for(var t=0;t<e.length;t++){var n=e[t];if(!E(n))return!1}return!0}(n))t.props.item.state=a;else{var r=function(e){for(var t=0;t<e.length;t++){var n=e[t];if(!Q(n))return!1}return!0}(n);t.props.item.state=r?c:s}y(t)}},E=function(e){return e.state===a},Q=function(e){return e.state===c},k=function(t){function n(e){var n=t.call(this,e)||this;return n.state={loading:!1},n}return r(n,t),n.prototype.render=function(){var t=this.props,n=t.treeview,r=t.item,o=t.level,a=n.props,c=a.selectRow,s=a.marginItems,d=s?parseInt(s.toString()):30,w={paddingLeft:5+(0===o?0:n.props.showRoot?o*d:(o-1)*d)+"px"};return!n.props.showRoot&&this.props.root&&(w.display="none"),e.createElement("div",{style:w,className:A(n,r,o,c),onMouseDown:m.bind(this,this.props.treeview,r,c),onDoubleClick:h.bind(this,g,this.props.treeview,this,c)},e.createElement("div",{className:l(n,this,r),onMouseDown:g.bind(this,this.props.treeview,this,r)}),e.createElement("div",{className:u(n,r),onMouseDown:x.bind(this,this.props.treeview,r)}),e.createElement("div",{className:f(n,r,c)},e.createElement("div",{className:p(n,r)}),e.createElement("div",{className:"text"},e.createElement("span",{className:"text-inner"},function(t,n){return t.props.actionButtons?e.createElement(i,{onActionButtonClick:t.props.onActionButtonClick,buttons:t.props.actionButtons,item:n}):t.props.onRenderItem?t.props.onRenderItem(n,t):n.text}(n,r)))))},n}(e.Component),I=function(){function e(){}return e.addItem=function(e,t,n,r){var o=r||e.state.selectedItem||e.state.rootItem;if(!o)throw new Error("You must specify a parent node!");var i={text:t,children:[],isLeaf:n};return o.children=o.children||[],o.children.push(i),o.expanded=!0,S(e,i),i},e.findFolder=function(e,t){var n=F(t),r=C(e.state.rootItem.children,n);if(r&&!0!==n.isLeaf)return r;throw new Error("Folder not found!")},e.findItem=function(e,t){var n=F(t);n.isLeaf=!0;var r=C(e.state.rootItem.children,n);if(r)return r;throw new Error("Item not found!")},e.findNode=function(e,t){var n=F(t),r=C(e.state.rootItem.children,n);if(r)return r;throw new Error("Node not found!")},e.expandAll=function(e){!function e(t){t.children&&t.children.forEach((function(t){t.children&&(t.expanded=!0,e(t))}))}(e.state.rootItem)},e.getItems=function(e){return e.state.rootItem.children||[]},e.getParentNode=function(e,t){return B(e,t||e.state.selectedItem)},e.getRootItem=function(e){return e.state.rootItem},e.getSelectedItem=function(e){return e.state.selectedItem},e.removeItem=function(e,t){var n=e.api.findNode(t),r=B(e,n),o=r.children.findIndex((function(e){return e.id===n.id}));r.children.splice(o,1),e.state.selectedItem&&e.state.selectedItem.id===t&&e.setState({selectedItem:void 0}),e.forceUpdate()},e.selectItem=function(e,t){var n=e.api.findNode(t);if(!n)throw new Error("Item not found.");S(e,n)},e}();function C(e,t){for(var n=t?Object.keys(t):[],r=0;r<e.length;r++){for(var o=e[r],i=!0,a=0;a<n.length;a++){var c=n[a];o[c]!==t[c]&&(i=!1)}if(i)return o;if(o.children){var s=C(o.children,t);if(s)return s}}return null}function B(e,t,n){for(var r=n||e.state.rootItem,o=r.children,i=0;i<o.length;i++){var a=o[i];if(a.id===t.id)return r;if(a.children){var c=B(e,t,a);if(c)return c}}}function F(e){var t={};if("number"==typeof e||"string"==typeof e)t.id=e;else{if("object"!=typeof e)throw new Error("Parameter set in a wrong way.");t=e}return t}function S(e,t){(function(e,t){for(var n=[],r=t;(r=B(e,r))&&(!r.root||e.props.showRoot);)n.push(r);return n})(e,t).forEach((function(e){e.expanded||(e.expanded=!0)})),e.setState({selectedItem:t}),setTimeout((function(){if(e.container){var t=void 0;if(e.props.selectRow)t=e.container.querySelector(".deni-react-treeview-item-container.selected");else{var n=e.container.querySelector(".icon-and-text.selected");n&&(t=n.closest(".deni-react-treeview-item-container"))}t&&t.scrollIntoViewIfNeeded()}})),e.props.onSelectItem&&e.props.onSelectItem(t)}var N={id:-1,text:"root",expanded:!0,root:!0},D=function(e,t){var n=t||"classic";require("../styles/themes/"+n+"-theme.scss"),e.setState({theme:n})},O=function(e,t,n){var r=t||[];if(e.props.onBeforeLoad&&e.props.onBeforeLoad(r,n),n){if(!(r instanceof Array))throw new Error("When item param is set the data must be an array.");n.children=r}else e.setState({rootItem:R(r)});e.props.onAfterLoad&&e.props.onAfterLoad(r,n)};function R(e){var t=Object.assign({},N);if(e){if(e instanceof Array)t.children=e;else{if(!(e instanceof Object))throw new Error('Parameter "items" adjusted in a wrong way.');t=e}return t}return null}var L=function(e){return{addItem:function(t,n,r){return I.addItem(e,t,n,r)},findFolder:function(t){return I.findFolder(e,t)},expandAll:function(){I.expandAll(e)},findNode:function(t){return I.findNode(e,t)},findItem:function(t){return I.findItem(e,t)},getItems:function(){return I.getItems(e)},getParentNode:function(t){return I.getParentNode(e,t)},getRootItem:function(){return I.getRootItem(e)},getSelectedItem:function(){return I.getSelectedItem(e)},load:function(n){return function(e,n){return e.setState({loading:!0}),new Promise((function(r,o){if(e.props.url||e.props.json){var i=e.props.url||e.props.json;if(e.props.lazyLoad){var a=n||e.state.rootItem||N;delete a.children,i+="?lazyLoad=true&item="+JSON.stringify(a)}t.get(i).then((function(t){e.setState({loading:!1}),e.api.loadData(e,t.data,n),r(t.data)})).catch((function(e){console.error("Error loading data: "+e.message)}))}else if(e.props.lazyLoad)e.setState({loading:!1}),o("TODO: under construction");else{e.setState({loading:!1});var c="To use load function you must define lazyLoad:true or a valid url.";console.error(c),o(c)}}))}(e,n)},loadData:O.bind(e),removeItem:function(t){I.removeItem(e,t)},selectItem:function(t){I.selectItem(e,t)},setTheme:function(t){D(e,t)}}};return function(t){function n(e){var n=t.call(this,e)||this;return n.state={loading:!1,theme:e.theme||"classic",expandAll:e.expandAll},n.expandAllFinished=n.expandAllFinished.bind(n),n}return r(n,t),n.prototype.componentDidUpdate=function(e,t){var n=this.props.items,r=this.api.getRootItem();e.items!==n&&(r.children=n),t.rootItem!==r&&this.state.expandAll&&this.expandAllFinished()},n.prototype.componentDidMount=function(){var e;this.api=L(this),D(this,this.props.theme||"classic"),(e=this).props.url||e.props.json||e.props.lazyLoad?!1!==e.props.autoLoad&&e.api.load():e.props.items&&e.api.loadData(e,e.props.items)},n.prototype.expandAllFinished=function(){this.setState({expandAll:!1})},n.prototype.render=function(){var t=this,n=this.api?this.api.getRootItem():void 0,r=e.createElement(k,{root:!0,treeview:this,level:0,item:n}),o=n&&n.children;o&&0===o.length&&this.props.items&&this.props.items.length>0&&(o=this.props.items);var i="deni-react-treeview-container unselectable "+this.state.theme;this.props.className&&(i+=" "+this.props.className);var a=void 0!==o&&o.length>0;!this.state.loading||this.props.lazyLoad&&a||(i+=" loading");var c=a&&(!this.state.loading||this.props.lazyLoad),s=this.props.style||void 0;return c?e.createElement("div",{ref:function(e){return t.container=e},className:i,style:s},r,function t(n,r,o,i,a){void 0===a&&(a=!1);a&&(i=i.map((function(e){return e.expanded=!0,e})));return e.createElement("div",null,r.props.item&&r.props.item.expanded&&i&&i.length?i.map((function(i){var c=e.createElement(k,{expandAll:a,treeview:n,parent:r,level:o,item:i});return e.createElement("div",{key:i.id},c,t(n,c,o+1,i.children))})):void 0)}(this,r,1,o,this.state.expandAll)):e.createElement("div",{className:i})},n}(e.Component)}));
//# sourceMappingURL=lib.umd.js.map
