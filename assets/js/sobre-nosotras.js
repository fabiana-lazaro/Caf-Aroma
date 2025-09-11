class Member {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  describeMember() {
    return `${this.name} es nuestra ${this.role} en Café Aroma`;
  }
}

// CREACIÓN DE OBJETOS
let fabiana = new Member("Fabiana Lázaro", "Directora creativa");
let anning = new Member("Anning Huambalazo", "Chef pastelera");
let kiara = new Member("Kiara Sandoval", "Barista certificada");
let noemi = new Member(
  "Noemi Alca",
  "Relaciones con caficultores y control de calidad"
);
