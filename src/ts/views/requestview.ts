class RequestView extends PageView {

    private long: number = -81.2408681;
    private lat: number = 43.0037301;

    constructor() {
        super();
    }

    public render(): string {
        let header = "<div class='view_header'> <h1>AirDrop</h1></div>";
        let locationButton = "<a href='https://www.google.com/maps/dir//" + this.lat + "," + this.long + "'>(" + Math.round(this.lat * 1000) / 1000 + ", " + Math.round(this.long * 1000) / 1000 + ")</a>";
        let content = "<div class='view_bodytext'><p>We have found a package for you at: <br>" + locationButton + "</p></div>";
        let bottom = "<div class='bottom_bar'><button onclick='router.home();'>Return Home</button></div>";
        return header + content + bottom;
    }


}