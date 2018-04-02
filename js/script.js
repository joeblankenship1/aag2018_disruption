(function() {
    // start reveal slideshow
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,

        transition: 'concave', // none/fade/slide/convex/concave/zoom

        dependencies: [
            { src: 'plugin/notes/notes.js', async: true }
        ]

    });
})();
