export class Vaga {
    id: number = 0;
    nome: string = "";
    descricao: string = "";
    salario: number = 0;

    constructor(id:number,nome:string,descricao: string,salario: number){
        this.id = id;
        this.nome= nome;
        this.descricao = descricao;
        this.salario = salario;
    }
}