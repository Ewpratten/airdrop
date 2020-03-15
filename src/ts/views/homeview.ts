class HomeView extends PageView {
    public render(): string {
        let header = "<div class='view_header'> <h1>AirDrop</h1></div>";
        let content = "<div class='view_bodytext'><p>AirDrop is an app for exploration. We will place a package somewhere near you, and all you have to do is go collect it. Have fun!</p></div>";
        let bottom = "<div class='bottom_bar'><button onclick='router.request();'>Request Package</button></div>";
        return header + content + bottom;
    }
}