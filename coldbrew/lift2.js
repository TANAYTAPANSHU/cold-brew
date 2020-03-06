function fn1() {
    let f1 = document.getElementById("text1")
    let i = 0;
    for (i = 0; i < f1; f++) {
        function duplicate() {
            var original = document.getElementById('lif' + i);
            var clone = original.cloneNode(true); // "deep" clone
            clone.id = "duplicater" + ++i; // there can only be one element with an ID
            clone.onclick = duplicate; // event handlers are not cloned
            original.parentNode.appendChild(clone);
        }



    }
}