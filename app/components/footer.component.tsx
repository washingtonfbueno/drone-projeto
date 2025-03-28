import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import { SocialLinksComponent } from "./social-button.component";

interface FooterComponentProps {}

export const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
	return (
		<div className="bg-[#222222] w-full flex justify-center">
			<div className="max-w-[1200px] w-full px-8 py-24 text-white">
				<TitleComponent>Entre em contato conosco</TitleComponent>

				<div className="space-y-4">
					<div className="text-xl">
						<p>Tel: (12) 3456-7890</p>
						<p>suporte@flyserv.com</p>
					</div>

					<div className="text-xl">
						<p className="font-bold">Horário de funcionamento</p>
						<p>Segunda a sexta</p>
						<p>Das 09h às 18h</p>
					</div>

					<SocialLinksComponent />
				</div>
			</div>
		</div>
	);
};
