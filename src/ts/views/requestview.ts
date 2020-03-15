class RequestView extends PageView {

    private long: number = -81.2408681;
    private lat: number = 43.0037301;
    private hasNav: boolean;

    constructor() {
        super();

        if (navigator.geolocation) {
            log("RequestView", "Has access to navigator");
            navigator.geolocation.getCurrentPosition(this.handlePosition, this.fail);
            this.hasNav = true;
        } else {
            this.hasNav = false;
        }

    }

    public poke() {
        if (!this.hasNav) {
            router.setAppFrame(this.render());
        }
    }

    private handlePosition(pose: Position) {
        log("RequestView", "Got pose: " + pose);
        this.lat = pose.coords.latitude;
        this.long = pose.coords.longitude;

        router.setAppFrame(this.render());
    }

    private fail() {
        this.hasNav = false;
        log("RequestView", "Request failed");
        router.setAppFrame(this.render());
    }


    public preRender(): string {
        let header = "<div class='view_header'> <h1>AirDrop</h1></div>";
        let content = "<div class='view_bodytext'><p>We are searching for a package. Please wait.</p></div>";
        let bottom = "<div class='bottom_bar'><button onclick='router.home();'>Return Home</button></div>";

        return header + content + bottom;
    }

    public render(): string {
        let header = "<div class='view_header'> <h1>AirDrop</h1></div>";
        let locationButton = "<a href='https://www.google.com/maps/dir//" + this.lat + "," + this.long + "'>(" + Math.round(this.lat * 1000) / 1000 + ", " + Math.round(this.long * 1000) / 1000 + ")</a>";
        if (!this.hasNav) {
            locationButton = "-- Browser does not support navigation --";
        }
        let content = "<div class='view_bodytext'><p>We have found a package for you at: <br>" + locationButton + "</p></div>";
        let bottom = "<div class='bottom_bar'><button onclick='router.home();'>Return Home</button></div>";



        return header + content + bottom;
    }


}