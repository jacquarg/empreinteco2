import React from 'react'
import Engine, { formatValue } from 'publicodes'
import co2 from './data/co2'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.publicodesEngine = new Engine(co2)
  }
  buildBilan() {
    const bilan = this.publicodesEngine.evaluate('bilan')
    return formatValue(bilan)
  }

  render() {
    return (
      <div class="container-sm" id="app">
        <div class="row my-4">
          <div class="col-12 my-3">
            <h1 class="text-center category-title">Mon empreinte carbone, quezako ? { this.buildBilan() }</h1>
          </div>
          <div class="col-md-6">
            <p>Mon empreinte carbone annuelle, c'est la quantité de gaz à effet de serre que j'ai émise au cours d'une année.
            Il y a certe le CO2 qu'on émet directement en expirant (~360 kgCO2e par an{/*<reference-popup reference-id="humanRespirationFootprint"></reference-popup>*/}), mais c'est notre mode de vie qui est responsable des quantités les plus importantes (cf graph à côté)</p>
          </div>
          <div class="col-md-6 my-3">
            {/*}<graph-main-categories></graph-main-categories>*/}
          </div>
          <div class="col-md-6 mt-2">
            <p>Ces valeurs d'émissions annuelles (en kilogrammes équivalent CO2 - kgCO2e) sont la moyenne par français.
              Se déplacer émet plus de carbone que se nourrir. Est-ce bien ce que vous attendiez ? Est-ce que vous souhaitez ?
            </p>
            <p>Chacune des catégories est détaillée ci-dessous. Commencez à les personnaliser avec quelques questions, et ainsi découvrez si vous êtes plus ou moins émetteur que la moyenne !
            </p>
          </div>
        </div>

        <div class="row my-4">
          <div class="col-12">
            <h2 class="text-center category-title">Transports</h2>
          </div>
          <div class="col-md-6 my-3">
            {/*<graph-categories v-bind:item="subItems[0]"></graph-categories>*/}
          </div>
          <div class="col-md-6">
            <p>En moyenne, la voiture est le plus gros contributeur. Sur ce total de près de 2000 kgCO2e, environ 400kg sont dûs à l'achat (c'est à dire la construction de la voiture) et 600kgCO2e aux trajets domicile travail.
              L'avion est nettement second car beaucoup moins prisé des français. Les autres transports (transports en commun (métro, train de banlieu, ..), TGV, bateau, ...) compte pour moins de 5% de ce total.</p>
            {/*<customize-work-home></customize-work-home>*/}
          </div>
        </div>

        <div class="row my-4">
          <div class="col-12">
            <h2 class="text-center category-title">Logement</h2>
          </div>
          <div class="col-md-6 my-3">
            {/*}<graph-categories v-bind:item="subItems[1]"></graph*/}-categories>
          </div>
          <div class="col-md-6">
            <p>Au logement, c'est la consommation directe d'énergie qui est la plus émettrice de gaz à effet de serre. En France, le chauffage c'est plus de la moitié (60%){/*}<reference-popup reference-id="individualHeatPart"></reference-popup>*/} de l'énergie consommée au foyer.</p>
            <p>
              Du fait du nucléair et des énergies renouvelable, l'électricité émet seulement 37gCO2e/kWh{/*}<reference-popup reference-id="electricityFootprint"></reference-popup>*/} contre 230{/*}<reference-popup reference-id="gazFootprint"></reference-popup>*/} pour le gaz (qui ne comporte aujourd'hui que 5% de biogaz{/*}<reference-popup reference-id="partBioGaz"></reference-popup>*/}, quasiment neutre en émissions de carbone).
            </p>
            {/*}<customize-energy-annual></customize-energy-annual>*/}
          </div>
          <div class="col-md-12">
            {/*}<electricity-index></electricity-index>*/}
          </div>
        </div>
        <div class="row my-4">
          <div class="col-12">
            <h2 class="text-center category-title">Biens</h2>
          </div>
          <div class="col-md-6 my-3">
            {/*}<graph-categories v-bind:item="subItems[2]"></graph-categories>*/}
          </div>
          <div class="col-md-6">
            <p>L'achat de nouveaux biens compte pour plus du cinquième de nos émissions de gaz à effet de serre. TV, ordinateurs, smartphones, ... devenus des consommables ont un énorme impact. Ils représentent autant d'émissions de carbone que le chauffage au logement !
            L'habillement, par son volume est aussi un très gros contributeur.</p>
            <p>Les usages numériques, souvent pointés du doigt ont une empreinte qui reste faible : moins de 1% des émissions annuelles. Cependant, c'est beaucoup plus que les émissions de transports en commun !</p>
          </div>
        </div>

        <div class="row my-4">
          <div class="col-12">
            <h2 class="text-center category-title">Alimentation</h2>
          </div>
          <div class="col-md-6 my-3">
            {/*}<graph-categories v-bind:item="subItems[3]"></graph-categories>*/}
          </div>
          <div class="col-md-6">
            <p>Réduire l'empreinte carbone de son alimentation, ça veut dire s'arrêter de manger ? Pas forcément. Les types d'aliments ont des impacts très différents. Sans surprise, la viande et toutes les resources que cela implique pour nourrir et faire grandir des animaux compte pour près de la moitié des émissions. </p>
            <p>Les produits laitiers sont aussi de gros émetteurs, en raison du fort pouvoir d'effet de serre du méthane (émis par les prouts de vache) et la chaîne logistique réfrigérée qu'implique le lait frais.</p>
            <p>Un végan divisera rapidement son empreinte carbone, mais attention, un budha-bowl avocat, quinoa, graine de chia à fait un quart de tour de planète en avion !
            {/*}<!-- <customize-food-weekly></customize-food-weekly> -->*/}</p>
          </div>
        </div>

        <div class="row my-4">
          <div class="col-12">
            <h2 class="text-center category-title">Objectif 2050</h2>
          </div>
          <div class="col-md-6">
            <p>Depuis près de 40 ans, des scientifiques alertent sur un réchauffement global sur terre, causé par l'augmentation des gaz à effet de serre dans l'atmosphère. Ceci finit par amener la comunauté international à se fixer des objectif de diminution des émissions de gaz à effet de serre.</p>
            <p>En France, la Stratégie Nationale Bas-Carbone (SNBC) fixe l'objectif de la neutralité carbone en 2050, qui se traduit par 2TCO2e{/*}<reference-popup reference-id="frenchObjectiv2050ByIndividual"></reference-popup>*/} d'émission par individu en 2050. C'est 6 fois moins qu'en 2018 ! Pour avancer vers cet objectif, il faut émettre moins de 11400kgCO2e en 2020. Où en êtes-vous ?</p>
          </div>
          <div class="col-md-6 my-3">
            {/*}<graph-objectives></graph-objectives>*/}
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <h5>Mon bilan chaque mois</h5>
            <p>Un petit rappel dans l'agenda pour faire le point tous les mois !</p><a href="./res/bilan_mensuel.ics">Mon rendez-vous bilan carbone</a>
          </div>
          <div class="col-md-2"></div>
        </div>

        <div class="row mt-5">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            {/*}<manage-data></manage-data>*/}
          </div>
          <div class="col-md-2"></div>
        </div>

        <div class="row mt-5" >
          {/*style="margin-bottom: 100px;"*/}
          <div class="col-md-2"></div>
          <div class="col-md-8">
            {/*}<references-list></references-list>*/}
          </div>
          <div class="col-md-2"></div>
        </div>

        <div class="fixed-bottom mx-auto" >
          {/*style="width: 330px;"*/}
            {/*}<my-carbon-footprint></my-carbon-footprint>*/}
        </div>

      </div>
    )
  }
}
