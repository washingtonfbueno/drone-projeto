import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import Image from "next/image";
import { PrimaryButtonComponent } from "./primary-button.component";

interface SobreComponentProps {}

export const SobreComponent: FunctionComponent<SobreComponentProps> = () => {
	return (
		<div>
			<TitleComponent>Sobre Nós</TitleComponent>

			<div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
				<Image
					src="/images/drone-sobre.avif" // ✅ Use a valid path
					alt="drone"
					width={300}
					height={300}
					className=""
				/>

				<div className="space-y-8">
					<p className="text-xl text-neutral-500">
						Somos apaixonados por inovação e comprometidos em
						transformar o mundo das entregas. Nossa missão é
						oferecer um serviço ágil, sustentável e confiável,
						utilizando tecnologia avançada de drones para conectar
						pessoas e empresas de maneira eficiente. Com uma equipe
						dedicada e tecnologia de ponta, trabalhamos para reduzir
						tempos de entrega, melhorar a acessibilidade e
						contribuir para um futuro mais sustentável. Queremos que
						nossos clientes desfrutem de praticidade e
						tranquilidade, sabendo que suas encomendas estão em boas
						mãos (ou asas!). Nosso objetivo é liderar uma revolução
						logística, oferecendo soluções modernas que atendam às
						necessidades do dia a dia e também às demandas
						corporativas. Valorizamos a confiança dos nossos
						clientes e buscamos sempre superar expectativas com
						inovação, segurança e excelência.
					</p>

					<PrimaryButtonComponent>
						Entre em Contato
					</PrimaryButtonComponent>
				</div>
			</div>
		</div>
	);
};
