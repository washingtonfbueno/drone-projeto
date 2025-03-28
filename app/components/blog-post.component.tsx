import { FunctionComponent } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface BlogPostProps {
	title: string;
	description: string;
}

export const BlogPost: FunctionComponent<BlogPostProps> = ({
	title,
	description,
}) => {
	return (
		<div className="flex items-center space-x-4 border-b-1 pb-8 mb-8">
			<p className="text-4xl">•</p>
			<div className="flex flex-grow justify-between items-center space-x-4">
				<div>
					<p className="text-2xl font-bold">{title}</p>
					<p className="text-lg">{description}</p>
				</div>

				<a href="">
					<FaExternalLinkAlt
						className="min-w-fit transition-transform transform hover:scale-125"
						size={32}
					/>
				</a>
			</div>
		</div>
	);
};
