import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import { CardComponent } from "./card.component";

interface ServicosComponentProps {}

const serviços = [
	{
		title: "Entregas Expressas",
		description:
			"Precisa de um envio urgente? Nosso serviço de entregas expressas garante que seu pacote chegue ao destino em tempo recorde",
	},
	{
		title: "Entrega de Documentos Importantes",
		description:
			"Transportamos documentos sensíveis com segurança e rapidez, oferecendo soluções ideais para empresas e indivíduos",
	},
	{
		title: "Entregas para Empresas",
		description:
			"Oferecemos parcerias com empresas para atender às necessidades de logística e envio de pequenos pacotes",
	},
	{
		title: "Acessibilidade em Áreas Remotas",
		description:
			"Nossos drones são perfeitos para alcançar locais de difícil acesso, garantindo entrega onde outros meios não chegam",
	},
];

export const ServicosComponent: FunctionComponent<
	ServicosComponentProps
> = () => {
	return (
		<div>
			<TitleComponent>Nossos Serviços</TitleComponent>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{serviços.map((servico, index) => (
					<CardComponent
						key={index}
						title={servico.title}
						description={servico.description}
						hasButton={false}
					/>
				))}
			</div>
		</div>
	);
};
