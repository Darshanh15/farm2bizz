import apple from "../assets/fruits/apple.png";
import avocados from "../assets/fruits/Avocados.png";
import bananas from "../assets/fruits/Bananas.png";
import berries from "../assets/fruits/Berries.png";
import broccoli from "../assets/fruits/Broccoli.png";
import cherries from "../assets/fruits/Cherries.png";
import citrus from "../assets/fruits/Citrus.png";
import kiwifruit from "../assets/fruits/Kiwifruit.png";
import litchis from "../assets/fruits/Litchis.png";
import melons from "../assets/fruits/Melons.png";
import ornamentals from "../assets/fruits/Ornamentals.png";
import pears from "../assets/fruits/Pears.png";
import persimmons from "../assets/fruits/Persimmons.png";
import stoneFruit from "../assets/fruits/Stone Fruit.png";
import tableGrapes from "../assets/fruits/Table Grapes.png";
import tomatoes from "../assets/fruits/Tomatoes.png";
import other from "../assets/fruits/Other.png";

const fruits = [
  {
    id: "apples",
    name: "Apples",
    image: apple,
    dsort: 'Your apples are on a freshness journey to consumers—and we’re here for it',
    description: "Nothing beats the crispness, juiciness and taste of an apple picked fresh off the tree. And AgroFresh can help you maintain that just-picked freshness from field to consumer. Twenty years ago, it all started with SmartFresh™ and continues today with even more ways to take freshness further. We’re as obsessed with freshness, quality and value as you are—and our AgroFresh Apple Complete portfolio has all you need to be all about the apple. You’ll find everything from near-harvest solutions and integrated fungicide systems to digital innovations, all backed by our always-there-for-you support. How committed are we to helping you achieve the best apple quality with less food loss and waste? Completely.",
  },
  {
    id: "avocados",
    name: "Avocados",
    image: avocados,
    dsort: 'Keep your delicate avocados in top shape through storage and transport',
    description: "To provide the consistently fresh texture, appearance and flavor consumers prefer, more packers are discovering the benefits of our SmartFresh technology and VitaFresh Botanicals plant-based coatings.",
  },
  {
    id: "bananas",
    name: "Bananas",
    image: bananas,
    dsort: 'Earn more customers with just-right bananas every time',
    description: "Your mission: Impress customers in the produce section with tempting, just-right yellow bananas—while also capturing efficiencies and a strong ROI in the backroom. Our technology brings it within reach with an integrated 1-MCP packaging solution that generates return traffic, reduces shrink and saves labor.",
  },
  {
    id: "berries",
    name: "Berries",
    image: berries,
    dsort: 'Keep your delicious, delicate blueberries in prime condition from field to the consumer',
    description: "Demand for fresh, wholesome blueberries keeps rising—and so do the pressures on growers and packers to increase yields, reduce losses and deliver premium quality that wins bigger sales. AgroFresh is ready with our Harvista™ near-harvest ethylene control treatment in select markets delivering bigger, firmer berries and Berrisys, smart packaging solution to prevent fungal decay leading to more bountiful blueberry yields.",
  },
  {
    id: "broccoli",
    name: "Broccoli",
    image: broccoli,
    dsort: 'Deliver more beautiful broccoli to market with confidence, and ultimately to the end consumer by locking in freshness and protecting against outside elements.',
    description: "Our solution helps to maintain the broccoli turgidity, delays florets yellowing, and eliminates the need for top icing. The SmartFresh technology promotes sustainability, reduces the overall energy use, decreases the chance for foodborne illness, removes some of the OSHA worker safety related issues, and helps provide better quality broccoli to end consumers",
  },
  {
    id: "cherries",
    name: "Cherries",
    image: cherries,
    dsort: 'Grow bigger, more beautiful cherries with outstanding yields',
    description: "With an expanded label that includes blossom time application, the benefits of our Harvista™ pre-harvest treatments are now available to cherry growers. When applied to your cherry blossoms, Harvista technology interrupts the negative impacts of ethylene and allows more blossoms to develop into fruitlets, enhancing yield potential and driving revenue. Growers report significant impact on yield with two applications of Harvista.",
  },
  {
    id: "citrus",
    name: "Citrus",
    image: citrus,
    dsort: 'Full-spectrum freshness protection for citrus',
    description: "It takes special care to hold back disease and aging in citrus—and that’s why AgroFresh offers a full portfolio of post-harvest fungicides, coatings and detergents. Below, we’ve highlighted our leading solutions for citrus customers.",
  },
  {
    id: "kiwifruit",
    name: "Kiwifruit",
    image: kiwifruit,
    dsort: 'Satisfying your consumers’ cravings for firm, colorful kiwifruit',
    description: "Consumers have come to love the unique tang and taste of fresh, firm kiwifruit. And our SmartFresh™ technology has been central to this growth story for many years, opening up inventory and marketing flexibility for green and yellow varieties in key producing countries worldwide. Satisfying both controlled atmosphere (CA) and regular atmosphere (RA) guidelines, SmartFresh™ technology helps you maintain better firmness levels and overall freshness during and especially after storage.",
  },
  {
    id: "litchis",
    name: "Litchis",
    image: litchis,
    dsort: '',
    description: "Litchis are juicy tropical fruits rich in antioxidants.",
  },
  {
    id: "melons",
    name: "Melons",
    image: melons,
    dsort: 'Give melons an edge in the field and in storage, for greater success with consumers',
    description: "AgroFresh gives your melon program an advantage from the field all the way to the consumer. To help seedlings survive the transition to the harsh environment of an open field, count on LandSpring™ technology for larger plants, earlier flowering and harvest, and higher yields. And with our SmartFresh™ technology, you can help provide cantaloupes and honeydews better taste, aroma, freshness and appearance than standard melons, with greener coloring in honeydews and less-watery flavor.",
  },
  {
    id: "ornamentals",
    name: "Ornamentals",
    image: ornamentals,
    dsort: 'Preserving the vitality and beauty of flowers and plants',
    description: "Healthy, hardy leaves. Vibrant colors. Fragrant petals. To offer the consumers ornamentals they want, manage and control the aging effects of ethylene gas with our EthylBloc™ technology. It’s the key to better market management, extended shelf life, improved decay control and more efficient storage—for flowers, plants and bulbs that are fresh, healthy and beautiful.",
  },
  {
    id: "pears",
    name: "Pears",
    image: pears,
    dsort: 'Protecting pear quality and appearance for achieving more profitable packout',
    description: "Want pears that go the distance to deliver their freshest and most flavorful potential—without bruises and browning? Add the 1-MCP expertise of AgroFresh to your team. Proven on pears from Argentina to the Netherlands, Portugal to South Africa, our SmartFresh™ technology helps control bruising and scald, preserve stem freshness and reduce internal browning. For greater yields and better harvest management, look to our Harvista™ pre-harvest treatment. And now with integrated ActiMist™ thermofogging, you can easily add broad-spectrum fungicide control to your storage rooms for a highly effective total solution.",
  },
  {
    id: "persimmons",
    name: "Persimmons",
    image: persimmons,
    dsort: 'Deliciously fresh, healthy and tasty',
    description: "Persimmons are sweet fruits with a honey-like flavor. Maintain the firmness of the fruit for longer and eliminate the astringency of the persimmon, to successfully reach your target markets",
  },
  {
    id: "stone-fruit",
    name: "Stone Fruit",
    image: stoneFruit,
    dsort: 'Deliver fresher, better tasting plums—even after extended storage',
    description: "With SmartFresh™ technology, plums, peaches, and nectarines can arrive at market consistently fresher, better tasting and better looking for longer. Proven to increase firmness retention in stone fruit, SmartFresh helps maintain quality and reduce loss during extended time in storage. And by maintaining acidity and firmness of pulp and controlling the internal browning of the stone fruit pulp, it makes your stone fruit more attractive to buyers at the point of sale.",
  },
  {
    id: "table-grapes",
    name: "Table Grapes",
    image: tableGrapes,
    dsort: 'Keep Your Delicious, Delicate Table Grapes in Prime Condition.',
    description: "Experience the difference with our revolutionary approach to fresh produce preservation. Our cutting-edge innovations are tailor-made to safeguard your table grapes during transportation and storage.",
  },
  {
    id: "tomatoes",
    name: "Tomatoes",
    image: tomatoes,
    dsort: 'Extending freshness ripening opportunities for tomatoes',
    description: "For tomato grower-shippers, it’s a dual challenge: Getting the most productive yields at harvest, and making sure your precious cargo ultimately makes it to market firm, ripe and ready to impress. AgroFresh has you covered from greenhouse through distribution with advanced pre-harvest solutions to aid seedling survival, help prevent disease and boost harvests—plus the proven ethylene control to provide optimal control of tomato ripeness from shipping and all the way to retail.",
  },
  {
    id: "other",
    name: "Other Crops",
    image: other,
    dsort: 'Bringing the benefits of Smarter Freshness solutions to even more produce varieties',
    description: "Other crops include seasonal and regional varieties. In everything from pineapples to papaya to pomegranates and practically everywhere else freshness matters, you’ll find our solutions working hard to protect quality, reduce waste and deliver an outstanding customer experience.Contact your local AgroFresh account manager to determine availability and recommendations for use by specific country and crop.",
  },
];

export default fruits;
