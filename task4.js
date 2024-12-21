class StringBuilder {
  constructor(value) {
    this.value = value;
  }
  append(symvol) {
    this.value = `${this.value}${symvol}`;
  }
  prepend(symvol) {
    this.value = `${symvol}${this.value}`;
  }
  pad(symvol) {
    this.value = `${symvol}${this.value}${symvol}`;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
