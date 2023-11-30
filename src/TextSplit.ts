export class SplitText {
  element: any;
  text:string
  constructor(element:string) {
    this.element = document.querySelector(element)
    this.text = this.element.textContent!
  }
  // It returns the text elements of the specified tag as [div, div, div].
  chars() {
    this.element.textContent = "";
    const split = this.text.split("");
    return split.map((char) => {
      const div = document.createElement("div");
      div.style.display = "inline-block";
      const textNode = document.createTextNode(char);
      div.append(textNode);
      if(div.textContent===' ') div.innerHTML = `&nbsp`
    
      this.element.append(div);
      return div;
    });
  }
  // It treats each space-separated segment as a single word and returns in the format [div, div].
  words(){
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