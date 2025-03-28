import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import { PrimaryButtonComponent } from "./primary-button.component";

interface ComoFuncionaComponentProps {}

const funcionamento = [
	"Faça seu pedido",
	"Processamos sua solicitação",
	"Coleta pelo drone",
	"Monitoramente em tempo real",
	"Entrega rápida e segura",
];
export const ComoFuncionaComponent: FunctionComponent<
	ComoFuncionaComponentProps
> = () => {
	return (
		<div>
			<TitleComponent>Como funciona</TitleComponent>

			<div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2">
				<div className="pr-16">
					<p className="text-xl text-neutral-500 mb-8">
						Nosso serviço de entregas por drones é rápido, seguro e
						simples! Comece fazendo sua solicitação pelo site ou
						aplicativo, onde você pode indicar o endereço de coleta,
						entrega e os detalhes do pacote. Assim que o pedido for
						confirmado, nosso sistema designa o drone mais adequado
						para realizar a entrega com eficiência. Durante o
						trajeto, você pode acompanhar sua encomenda em tempo
						real e saber exatamente quando ela chegará ao destino.
						No final, o pacote é entregue de forma ágil, garantindo
						sua satisfação e tranquilidade.
					</p>

					<PrimaryButtonComponent>
						Solicite sua entrega
					</PrimaryButtonComponent>
				</div>

				<div className="flex flex-col space-y-16 text-3xl border-l-1 relative">
					{funcionamento.map((funcionamento, index) => {
						return (
							<div key={index} className="flex items-center pl-4">
								<p className="text-4xl absolute left-[0%] translate-x-[-50%]">
									•
								</p>

								<p className="text-2xl">{funcionamento}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
