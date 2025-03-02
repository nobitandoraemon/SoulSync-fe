import { aries } from "../../lib/data";

const InfoTabs = [
	//Rieng arius
	{
		id: 1,
		label: "Tổng quan",
		content: aries.overall.gioithieu,
	},
	{
		id: 2,
		label: "Tổng quan",
		content: aries.overall.gioithieu,
	},
	{
		id: 3,
		label: "Tổng quan",
		content: aries.overall.gioithieu,
	},
];

const InfoTab = ({ key, tab }) => {
	return (
		<>
			<input
				type="radio"
				name="my_tabs_3"
				className="tab min-w-32"
				aria-label={tab.label}
				key={key}
			/>
			<div className="p-6 rounded-lg min-h-[45vh] tab-content bg-base-100 border-base-300">
				{tab.content}
			</div>
		</>
	);
};

const ZodiacInfo = ({ zodiac }) => {
	return (
		<div className="p-8 overflow-hidden tabs tabs-boxed">
			{InfoTabs.map((tab) => {
				return <InfoTab key={tab.id} tab={tab} />;
			})}
		</div>
	);
};

export default ZodiacInfo;
