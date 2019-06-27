var refData = {
  alimentation: { // 2 353 kg
    label: "alimentation",
		boissons: { // 263 kg
			boissonsAlcoolisees: 145,
			boissonsSansAlcool: 118,
		},
		//autres: { // 538 kg
			autresAliments: 538,

		// (Fruits et légumes, féculents plats élaborés,  condiments, etc )

	// Produits laitiers et œufs			408 kg
		cremerie: {
			lait: 74,
			yaourt: 110,//yaourt & Pdt frais			110 kg
			fromage: 120,
			beurre: 76,
			oeuf: 28,
		},
		viandes: {
			// Viandes et Poissons			1 144 kg
			poissons: 168, //Produit de la mer			168 kg
			ruminants: 650,
			porc: 199,
			volailles: 109,
			autresViandes: 17,
		},
},
// Biens de consommations			2 626 kg
	biens: {
    label: "biens",
		habillement: 763,

	// Autres Biens et Services			1 716 kg
	electronique: 1034, // Informatiques électroniques			1 034 kg
	services: 532, // Services privés (Resto Banques…) 			532 kg
	autresBiens: 151,
	usageInternet: 146,
},
	transports: {
    label: "transports",
		voiture: {
			voitureAchat: 424,
			voitureUsage: 1548
		},
		avion: 480,
		transportCommun: 85, // trainsBus: 85,
		fretCourrier: 383,
},

// Services			1 489 kg
	servicePublicsSante: { label: "servicePublicsSante", tous: 1489} ,

logement: {
  label: "logement",
	fluides: {
		gaz: 654,
		pp: 498, // ??
		specifique: 171,
		electricite: 171,
		reseauChaleur: 62,
		eauDechets: 140,
	},
	constructionEntretien: {
		// Construction & gros entretien			675 kg
			neufs: 492,
			renovation: 134,
			entetiensBricolage: 49,
	},
	equipement: {
	// Equipement des logements			335 kg
		grosElectromenager: 157,
		mobilier: 120,
		autresBiensDurables: 57,
	}
}
}
