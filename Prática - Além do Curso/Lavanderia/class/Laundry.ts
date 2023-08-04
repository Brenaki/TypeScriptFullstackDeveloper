export class Laundry {
    private value_Wash: number = 15
    private value_Dry: number = 10
    protected amount_Wash: number
    protected amount_Dry: number

    constructor(amount_Wash: number, amount_Dry: number){
        this.amount_Wash = amount_Wash
        this.amount_Dry = amount_Dry
    }

    create_machines = () => {
        const machines_wash = Array<number>
        for(let i =0; i<this.amount_Wash; i++){
            machines_wash.apply(i)
    }
        const machines_dry = Array<number>
        for(let i =0; i<this.amount_Dry; i++){
            machines_dry.apply(i)
    }
        console.log(machines_dry, machines_wash)
}

}