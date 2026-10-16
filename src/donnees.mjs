// Contenu du site kevinnicolas.com.
// Modifier ce fichier, puis lancer `node outils/construire.mjs` pour regénérer les pages.

const CDN = 'https://cdn.myportfolio.com/9d45619a-0d51-4dfd-8ca1-47cdd1877786/';
const cdn = (chemin) => CDN + chemin;

export const site = {
  nom: 'Kevin Nicolas',
  url: 'https://kevinnicolas.com',
  description:
    'Producteur multimédia multidisciplinaire spécialisé dans les expériences numériques : vidéo, photographie, design et développement web.',
  courriel: 'bonjour@kevinnicolas.com',
  favicon: cdn('d7febbe1-d950-48d9-a4ac-f76a2a294c86_carw_1x1x32.png?h=043aa72749b6f3be3e6ede209a9d8549'),
  appleTouchIcon: cdn('5c89b1f2-d896-4631-a7eb-e4eef32a4dbc_carw_1x1x180.png?h=7b734712d824ae31c7698dfd7a07d996'),
  reseaux: [
    { nom: 'LinkedIn', url: 'https://www.linkedin.com/in/kevinnicolasr/', icone: 'linkedin' },
    { nom: 'Medium', url: 'https://kevinnicolas.medium.com/', icone: 'medium' },
    { nom: 'GitHub', url: 'https://github.com/KHNRV', icone: 'github' },
    { nom: 'Courriel', url: 'mailto:bonjour@kevinnicolas.com', icone: 'courriel' },
  ],
};

export const aPropos = {
  portrait: cdn('20edc234-08d1-47e5-a50c-be90d178e35b_rw_600.png?h=8514720a5c3b93197513070a1544764a'),
  texte:
    'Je suis un producteur multimédia multidisciplinaire qui aime résoudre des problèmes et qui se spécialise dans les expériences numériques. Dans mon coffre à outils, vous trouverez de solides compétences en analyse et en communication, une grande aisance en production vidéo et de bonnes bases en développement web full-stack.',
};

// Sous-projets de l'exposition Diffraction (galerie photo).
const diffraction = [
  {
    slug: 'chambre-343',
    titre: 'Chambre 343',
    annee: '2022',
    artiste: 'Julie Delacroix-Lavoie',
    supervision: 'Projet supervisé par le professeur Bernard Perron',
    couverture: cdn('ccf9a1aa-67a9-4375-a8f5-bd03ef3fc93f_rwc_0x61x1920x2557x1280.jpg?h=07db2b1de17cdfa8400de5cc56dac093'),
    images: [
      'a14dfce3-8d7b-4b26-99dd-2b853add71af_rw_1920.jpg?h=93e657f51366fac69d4eaf52e8fdee9c',
      '5b437a9d-1a46-49c8-bf33-c2e1f2ad7094_rw_1920.png?h=3737c11e17087215547ed267823d1577',
      'cecea803-4e9e-4c85-b925-ce4c1e6c6603_rw_1920.jpg?h=504ab6e1ce10a3618b028724b5692a16',
      '6b257571-3b84-444b-9203-480f25ee854e_rw_1920.jpg?h=ae06bbc35dfb24819ce63e9d34018a1e',
      'f674552f-b721-4cfe-8a0d-0d547cb57703_rw_1920.jpg?h=4faad82fd090f490f454b1fe1a7a32b7',
      '69f537e2-81c6-4d00-ac23-7e1c54dd0d94_rw_1920.jpg?h=50c4003fb751b3571d6a8eeccab7d587',
      '9a71b991-b500-4d03-b13c-d3e784b6f740_rw_1920.jpg?h=138d520ae04277d943dba25642169b39',
      'cf98a41b-b567-4431-9778-d9226bc06012_rw_1920.jpg?h=81e41c103dc3661373c87c4f8e7ca7b8',
      'a8ba29fd-305a-41ef-a4f0-6b498b3bd473_rw_1920.jpg?h=5094f187bd48822b05621753d9157332',
      '7258c092-ee0e-41a0-bef5-29897369954e_rw_1920.jpg?h=df07fc3a8bd66f9b3f150c904add2835',
      '740e53b5-ae8e-460c-b450-0f2e29052df2_rw_1920.jpg?h=81931d2e648ba8f5c746686cc3a0f0bf',
      '0f524271-4fed-4413-a823-c7e760e3a5d7_rw_1920.jpg?h=698604808440059a49e662132fae4af7',
    ].map(cdn),
  },
  {
    slug: 'promenade-dagenais',
    titre: 'Promenade Dagenais',
    annee: '2022',
    artiste: 'Ariane Rancourt',
    supervision: 'Projet supervisé par le professeur Olivier Asselin',
    couverture: cdn('6aa2cb27-d789-4e17-aa51-4457baacd9fc_rwc_443x678x1175x1565x1280.jpg?h=3699166db9d016ac402e7b8de416611b'),
    images: [
      '7548428e-726d-49a7-ae76-d4a15845ee72_rw_1920.jpg?h=c67de92851804f9476d003dc0f566316',
      '790b5af4-ae6b-4e0f-b20a-7931571c9856_rw_1920.png?h=5bcd104b535a4ec91e25bef1ed261f07',
      'f1157b50-d44b-4069-982f-25441ded6ec5_rw_3840.jpg?h=f9c564b37f75993f4b156d2df493d696',
      'be9b42c4-d2c3-40e0-8673-29085c5aacb2_rw_3840.jpg?h=36c7f6ec529f7213b9b692d784049acf',
      '79d73525-2857-46cc-9807-e11dfc064a27_rw_3840.jpg?h=8921e6838e8ad67288f7fe72ee3b107f',
      '73821da7-955d-434f-9210-cf9a67696ede_rw_3840.jpg?h=f6a320e8dfde62ad50cdc6d15a53cbdf',
      '0fb7dd34-a771-45c1-9c89-2df0705f9a04_rw_3840.jpg?h=fd4d1df0393be72d51340053b9fa0a1f',
    ].map(cdn),
  },
  {
    slug: 'le-ciel-est-un-plafond',
    titre: 'Le ciel est un plafond',
    annee: '2022',
    artiste: 'Michèle Barcena-Sougavinski',
    supervision: 'Projet supervisé par la professeure Natalie Doonan',
    couverture: cdn('eea66012-9d9b-4abb-88b5-f5591c2d183c_rwc_0x61x1920x2557x1280.jpg?h=3bc181e35651ad5fc749865971bee17d'),
    images: [
      '85ae3b47-6056-4e7c-a1f5-b4a4e4883702_rw_1920.jpg?h=4b64ae2c6ebacdd3ec1bc7c88c713990',
      '0cd4040d-8769-49b7-ba04-8c8de543cfa8_rw_1920.png?h=a3a69beb71fe77ace5c9b16ad92cd25c',
      'f1dd5998-d37c-45eb-a701-326980481365_rw_1920.jpg?h=f3c72b4352849787f96bb4d0abef363d',
      'e2d06a01-74ec-4e96-877c-9ba34fcacc98_rw_1920.jpg?h=01356dc84754930637fc7ead6fc7f30f',
      '2a5739b6-a3d0-4124-a3a2-0ef3c824a843_rw_1920.jpg?h=9ab3d7dfb6daed21ce4a5ce9ad072a23',
      '38b7ce17-67b8-49a8-8374-c9a6b9f82329_rw_1920.jpg?h=6063661dac46e710e46188bb633781a4',
      '068edce8-b305-43bf-8403-6ef9a3acb2aa_rw_3840.jpg?h=b7fff190065aecb76c11eb0398b6e5ba',
      'd11b78c6-1356-415a-8b7e-eb6e8b8bdbb1_rw_3840.jpg?h=4d65b9f38f8bce5f119c792cd520af95',
      '52170cc6-915c-42ae-88fe-a3746eb86a9c_rw_1920.jpg?h=ad292d91426cb7409707643d2a314787',
      'bd330139-a4fe-46c9-9635-9d094b0f5b1d_rw_3840.jpg?h=dd19059400d9196019aebf264cc5b681',
      '3b1d8a6b-04c6-4162-b0b5-37b4b2bca191_rw_3840.jpg?h=89dc4f818e2c1b2b5399c7f44023f1d8',
      'e0e3882a-a043-4f65-9d44-9df9a06eb3f5_rw_3840.jpg?h=55f369c6f8b0eec39651b2d41a410f53',
    ].map(cdn),
  },
  {
    slug: 'i-come-to-you-as-the-myth',
    titre: 'I Come to You as the Myth',
    annee: '2022',
    artiste: 'Diva Muanza',
    supervision: 'Projet supervisé par le professeur Frédéric Dallaire',
    couverture: cdn('8864cd51-e113-42cd-a0c1-4b85fd9fd720_carw_3x4x1280.jpg?h=73ab421e561771f546be7b24c3f4563e'),
    images: [
      '6a7eda24-114c-46a8-8938-a160061d768c_rw_1920.jpg?h=fac90cc005b04b0da5b5054fa403f12b',
      '45b4420a-a5da-4d06-9935-faafd1271859_rw_1920.png?h=6ac2f14a5a01051b61a1cbc362bd2002',
      '501c0b8a-1319-47d0-85a8-8381c37a667c_rw_1920.jpg?h=21e865c9d91f9e1bfbcb3beadc56099b',
      '2cade217-16fc-4932-a129-a1bcda86adc1_rw_3840.jpg?h=d7f964f1dff91f72b0fe23b05f7fd32d',
      '3c6fcbd0-9a41-4472-97b0-2cb23c700968_rw_3840.jpg?h=ec82821d0284316e619b16bd7354e9a8',
      '5c5b9f79-395b-4eed-86af-53eeae59b58f_rw_1920.jpg?h=f48637cf11e1749effdf566929df38a6',
    ].map(cdn),
  },
  {
    slug: 'bague-a-l-ame',
    titre: 'Bague à l’âme',
    annee: '2022',
    artiste: 'Chloé Arqué',
    supervision: 'Projet supervisé par la professeure Natalie Doonan',
    couverture: cdn('a913ae3e-21c6-46f3-b18d-7d3d9c9ec263_rwc_0x69x1920x2557x1280.jpg?h=a7d1825d6e0094de30252006956cb9dc'),
    images: [
      '2fcc2a63-3da5-40d2-805b-e004ad17ddaf_rw_1920.jpg?h=38f750d8e193dccdffd444da7f7b2b00',
      '54ce02e2-7503-485d-9a52-9855f255ca31_rw_1920.png?h=a89dbdc42800d573ebcbcfc34b75ae78',
      '74817700-2d0b-43ae-a68f-9b6db60c5aca_rw_1920.jpg?h=b6359028a8738abe3e9421ced188e00d',
      'ecb2226f-cf5a-4eeb-9cf0-c5b22e90690f_rw_1920.jpg?h=9c459dc2199455be34a0ba0f7c57c444',
      'c9811e21-fad9-47e6-8d9c-41bd5cc10a55_rw_1920.jpg?h=201aadd2a367b2a92f85b2ebbd9ed477',
      'd72a6b0e-6446-4f56-ae38-3de1ced99a0a_rw_1920.jpg?h=8c2a7bb6017fd0ddfdb572e82724e757',
      '3aa71bfc-5370-4500-a1d3-380a6f483b3f_rw_1920.jpg?h=5966af0664e3c53a94216eac2eabaa3c',
      '244f83e1-60bf-4423-a8d9-51b394589878_rw_1920.jpg?h=c9f5f567a1a355fda55b03074d0e5e9b',
      '8249343f-c2cd-485e-861c-f5c43986b966_rw_1920.jpg?h=f75f2ddaded56fd3db361723cbcb3152',
      '05af6f58-015c-46e5-81b3-1a3c126f98cb_rw_1920.jpg?h=1411f8d2dffaf9eaeb98b2e3eacf450e',
      '7ddf80c5-6e00-47f9-878a-9d56e8a96d61_rw_1920.jpg?h=206233dbac647e24ae133bb36e71cab0',
      'c7d1a93a-f5b5-43b1-9f55-61bcb19f11dc_rw_1920.jpg?h=ade2ce1e52735d1f7d89ad2cdf2cdfc6',
      'bc30a45e-ef25-4d57-ba94-9f73566d512f_rw_1920.jpg?h=8443aa5bae378f75d6fc9d3407f10128',
      '743f948b-997c-4d98-83f0-f10d2781508b_rw_1920.jpg?h=b9a88107d02128ca0a25558c8f13d7ec',
      '36aa60c6-97d7-4b9e-8565-dfb826ecda6c_rw_1920.jpg?h=c4a6eaffa641c1ea83578e3f7802edbd',
      'e0814d6f-fe50-49e6-b013-61c4fdbc75ff_rw_1920.jpg?h=f58cec9aa6a7cdb125742460501e3b8f',
      'c39c2543-7eb3-4c9e-bdb2-633961bc1673_rw_3840.jpg?h=867a87c03368a7ec4e1319b97f588bbd',
      'a1e973a3-eb88-4bf1-b92c-3b118cb339f9_rw_3840.jpg?h=020679960aac5c774f5889da35d8b9c7',
    ].map(cdn),
  },
  {
    slug: 'coronado-de-sirenas',
    titre: 'Coronado de Sirenas',
    annee: '2022',
    artiste: 'Alexander Morales',
    supervision: 'Projet supervisé par le professeur François-Joseph Lapointe',
    couverture: cdn('0bb441ab-aa67-4862-a46b-d4165133e083_rwc_0x61x1920x2557x1280.jpg?h=30d05a876f52af3d3bf399936f4a30b7'),
    texte: [
      'Installation interactive (plantes artificielles, sac à perfusion, capteur de fréquences cardiaques, eau, bol de verre, anneaux lumineux DEL, séquence sonore, vidéo de documentation)',
      'Coronado de Sirenas est un projet de recherche-création qui cherche à rejeter l’horrible et macabre violence interne qui sévit en Colombie depuis plus de 60 ans. C’est un geste artistique qui aborde trois aspects fondamentaux de cette problématique : les « tombes liquides » dans lesquelles les rivières du pays ont été converties ; « la présence de l’absence » qui, telle une cicatrice, laisse une marque indélébile sur des milliers de familles colombiennes ; et « le corps miracle » avec lequel les habitants des bassins fluviaux résistent à la douleur, à la peur et à la tristesse.',
      'Coronado de Sirenas est une installation performative, adaptative et interactive qui entrecroise les espaces du réel, la synthèse sonore additive et la théâtralité. Le dispositif invite le spectateur à activer et intensifier la séquence sonore grâce à un capteur de fréquence cardiaque, qui lui permet de relier de manière sensible les battements de son cœur à la boîte de verre dans laquelle sont placés les éléments scénographiques et les traces de la démarche artistique. L’œuvre interroge également les potentialités entre l’hybridation artistique, les arts vivants et les nouvelles formes de représentation, ainsi que les liens entre la macro-politique et la micro-poétique.',
      'La terreur et la cruauté ont enterré des milliers de fils-filles-compatriotes, dans un conflit insensé. C’est pourquoi les plus de cent vingt mille corps Coronados de Sirenas qui ont disparu dans le courant des eaux ne peuvent être oubliés. L’amour de la terre ne s’est pas perdu et le désir de construire le pays dont rêvent de nombreux Colombiens et Colombiennes, persiste. Le silence n’est pas une option !',
      'Composition sonore : Simon Lahaie',
    ],
    images: [
      '3c0ae213-6320-4e3f-bb44-dd0028b71b24_rw_1920.jpg?h=beec5b3a44179a75e2f76a0e0ac7ac50',
      'fcf52bc8-5812-406a-9eb8-e58c36a36e7b_rw_1920.png?h=a6ccea49f2200b66a3f9e8bce00fe69a',
      'c3848009-cfec-4173-b3cd-1f74cfb9b9d5_rw_1920.jpg?h=2623bc42a5d87dc7012388c5fb981766',
      '59e244f9-81df-43bf-9458-925de696de52_rw_1920.jpg?h=b8d79b885ea627e8f389a26e7488853d',
      '54392a25-7016-4dde-9e8b-91c1865fd0e7_rw_1920.jpg?h=e0a16119236b18dd6b85b72fc595e4c6',
      '16741de4-aa15-41f8-b76c-1a1c4f72710a_rw_3840.jpg?h=c1ccffd15db0cf551e7ae6d35e6f9430',
      '9945f7d1-ff40-448f-8901-42f35eeed6ae_rw_3840.jpg?h=7e9dc2046b6c79494a5239609330b947',
      '34256d87-ae7a-4828-918a-a971a621041f_rw_1920.jpg?h=6c88910c8fb53bbea2758332aa13fdee',
      'ea103302-b53a-42eb-b25c-f2868eca4846_rw_1920.jpg?h=3817710e2428d1c0118ffb8291d6272f',
      '37c140d8-2364-4834-8eae-51fda1982b73_rw_3840.jpg?h=7e1bfd740f5c9a7b2a1a8ee28b4026e2',
      '83ef79a2-7a29-4934-9dd0-2ed69fb77551_rw_1920.jpg?h=eea6e6651c230417568f71804d9b41ca',
      '698a04f0-7ac9-42a9-a45b-9d2db6aa53d4_rw_1920.jpg?h=c6c59a6217f6d43762805ee3e8fa8fb6',
      '30b6c2c9-e3e3-4cb6-8ee3-5440b8183324_rw_3840.jpg?h=ce1b99f9c340760f196996e83db4e953',
      'b2469991-e2b5-403c-aa57-4b5dc803304e_rw_1920.jpg?h=8ec166498838698e0f332008c3ee0fea',
    ].map(cdn),
  },
];

// Générique de Follow on the Road (repris de en/portfolio/follow_on_the_road.md).
const generiqueFollow = [
  {
    titre: null,
    lignes: [
      ['Réalisation', 'Kevin Nicolas'],
      ['Production', 'Dominique Blouin et Kevin Nicolas'],
      ['Rôle principal', 'Lily Thibodeau'],
      ['Design graphique et animation', 'Youlia Rainous'],
      ['Images et montage', 'Kevin Nicolas'],
      ['Musique', 'Lily Tea & Tea for 20’s'],
      ['Consultation costumes', 'Jeanne Huguenin'],
      ['Conception sonore et mixage', 'Lily Thibodeau'],
      ['Consultation artistique', 'Axelle Hubert'],
    ],
  },
  {
    titre: 'Briser le silence',
    lignes: [
      ['Chorégraphie', 'Lily Thibodeau'],
      ['Musique', 'Take The A Train'],
      ['Coordination', 'Dominique Blouin et Erwan Jouault'],
      ['Assistance caméra', 'Dominique Blouin et Yam Atkins'],
      ['Danse', 'Armand De Asis, Daniel Repsch, Erwan Jouault, Guillaume Deschênes, Maude-Hélène Brouard, Mélanie Pasquarelli, Sophie Lundholm et Youlia Rainous'],
    ],
  },
  {
    titre: 'Vernacular Intelligence Agency',
    lignes: [
      ['Chorégraphie', 'Alice Bourgasser'],
      ['Musique', 'Love Me or Leave Me'],
      ['Coordination', 'Alice Bourgasser'],
      ['Assistance caméra', 'Erwan Jouault'],
      ['Danse', 'Alice Bourgasser, Catherine Desjardins, Coralie Bazinet, Dominique Jean, Marie-Ève Landry, Maryse Lebeau, Michel Campeau, Mylène Urvoy, Sandrine Lambin-Gagnon et Vicki Grenier'],
    ],
  },
  {
    titre: 'Jazz Division',
    lignes: [
      ['Chorégraphie', 'Alice Bourgasser'],
      ['Musique', 'À tout rompre'],
      ['Coordination', 'Alice Bourgasser'],
      ['Assistance caméra', 'Guillaume Deschênes'],
      ['Danse', 'Carolane Larocque, Edna Lam, Erwan Jouault, Marie-France Côté, Myriam Beauvais, Rachel Mathieu, Sandy Chenard et Youlia Rainous'],
    ],
  },
  {
    titre: 'The Follower Project',
    lignes: [
      ['Chorégraphie', 'Sandrine Lambin-Gagnon et Sabrina Dupras'],
      ['Musique', 'I Can’t Give You Anything But Love'],
      ['Coordination', 'Sandrine Lambin-Gagnon'],
      ['Assistance caméra', 'Guillaume Deschênes'],
      ['Danse', 'Maude-Hélène Brouard, Rachel Mathieu, Sabrina Dupras et Sandrine Lambin-Gagnon'],
    ],
  },
  {
    titre: 'Maison Velours',
    lignes: [
      ['Chorégraphie', 'Liliann Malcolm'],
      ['Musique', 'Delta Bound'],
      ['Coordination', 'Liliann Malcolm'],
      ['Assistance caméra', 'Erwan Jouault'],
      ['Danse', 'Alexanne Lessard, Liliann Malcolm, Lorie-Anne Chamberland, Margaux Delmas, Marie Lanteigne, Roxane St-Amand et Sophie Lamontagne'],
    ],
  },
  {
    titre: 'Hand Clappers',
    lignes: [
      ['Chorégraphie', 'Antoine Simard, Coralie Bazinet et Michel Campeau'],
      ['Musique', 'The Dipsy Doodle'],
      ['Coordination', 'Alice Bourgasser'],
      ['Assistance caméra', 'Amélie Paulus'],
      ['Danse', 'Alice Bourgasser, Antoine Simard, Coralie Bazinet et Michel Campeau'],
    ],
  },
  {
    titre: 'When I Get Low I Get High',
    lignes: [
      ['Chorégraphie', 'Sophie Royer'],
      ['Musique', 'When I Get Low I Get High'],
      ['Coordination', 'Dominique Blouin'],
      ['Assistance caméra', 'Dominique Blouin'],
      ['Danse', 'Axelle Hubert, Dominique Blouin, Jeanne Huguenin, Lily Thibodeau et Sophie Royer'],
    ],
  },
  {
    titre: 'Mamans swing',
    lignes: [
      ['Chorégraphie', 'Sophie Royer et Dominique Blouin'],
      ['Musique', 'Si tu vois ma mère'],
      ['Coordination', 'Dominique Blouin'],
      ['Assistance caméra', 'Sophie Royer'],
      ['Danse', 'Axelle Hubert, Dominique Blouin, Geneviève Boily, Manon Longuépéé, Mariane Robillard, Marie-Ève Gélinas et Marie-Eve Tremblay'],
      ['Enfants', 'Ariel Côté, Charles Lafleur, Clément Lavergne, Edgar Beauchemin, Louis-Joseph Côté, Noa Boily-Bergeron, Raphaelle Côté et Victor Beauchemin'],
    ],
  },
  {
    titre: 'Shim Sham',
    lignes: [
      ['Chorégraphie', 'Leonard Reed, Willie Bryant et Frankie Manning'],
      ['Musique', 'It Ain’t What You Do, It’s The Way That You Do It'],
    ],
  },
  {
    titre: 'Shim Sham — Lévis',
    lignes: [
      ['Coordination', 'Dominique Blouin'],
      ['Assistance caméra', 'Sophie Royer'],
      ['Danse', 'Geneviève Boily, Marie-Eve Tremblay, Marie-Ève Gélinas, Manon Longuépéé, Mariane Robillard, Axelle Hubert, Dominique Blouin, Sophie Royer et Lily Thibodeau'],
    ],
  },
  {
    titre: 'Shim Sham — Trois-Rivières',
    lignes: [
      ['Coordination', 'Stéphanie Roy'],
      ['Assistance caméra', 'Stéphanie Roy'],
      ['Danse', 'Andréanne Germain, Anne Matte, Gabriel Antonius, James Timmons, Jennifer Buchanan, Jonathan Johnson, Nanouk Abonnenc et Stéphanie Roy'],
    ],
  },
  {
    titre: 'Shim Sham — Saint-Georges',
    lignes: [
      ['Coordination', 'Alexandre Vanasse'],
      ['Assistance caméra', 'Dominique Blouin'],
      ['Danse', 'Alexandre Vanasse, Isabelle Garant, Kevin Morin, Laurence Wassmer, Marie-Eve Laflamme, Olivier Duval et Virginy Duval'],
    ],
  },
  {
    titre: 'Shim Sham — Sherbrooke',
    lignes: [
      ['Coordination', 'Pascale Rousseau'],
      ['Assistance caméra', 'Pascale Rousseau'],
      ['Danse', 'Jade-Anaïs Généreux-Gamache, Lévy LeBlanc, Marie-Andrée Mongeau, Marie-Pierre Varin, Myrthô Ouelette, Pascal Caron et Pascale Rousseau'],
    ],
  },
  {
    titre: 'Shim Sham — Val-David',
    lignes: [
      ['Coordination', 'Stéphane Lalonde'],
      ['Assistance caméra', 'Zoë Yalden'],
      ['Danse', 'Caroline Dusseault, Eliane Gendron, Karine Gendron, Lan Luu, Pascale Therreault, Stéphane Lalonde et Taylor Lukian'],
    ],
  },
  {
    titre: 'Shim Sham — Drummondville',
    lignes: [
      ['Coordination', 'Daisy Forest'],
      ['Assistance caméra', 'Joëlle Leblanc'],
      ['Danse', 'Daisy Forest, Éloïse Bergeron, Nicolas Voyer, Olivier Samson et Roxanne Chapdelaine'],
    ],
  },
  {
    titre: 'Shim Sham — Montréal',
    lignes: [
      ['Coordination', 'Erwan Jouault'],
      ['Assistance caméra', 'Youlia Rainous'],
      ['Danse', 'Andréanne Beaudoin Poulin, Anne Laure Bienaimé, Christelle Zebbar, Edna Lam, Erwan Jouault, Robyn Penney, Yan Cyr-Haschigk et Youlia Rainous'],
    ],
  },
  {
    titre: 'Shim Sham — Québec',
    lignes: [
      ['Coordination', 'Gregory Eric Fodé Sanderson'],
      ['Assistance caméra', 'Dominique Blouin'],
      ['Danse', 'Adam Hammes, Dominique Blouin, Érika Beaulieu, Gregory Eric Fodé Sanderson, Jeanne Huguenin, Michael O’Malley, Pierre-Olivier Parisé et Silvia Innocenti'],
    ],
  },
  {
    titre: 'Shim Sham — Rimouski',
    lignes: [
      ['Coordination', 'Denis Osmani'],
      ['Assistance caméra', 'Dominique Blouin'],
      ['Danse', 'Annick Buteau, Denis Osmani, Jean-Pascal Soucy, Jennie Hurwood et Lily Thibodeau'],
    ],
  },
  {
    titre: 'Équipe et remerciements',
    lignes: [
      ['Assistance à la production', 'Axelle Hubert et Jeanne Huguenin'],
      ['Photographie', 'Marc-Antoine Jean et Marie-Eve Trudel'],
      ['Accessoires', 'Catherine Desjardins'],
      ['Équipe éditoriale', 'Didier Jean-François, Maxime Juneau, Nick Williams et Pierre Guimond'],
      ['Mentions spéciales', 'Annie Lévesque, Catherine Cloutier, Félix-Antoine Bergeron, François Beauchemin, Jean-François Côté, Maria Mastorakos, Martin Picard, Michaël Labrecque et Patricia Hubert'],
      ['Merci à nos donateurs et donatrices', 'Alexandre Vanasse, Amrita Daigle, Anne-Marie Michaud, Annie Desjardins, Benoît Dautelle, Benoît Hubert, Bernard Huguenin, capucinechartrand, Catherine Cloutier, Catherine Lapointe, Catherine Samson-Brouard, Christine Laguë, Daniel Guenard, Dany Bergeron, Daphné Trottier, Éloïse Bergeron, Eric Hubert, Eric Leclerc, Erwan Jouault, Félix Grenier, Florence Thibodeau, Franck Martin, Gabriel Blouin, Gabriel Gosselin, Gilles Poirier, Guy Lafleur, Haithem Kristou, James Timmons, Jean Pierre Roux, Jean Thibodeau, Jean-François Poulin, Jennie Hurwood, Jennifer Buchanan, Kais Yousfi, La Cabane a Swing, Louis Vallee, Luc Rivet, m-dominique, Manon de Ladurantaye, Manon Longuépée, Mariane Robillard, Marianne Bonnard, Marie-Ève Gélinas, Marie-Pier Aubin, Martin Otabe, Martin Picard, Mauricio Carvallo, Maxime Duval, mp_bourget, Mylène Urvoy, Noëlla Chênevert, Pascal Larose, Patrick Chung, Rachel Mathieu, Robyn Penney, Samuel Raymond, Sebastien Dugas, Silvia Innocenti, Sonya Banal, Sophie Royer, Stan Yen, Steeve Roy, Stephane Lalonde, Tim Lauzon, Timothée Bessette, Virginy Duval, Vladimir Romanov, Yael Acre et Yan Cyr-Haschigk'],
      ['Merci à nos partenaires', 'La Swing Ambassade, Studio 88 Swing, Théâtre Plaza et Harlem Shoes'],
    ],
  },
];

// Projets de la page d'accueil, dans l'ordre d'affichage.
export const projets = [
  {
    slug: 'diffraction-land',
    titre: 'Diffraction',
    annee: '2022',
    roles: ['photographie documentaire'],
    description: [
      'Les personnes finissantes du D.E.S.S. en arts, création et technologies de l’Université de Montréal présentent Diffraction, une exposition de leurs projets de création, au Hall du jardin de la Bibliothèque des sciences du Campus MIL. Réunissant les œuvres de Chloé Arqué, Michèle Barcena-Sougavinski, Julie Delacroix-Lavoie, Alexander Morales, Diva Muanza et Ariane Rancourt, cette exposition a été réalisée dans le cadre de l’atelier « Mise en espace des œuvres », sous la direction de Marianne Cloutier.',
      'Vidéo d’animation, univers 3D, projection vidéo, installation et performance se conjuguent dans six projets de recherche-création portant sur les perceptions, les mémoires individuelles et collectives, la violence et les vulnérabilités.',
    ],
    couverture: cdn('b94032ba-bd87-4306-b3fc-7b20085fecdf_rwc_368x0x2252x3000x1280.png?h=f67b558f1042465c7164f87781ea6c9f'),
    galerie: diffraction,
  },
  {
    slug: 'vieilles-maisons',
    titre: 'Dans nos vieilles maisons',
    annee: '2021',
    roles: ['coréalisation'],
    description: [
      'Un vidéoclip joyeux que j’ai eu le plaisir de coréaliser avec Lily Thibodeau pour son groupe Tea for 20’s.',
    ],
    couverture: cdn('30ec9cc8-517a-49b0-bc64-54b0bc4e7568_rwc_839x0x5128x6830x1280.png?h=216ce59812ae6f338683833bb75ca677'),
    videos: [
      { vimeo: '772677267', titre: 'Dans nos vieilles maisons (Muriel Millard) – Tea for 20’s', ratio: 16 / 9 },
    ],
    images: [
      '621098b2-1081-450c-9676-5d70ca0be370_rw_3840.png?h=63d005c79539c436067e90e56bc76440',
      'd732ffb3-d29c-4a89-abf2-624ef827cc48_rw_3840.png?h=72cc660a2441dcc7a1f6ba71cb527766',
      '6d2462a1-4779-4205-ab3d-d110a7280ecc_rw_3840.png?h=87ba5e6b46059540e776c9d934a8759b',
    ].map(cdn),
  },
  {
    slug: 'follow-on-the-road',
    titre: 'Follow on the Road',
    annee: '2020',
    roles: ['réalisation', 'caméra', 'montage', 'scénarisation'],
    description: [
      'Projet sans précédent, Follow on the Road est un film indépendant de danse swing contemporaine qui a réuni plus de 100 artistes de partout au Québec. Nous l’avons conçu comme une exploration de l’idée que la danse devrait être un médium inclusif. Cette philosophie demande de filmer la danse autrement : ce film ne cherche pas à vous montrer des gens qui dansent, mais à vous faire partager les sentiments et les émotions que l’on vit en faisant partie d’une communauté de danse.',
    ],
    couverture: cdn('c1524d42-785d-4762-885f-58a3ce902acf_rwc_368x0x2252x3000x1280.png?h=bae92ff2d68b5221aed0478c38d61184'),
    videos: [
      { vimeo: '745200371', hash: '6dede151c1', titre: 'Follow on the Road', ratio: 2048 / 858 },
    ],
    images: [
      '9a2bf733-e90e-4db8-8514-ce0ee0765527_rw_1200.jpg?h=f769bb09edbe9accc5d99308aa837702',
      'f8801081-31fd-424d-b78c-cd484fd5a79c_rw_1200.jpg?h=eca1af848c7e567a9d08a0cb5943a5c7',
      'a37532d1-d8df-41cf-bfc7-cb6d705a9de1_rw_1200.jpg?h=3de9f8a36185fb4a7539e33978be42e1',
    ].map(cdn),
    generique: generiqueFollow,
  },
  {
    slug: 'hexagram',
    titre: 'Hexagram — Projet RESO',
    annee: '2018',
    roles: ['direction'],
    description: [
      'En prévision de l’édition 2018 d’Ars Electronica, j’ai collaboré avec le Réseau Hexagram pour produire une représentation visuelle des interconnexions humaines et conceptuelles qui constituent l’organisation. Un projet fascinant, exposé à Linz, en Autriche, pour l’occasion.',
    ],
    couverture: cdn('546cf656-4dee-427f-b787-9ae84d2779dc_rwc_245x0x1501x2000x1280.png?h=c67ac83380abf8ae5c0c5dace86e61a0'),
    images: [
      '9f3b5db5-8baf-4949-92a2-de0b72ab39b7_rw_1920.png?h=dbb014102f779b90572b99789f0f722c',
      '6e675b28-42b7-475f-8453-1e764ba9339e_rw_1920.png?h=5214390e872fc5df156f2844b8850345',
    ].map(cdn),
  },
  {
    slug: 'du-coup-les-arts',
    titre: 'Du coup les arts',
    annee: '2017',
    roles: ['montage', 'animation graphique', 'design graphique', 'caméra'],
    description: [
      'Inspirée d’une expression bien française, « Du coup les arts » est une courte émission-débat sur l’art et la culture. Produite dans le cadre d’un cours de production télévisuelle, elle m’a permis de collaborer avec 30 personnes talentueuses : j’en ai signé l’animation graphique et le montage final des deux épisodes.',
    ],
    couverture: cdn('9c67a4c2-bb6e-44af-8929-48570f975467_rwc_265x0x1621x2160x1280.png?h=ce33c27266516293b7bc788ad8b42f07'),
    videos: [{ vimeo: '745214774', titre: 'Du coup les arts – Émission 1', ratio: 16 / 9 }],
  },
];

// Anciennes adresses d'Adobe Portfolio à conserver.
export const redirections = [
  { de: 'work', vers: '' },
  { de: 'about', vers: 'a-propos/' },
  { de: 'diffraction', vers: 'diffraction-land/' },
];
