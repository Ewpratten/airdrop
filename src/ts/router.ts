namespace router {

    export function setAppFrame(html: string) {
        document.getElementById("application_frame").innerHTML = html;
    }

    export function home() {
        log("Router", "Opening home route");
        setAppFrame(new HomeView().render());
    }

    export function request() {
        log("Router", "Opening request route");
        setAppFrame(new RequestView().render());
    }
}