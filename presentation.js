(function(reveal) {
    reveal.initialize();

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


// polyfills