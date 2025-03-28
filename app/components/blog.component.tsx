import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import { BlogPost } from "./blog-post.component";

interface BlogComponentProps {}

const blogPosts = [
	{
		title: "Dicas e Curiosidades",
		description:
			"Explore artigos sobre como as entregas por drones estão revolucionando a logística e dicas para aproveitar ao máximo nossos serviços",
	},
	{
		title: "Casos de Sucesso",
		description:
			"Descubra histórias reais de clientes que transformaram suas operações com nossas entregas rápidas e inovadoras",
	},
	{
		title: "Avanços na Tecnologia de Drones",
		description:
			"Acompanhe as tendências e inovações mais recentes no setor de drones",
	},
	{
		title: "Sustentabilidade em Ação",
		description:
			"Leia sobre como as entregas por drones ajudam a reduzir o impacto ambiental e promovem um futuro mais verde",
	},
];

export const BlogComponent: FunctionComponent<BlogComponentProps> = () => {
	return (
		<div>
			<TitleComponent>
				Blog & News sobre entrega por drones
			</TitleComponent>

			<div>
				{blogPosts.map(({ title, description }, index) => (
					<BlogPost
						key={index}
						title={title}
						description={description}
					/>
				))}
			</div>
		</div>
	);
};
