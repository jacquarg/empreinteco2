// * https://coolors.co/5cc8ff-93867f-343633-7d70ba-dec1ff
// SCSS HEX
// $charcoal: #264653ff;
// $persian-green: #2a9d8fff;
// $maize-crayola: #e9c46aff;
// $sandy-brown: #f4a261ff;
// $terra-cotta: #e76f51ff;
//
// * https://coolors.co/264653-32746d-7c9885-b5b682-fedc97
// $charcoal: #264653ff;
// $myrtle-green: #32746dff;
// $morning-blue: #7c9885ff;
// $sage: #b5b682ff;
// $navajo-white: #fedc97ff;
//
// * https://coolors.co/19535f-2a9d8f-087f8c-a4b494-93acb7
// $midnight-green-eagle-green: #19535fff;
// $persian-green: #2a9d8fff;
// $metallic-seaweed: #087f8cff;
// $laurel-green: #a4b494ff;
// $pewter-blue: #93acb7ff;
//
//
// * https://coolors.co/93b5c6-ef8354-f1ab86-e9c46a-eb9486
// $pewter-blue: #93b5c6ff;
// $mandarin: #ef8354ff;
// $tumbleweed: #f1ab86ff;
// $maize-crayola: #e9c46aff;
// $dark-salmon: #eb9486ff;
//
// * ??
//
// * https://coolors.co/ffffff-fcde9c-ea8c55-c05746-e76f51
// $white: #ffffffff;
// $peach: #fcde9cff;
// $raw-sienna: #ea8c55ff;
// $cedar-chest: #c05746ff;
// $terra-cotta: #e76f51ff;

const colorsByCategories = {
  'transports': '#264653ff', //$charcoal
  'logement': '#2a9d8fff', // $persian-green
  'biens': '#e9c46aff', // $maize-crayola
  'servicePublicsSante': '#f4a261ff', // $sandy-brown
  'alimentation': '#e76f51ff', // $terra-cotta

  // transports
  'voiture': '#264653ff', // $charcoal
  'avion':'#32746dff', // $myrtle-green
  'fretCourrier': '#7c9885ff', // $morning-blue
  'transportCommun': '#b5b682ff', // $sage
  // $navajo-white: #fedc97ff;


  // Logement
  'constructionEntretien': '#19535fff', // $midnight-green-eagle-green
  'fluides': '#2a9d8fff', // $persian-green
  'equipement': '#087f8cff', // $metallic-seaweed:
  // $laurel-green: #a4b494ff;
  // $pewter-blue: #93acb7ff;

  // Alimentation
  // $white: #ffffffff;
  'boissons': '#fcde9cff', // $peach
  'cremerie': '#ea8c55ff', // $raw-sienna
  'autresAliments':'#c05746ff', // $cedar-chest
  'viande': '#e76f51ff', // $terra-cotta

  // Biens
  'electronique': '#93b5c6ff', // $pewter-blue:
  'services': '#ef8354ff', // $mandarin
  'autresBiens': '#f1ab86ff', // $tumbleweed
  'habillement': '#e9c46aff', // $maize-crayola
  'usageInternet': '#eb9486ff', // $dark-salmon 
}

const category2Color = (category) => {
    return colorsByCategories[category] || '#f4a261ff'
}
