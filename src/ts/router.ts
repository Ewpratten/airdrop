namespace router {

    export function setAppFrame(html: string) {
        document.getElementById("application_frame").innerHTML = html;
    }

    export function welcome() {
        setAppFrame(new WelcomeView().render());
    }
}