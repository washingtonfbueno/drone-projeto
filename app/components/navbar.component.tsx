import { FunctionComponent } from "react";

interface NavbarComponentProps {}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
	return (
		<nav className="flex justify-between">
			<div className="flex items-center space-x-4 py-2 px-4 bg-black opacity-75 w-fit rounded-xl">
				<p className="text-xl">FLYSERV</p>
				<ul className="flex space-x-6 text-lg">
					<li>
						<a href="#missao" className="hover:underline">
							MISSÃO
						</a>
					</li>
					<li>
						<a href="#clientes" className="hover:underline">
							CLIENTES
						</a>
					</li>
					<li>
						<a href="#servicos" className="hover:underline">
							SERVIÇOS
						</a>
					</li>
				</ul>
			</div>

			<a
				href="#contato"
				className="flex items-center hover:underline bg-black opacity-75 rounded-xl py-2 px-4"
			>
				CONTATO
			</a>
		</nav>
	);
};
