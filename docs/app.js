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
    console.log('[' + component + '] ' + message + '');
}
var router;
(function (router) {
    function setAppFrame(html) {
        document.getElementById("application_frame").innerHTML = html;
    }
    router.setAppFrame = setAppFrame;
    function home() {
        log("Router", "Opening home route");
        setAppFrame(new HomeView().render());
    }
    router.home = home;
    function request() {
        log("Router", "Opening request route");
        var rv = new RequestView();
        setAppFrame(new RequestView().preRender());
        rv.poke();
    }
    router.request = request;
})(router || (router = {}));
var PageView = (function () {
    function PageView() {
    }
    return PageView;
}());
var HomeView = (function (_super) {
    __extends(HomeView, _super);
    function HomeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeView.prototype.render = function () {
        var header = "<div class='view_header'> <h1>AirDrop</h1></div>";
        var content = "<div class='view_bodytext'><p>AirDrop is an app for exploration. We will place a package somewhere near you, and all you have to do is go collect it. Have fun!</p></div>";
        var bottom = "<div class='bottom_bar'><button onclick='router.request();'>Request Package</button></div>";
        return header + content + bottom;
    };
    return HomeView;
}(PageView));
var RequestView = (function (_super) {
    __extends(RequestView, _super);
    function RequestView() {
        var _this = _super.call(this) || this;
        _this.long = -81.2408681;
        _this.lat = 43.0037301;
        if (navigator.geolocation) {
            log("RequestView", "Has access to navigator");
            navigator.geolocation.getCurrentPosition(_this.handlePosition, _this.fail);
            _this.hasNav = true;
        }
        else {
            _this.hasNav = false;
        }
        return _this;
    }
    RequestView.prototype.poke = function () {
        if (!this.hasNav) {
            router.setAppFrame(this.render());
        }
    };
    RequestView.prototype.handlePosition = function (pose) {
        log("RequestView", "Got pose: " + pose);
        this.lat = pose.coords.latitude;
        this.long = pose.coords.longitude;
        router.setAppFrame(this.render());
    };
    RequestView.prototype.fail = function () {
        this.hasNav = false;
        log("RequestView", "Request failed");
        router.setAppFrame(this.render());
    };
    RequestView.prototype.preRender = function () {
        var header = "<div class='view_header'> <h1>AirDrop</h1></div>";
        var content = "<div class='view_bodytext'><p>We are searching for a package. Please wait.</p></div>";
        var bottom = "<div class='bottom_bar'><button onclick='router.home();'>Return Home</button></div>";
        return header + content + bottom;
    };
    RequestView.prototype.render = function () {
        var header = "<div class='view_header'> <h1>AirDrop</h1></div>";
        var locationButton = "<a href='https://www.google.com/maps/dir//" + this.lat + "," + this.long + "'>(" + Math.round(this.lat * 1000) / 1000 + ", " + Math.round(this.long * 1000) / 1000 + ")</a>";
        if (!this.hasNav) {
            locationButton = "-- Browser does not support navigation --";
        }
        var content = "<div class='view_bodytext'><p>We have found a package for you at: <br>" + locationButton + "</p></div>";
        var bottom = "<div class='bottom_bar'><button onclick='router.home();'>Return Home</button></div>";
        return header + content + bottom;
    };
    return RequestView;
}(PageView));
//# sourceMappingURL=app.js.map