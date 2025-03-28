import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import { CardComponent } from "./card.component";

interface PorqueEscolherComponentProps {}

const beneficios = [
	{
		title: "Velocidade Imbatível",
		description:
			"Nossos drones garantem entregas mais rápidas, reduzindo significativamente os tempos de espera",
	},
	{
		title: "Acessibilidade Extrema",
		description:
			"Alcance áreas remotas ou de difícil acesso, onde métodos de entrega tradicionais não conseguem chegar",
	},
	{
		title: "Conveniência e Eficiência",
		description:
			"O processo automatizado e monitoramento em tempo real tornam as entregas mais simples e confiáveis",
	},
	{
		title: "Redução de Custos",
		description:
			"Diminua os gastos com logística, especialmente para entregas de curto alcance e pequenos pacotes",
	},
];

export const PorqueEscolherComponent: FunctionComponent<
	PorqueEscolherComponentProps
> = () => {
	return (
		<div>
			<TitleComponent>
				Por Que Escolher Entregas Por Drones
			</TitleComponent>

			{/* 4-column grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{beneficios.map((beneficio, index) => (
					<CardComponent
						key={index}
						title={beneficio.title}
						description={beneficio.description}
					/>
				))}
			</div>
		</div>
	);
};
