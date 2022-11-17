/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
export class Profile {

  id: string = '';
	nome: string = '';
	email: string = '';
	telefone: string = '';
	cpf: string = '';
	endereco: {
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
  };
}
