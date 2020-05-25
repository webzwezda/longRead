



function socialLock() {
    var btnRemoveShare = document.getElementById('btnRemove-share');
    btnRemoveShare.onclick = removeShare;

    var shareLinks = document.getElementsByClassName('sociaLocker__btns');
    for (i = 0; i < shareLinks.length; i++) {
        shareLinks[i].onclick = popUp;
    }
}

function popUp(j) {
    window.open(j.target.value, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
    removeShare();
}

function removeShare() {
    var t = document.querySelector('#productrow'), td = t.content.querySelectorAll("p");
    var sectionShare = document.getElementById('sharePage');
    var clone = document.importNode(t.content, true);

    return setTimeout(function () {
        sectionShare.after(clone);
        sectionShare.remove();
    }, 800);

}

socialLock();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2NpYWxMb2NrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5mdW5jdGlvbiBzb2NpYWxMb2NrKCkge1xuICAgIHZhciBidG5SZW1vdmVTaGFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5SZW1vdmUtc2hhcmUnKTtcbiAgICBidG5SZW1vdmVTaGFyZS5vbmNsaWNrID0gcmVtb3ZlU2hhcmU7XG5cbiAgICB2YXIgc2hhcmVMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvY2lhTG9ja2VyX19idG5zJyk7XG4gICAgZm9yIChpID0gMDsgaSA8IHNoYXJlTGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hhcmVMaW5rc1tpXS5vbmNsaWNrID0gcG9wVXA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwb3BVcChqKSB7XG4gICAgd2luZG93Lm9wZW4oai50YXJnZXQudmFsdWUsICdwb3AtdXAnLCAnbGVmdD0yMCx0b3A9MjAsd2lkdGg9NTAwLGhlaWdodD01MDAsdG9vbGJhcj0xLHJlc2l6YWJsZT0wJyk7XG4gICAgcmVtb3ZlU2hhcmUoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hhcmUoKSB7XG4gICAgdmFyIHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdHJvdycpLCB0ZCA9IHQuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKTtcbiAgICB2YXIgc2VjdGlvblNoYXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlUGFnZScpO1xuICAgIHZhciBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodC5jb250ZW50LCB0cnVlKTtcblxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VjdGlvblNoYXJlLmFmdGVyKGNsb25lKTtcbiAgICAgICAgc2VjdGlvblNoYXJlLnJlbW92ZSgpO1xuICAgIH0sIDgwMCk7XG5cbn1cblxuc29jaWFsTG9jaygpOyJdLCJmaWxlIjoic29jaWFsTG9ja2VyLmpzIn0=
