export class Empresa {
    id?: number;
    razaoSocial?: string;
    nomeFantasia?: string;
    email?: string;
    telefone?: string; 
    cnpj?: string;
    endereco?: string;
    modalidade?: string;
    quantidadeFuncionarios?: number;
    associacaoId?: number; // Adicionando o campo associacaoId para vincular a uma associação
}
