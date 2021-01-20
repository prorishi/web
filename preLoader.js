const preLoader = {
    start: () => {
        document.getElementsByTagName("style")[0].innerText += "#preLoadWindow { position: fixed; top: 0; left:0; background: #333; flex-direction: row; justify-content: center; align-items: center; height: 100vh; width: 100%; z-index: 9999; display: none; } #preLoadWindow .preLoaderDot { width: 50px; height: 50px; background: #eee; margin: 0 1.2em; border-radius: 50%; animation: wave 2s infinite; } #preLoadWindow .preLoaderDot:nth-child(2) { animation-delay: 0.2s; } #preLoadWindow .preLoaderDot:nth-child(3) { animation-delay: 0.4s; } #preLoadWindow .preLoaderDot:nth-child(4) { animation-delay: 0.6s; } @keyframes wave { 50% { transform: scale(1.5); opacity: 0.08; } } ";
        this.preLoadWindow = document.createElement("div");
        this.preLoadWindow.id = "preLoadWindow";
        
        for (let i = 0; i < 4; i++) {
            let dot = document.createElement("div");
            dot.classList.add("preLoaderDot");
            this.preLoadWindow.appendChild(dot);
        }
        document.body.prepend(preLoadWindow);
        this.preLoadWindow.style.display = "flex";
    },
    stop: () => {
        this.preLoadWindow.remove();
    },
};
