import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import { PrimaryButtonComponent } from "./primary-button.component";

interface ComoFuncionaComponentProps {}

export const ComoFuncionaComponent: FunctionComponent<
	ComoFuncionaComponentProps
> = () => {
	return (
		<div className="grid grid-cols-2 gap-16">
			<div>
				<TitleComponent>Como funciona</TitleComponent>
				<p className="text-xl text-neutral-500 mb-8">
					Nosso serviço de entregas por drones é rápido, seguro e
					simples! Comece fazendo sua solicitação pelo site ou
					aplicativo, onde você pode indicar o endereço de coleta,
					entrega e os detalhes do pacote. Assim que o pedido for
					confirmado, nosso sistema designa o drone mais adequado para
					realizar a entrega com eficiência. Durante o trajeto, você
					pode acompanhar sua encomenda em tempo real e saber
					exatamente quando ela chegará ao destino. No final, o pacote
					é entregue de forma ágil, garantindo sua satisfação e
					tranquilidade.
				</p>

				<PrimaryButtonComponent>
					Solicite sua entrega
				</PrimaryButtonComponent>
			</div>

			<ul className="flex flex-col justify-between pl-5 py-8 list-disc text-3xl border-l-1">
				<li>Faça seu pedido</li>
				<li>Processamos sua solicitação</li>
				<li>Coleta pelo Drone</li>
				<li>Monitoramento em tempo real</li>
				<li>Entrega rápida e segura</li>
			</ul>
		</div>
	);
};
