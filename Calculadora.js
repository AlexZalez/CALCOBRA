const app = new Vue({
    el: "#app",
    data: {
        titulo: "Calculadora de Cobro",
        tareas: [],
        nTarea: "",
        contador: 0,
        ppr: 20,
        total: 0,
        acceso: 1,
        ubica: 1,
        altu: 1,
    },
    methods:{
        acces(ss){
            this.acceso = ss;
        },
        ubic(ss){
            this.ubica = ss;
        },
        alt(ss){
            this.altu = ss;
        }
    },
    computed: {
        calTotal(){
            let sum = 0;
            sum = this.ppr * this.acceso;
            sum = sum * this.ubica;
            sum = sum * this.altu;
            return this.total = sum;
        }
    }
})