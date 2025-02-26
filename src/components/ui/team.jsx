const Team = () => {
	const TeamBox = ({image, name, role}) => {
		return(
			<div className="w-[30%] flex flex-col items-center  ">
			<div className="w-3/5">
				<img src={image} className="w-full rounded-full" />
			</div>
				<span className="text-2xl font-bold">{name}</span>
				<span>{role}</span>
			</div>
		)
	}
	
	return( 
	<div>
		<div className="flex flex-col gap-1 items-center mt-24">
			<h1 className="text-4xl font-bold">Our team</h1>
			<p className="text-xl">Explore the whole collection of open-source web components and</p>
			<p className="text-xl">elements built with the utility classes from Tailwind</p>
		</div>
		<div className="flex flex-wrap justify-center">
			<TeamBox image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" name="Bonnie Green" role="CEO/Co-founder" />
			<TeamBox image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" name="Helene Engels" role="CTO/Co-founder" />
			<TeamBox image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" name="Jese Leos" role="SEO & Marketing" />
			<TeamBox image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" name="Joseph Mcfall" role="Sales" />
			<TeamBox image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" name="Lana Byrd" role="Web Designer" />
			<TeamBox image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" name="Michael Gough" role="React Developer" />
			<TeamBox image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" name="Neil Sims" role="Vue.js Developer" />
		</div>
	</div>
	)
};

export default Team;
