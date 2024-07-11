export default class Trabajadores {
    constructor (n, s, t) {
        this.nombre = n;
        this.salario = s;
        this.tipo = t;
    }
set nombre(n){
    this._nombre = n;
}
get nombre(){
    return this._nombre;
}
set salario(s){
    this._salario = s;
}
get salario(){
    return this._salario;
}
set tipo(t){
    this._tipo = t;
}
get tipo(){
    return this._tipo;}
    




}

