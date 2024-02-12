import React from "react";
import { Article } from "../../components/index";
import { Blog01, Blog02, Blog03, Blog04, Blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
	return (
		<div className="gpt__blog section__padding" id="blog">
			<div className="gpt__blog-heading">
				<h1 className="gradient__text">
					A lot is happening, We are blogging about it.
				</h1>
			</div>
			<div className="gpt__blog-container">
				<div className="gpt__blog-container_groupA">
					<Article
						imgUrl={Blog01}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
				</div>
				<div className="gpt__blog-container_groupB">
					<Article
						imgUrl={Blog02}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={Blog03}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={Blog04}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={Blog05}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
				</div>
			</div>
		</div>
	);
};

export default Blog;
