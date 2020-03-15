var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function log(component, message) {
    console.log("[{component}] {message}");
}
var router;
(function (router) {
    function setAppFrame(html) {
        document.getElementById("application_frame").innerHTML = html;
    }
    router.setAppFrame = setAppFrame;
    function welcome() {
        setAppFrame(new WelcomeView().render());
    }
    router.welcome = welcome;
})(router || (router = {}));
var PageView = (function () {
    function PageView() {
    }
    return PageView;
}());
var WelcomeView = (function (_super) {
    __extends(WelcomeView, _super);
    function WelcomeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelcomeView.prototype.render = function () {
        return "<div class='view_header'> <h1>Welcome</h1></div><div class='view_bodytext'><p>AirDrop is an app for exploration. We will place a package somewhere near you, and all you have to do is go collect it. Have fun!</p></div><div class='bottom_bar_button'><button>Continue</button></div>";
    };
    return WelcomeView;
}(PageView));
//# sourceMappingURL=app.js.map