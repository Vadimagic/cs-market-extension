function checkDescriptionItem() {
	const listDescription = document.getElementById(
		"largeiteminfo_item_descriptors"
	)?.childNodes

	if (listDescription) {
		for (let i = 0; i < listDescription.length; i++) {
			const name = getName(listDescription[i].innerText)
			if (name) {
				const div = document.createElement("div")
				// link.setAttribute(
				// 	"href",
				// 	`https://steamcommunity.com/market/listings/730/${name} (Factory New)`
				// )
				// link.setAttribute("target", "blank")
				div.innerText = listDescription[i].innerText
				const divTooltipText = document.createElement("div")
				divTooltipText.className = "cs-extension-tooltip-text"
				skinTypes.forEach(type => {
					const link = document.createElement("a")
					link.setAttribute(
						"href",
						`https://steamcommunity.com/market/listings/730/${name} (${type})`
					)
					link.setAttribute("target", "blank")
					link.innerText = type
					divTooltipText.appendChild(link)
				})
				div.appendChild(divTooltipText)
				div.style.cssText = listDescription[i].style.cssText
				div.className = "cs-extension-tooltip"
				listDescription[i].replaceWith(div)
			}
		}
	}
}

const skinTypes = [
	"Battle-Scarred",
	"Well-Worn",
	"Field-Tested",
	"Minimal Wear",
	"Factory New",
]

function getName(text) {
	return (
		listItems.find(item => {
			const keys = Object.keys(item)
			return keys.some(key => item[key] === text)
		})?.en ?? null
	)
}

const listItems = [
	{
		ru: "MAG-7 | Бессонница",
		en: "MAG-7 | Insomnia",
	},
	{
		ru: "MP9 | Пушинка",
		en: "MP9 | Featherweight",
	},
	{
		ru: "SCAR-20 | Фрагменты",
		en: "SCAR-20 | Fragments",
	},
	{
		ru: "P250 | Ре.конструкция",
		en: "P250 | Re.built",
	},
	{
		ru: "MP5-SD | Ликвидация",
		en: "MP5-SD | Liquidation",
	},
	{
		ru: "SG 553 | Киберсила",
		en: "SG 553 | Cyberforce",
	},
	{
		ru: "Tec-9 | Повстанец",
		en: "Tec-9 | Rebel",
	},
	{
		ru: "M4A1-S | Эмфорозавр-S",
		en: "M4A1-S | Emphorosaur-S",
	},
	{
		ru: "Glock-18 | Кролик в тени",
		en: "Glock-18 | Umbral Rabbit",
	},
	{
		ru: "MAC-10 | Саккаку",
		en: "MAC-10 | Sakkaku",
	},
	{
		ru: "Револьвер R8 | Банановая пушка",
		en: "R8 Revolver | Banana Cannon",
	},
	{
		ru: "P90 | Неокоролева",
		en: "P90 | Neoqueen",
	},
	{
		ru: "AWP | Duality",
		en: "AWP | Duality",
	},
	{
		ru: "UMP-45 | Дикое дитя",
		en: "UMP-45 | Wild Child",
	},
	{
		ru: "P2000 | Сорвиголова",
		en: "P2000 | Wicked Sick",
	},
	{
		ru: "M4A4 | Темукауу",
		en: "M4A4 | Temukau",
	},
	{
		ru: "AK-47 | Выстрел в голов",
		en: "AK-47 | Head Shot",
	},
]

checkDescriptionItem()
