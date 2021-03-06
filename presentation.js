(function(reveal) {
    reveal.initialize({
        mouseWheel: true,
        dependencies: [ 
            { src: './plugin/notes/notes.js', async: true } 
        ]
    });

    // Turn autoSlide off
    reveal.configure({ autoSlide: 0 });

    var slideRightClassName = "slideright",
        showClass = "show",
        fragment = null;


    reveal.addEventListener('fragmentshown', function( event ) {
        this.fragment = event.fragment;
        
        if (!this.fragment.classList)
        {
            return false;
        }

        var arrayOfClasses = [];
        this.fragment.classList.forEach(function(value, key, listObj, argument) {
            arrayOfClasses.push(value);
        });

        if (arrayOfClasses.includes(slideRightClassName) && !arrayOfClasses.includes(showClass))
        {
            this.fragment.classList.add(showClass);
        }

        RevealNotes.postNotes();
    });

    reveal.addEventListener('fragmenthidden', function( event ) {
        this.fragment = event.fragment;
        if (!this.fragment.classList)
        {
            return false;
        }

        var arrayOfClasses = [];
        this.fragment.classList.forEach(function(value, key, listObj, argument) {
            arrayOfClasses.push(value);
        });

        if (arrayOfClasses.includes(slideRightClassName) && arrayOfClasses.includes(showClass)) {
            this.fragment.classList.remove(showClass);
        }
    });
})(Reveal);