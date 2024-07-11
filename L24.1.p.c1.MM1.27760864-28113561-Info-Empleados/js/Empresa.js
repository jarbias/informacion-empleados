export default class Empresa {
    constructor () {
        this.contobreros = 0;
        this.contadmin = 0;
        this.acumobreros = 0;
        this.acumadmin = 0;
    }
    procesartrabajadores (tr) {
        if (tr.tipo == 'obrero') {
            this.contobreros++;
            this.acumobreros = this.acumobreros + tr.salario;
        } else if (tr.tipo == 'administrativo') {
            this.contadmin++;
            this.acumadmin = this.acumadmin + tr.salario;
        }
    }
devolversalarioobrero () {
    return this.acumobreros 
}
 devolversaladmin () {
    return this.acumadmin
}
promedioobreros () {
    return this.acumobreros / this.contobreros
}
promedioadmin () {
    return this.acumadmin / this.contadmin
}

}   

