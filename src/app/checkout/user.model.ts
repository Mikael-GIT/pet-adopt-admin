/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
export class User {

  id: string = '';
	idade: string = '';
	cpf: string = '';
	profissao: string = '';
	linkFacebook: string = '';
	linkInstagram: string = '';

	possuiOuPossuiuPets: boolean = false;
	motivoAdocao: string = '';
	numResidentesDomicilio: string = '';
	residentesConcordamAdocao: boolean = false;
	teraLivreAcessoAosComodos: boolean = false;
	possuiBebeOuPretende: boolean = false;
	residentesPossuiAlergia: boolean = false;
	isCastrados: boolean = false;
	concordaManterInformados: boolean = false;
	aceitaVisitasPosAdocao: boolean = false;
	adotouoOuDoouUmPet: boolean = false;
	tipoResidencia: string = '';
	ambientePropicioParaCriacao: boolean = false;

	endereco: {
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
  };
  
	adocao: {
    usuario_id: string;
    animal_id: string;
    status: string;
  };
	dataCriacao: string = '';
}
