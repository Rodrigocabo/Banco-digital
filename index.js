class cliente{
    nome;
    cpf;
    
}

class contacorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;

    
            } 
      }

depositar(valor){
  if(valor  >0  ){
    this.saldo += valor;
  }
  }
}

    


const cliente1nome = "carlos";
const cliente1cpf = "10101010";



const cliente2nome = "keila";
const cliente2cpf   = "121222211";

contacorrentekeila.saldo = 0;
contacorrentekeila.agencia = 121222211;

console.log(contacorrentekeila.saldo);
contacorrentekeila.depositar (100);
contacorrentekeila.depositar(200);
contacorrentekeila.depositar(-1);
console.log(contacorrentekeila.saldo);
contacorrentekeila.sacar(50);




console.log(contacorrentecarlos.saldo);
console.log(cliente1);
console.log(cliente2);