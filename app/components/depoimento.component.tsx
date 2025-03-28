import { FunctionComponent } from "react";

interface DepoimentoComponentProps {}

const depoimentos = [
	{
		nome: "Ana Souza",
		localizacao: "São Paulo, SP",
		depoimento:
			"Eu nunca pensei que uma entrega pudesse ser tão rápida e prática. O acompanhamento em tempo real foi incrível, e meu documento chegou perfeitamente no prazo!",
	},
	{
		nome: "João Lima",
		localizacao: "Campinas, SP",
		depoimento:
			"Utilizo o serviço de entregas por drones para minha empresa e estou impressionado com a eficiência. É muito mais rápido e confiável do que eu esperava.",
	},
	{
		nome: "Maria Ferreira",
		localizacao: "Rio de Janeiro, RJ",
		depoimento:
			"Precisei de uma entrega urgente de medicamentos e o drone salvou o dia. Um serviço inovador e essencial!",
	},
];

export const DepoimentoComponent: FunctionComponent<
	DepoimentoComponentProps
> = () => {
	return (
		<div className="space-y-8 px-8 lg:px-16 border-l-1">
			{depoimentos.map(({ nome, localizacao, depoimento }, index) => {
				return (
					<div key={index} className="space-y-2 text-lg">
						<p className="text-neutral-500">{depoimento}</p>

						<p className="font-bold">
							- {nome} - {localizacao}
						</p>
					</div>
				);
			})}
		</div>
	);
};
