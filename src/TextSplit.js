export class SplitText {
    constructor(element) {
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element = document.querySelector(element);
        this.text = this.element.textContent;
    }
    chars() {
        this.element.textContent = "";
        const split = this.text.split("");
        return split.map((char) => {
            const div = document.createElement("div");
            div.style.display = "inline-block";
            const textNode = document.createTextNode(char);
            div.append(textNode);
            if (div.textContent === ' ')
                div.innerHTML = `&nbsp`;
            this.element.append(div);
            return div;
        });
    }
    words() {
        this.element.textContent = "";
        const split = this.text.split(" ");
        return split.map((char) => {
            const div = document.createElement("div");
            div.style.display = "inline-block";
            const textNode = document.createTextNode(char);
            div.append(textNode);
            this.element.append(div);
            return div;
        });
    }
}
