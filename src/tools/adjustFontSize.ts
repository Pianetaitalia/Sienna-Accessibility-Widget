export default function adjustFontSize(multiply:number = 1) {
    document
        .querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.asw-text")
        .forEach((el: HTMLElement) => {
            if (!el.classList.contains('material-icons') && !el.classList.contains('fa')) {
                let orgFontSize = Number(el.dataset.aswOrgFontSize ?? 0);

                if (!orgFontSize) {
                    orgFontSize = parseInt(window.getComputedStyle(el).getPropertyValue('font-size'));
                    el.dataset.aswOrgFontSize = String(orgFontSize);
                }

                let newFontSize = orgFontSize * multiply;
                el.style.fontSize = newFontSize + 'px';
            }
        });

    
    let $amount: HTMLDivElement = document.querySelector(".asw-amount");

    if($amount) {
        $amount.innerText = `${ (multiply * 100).toFixed(0) }%`
    }
}