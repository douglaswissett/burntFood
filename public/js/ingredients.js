'use strict'
/*
  Dummie data page
*/

const _= require('underscore');




// let newArray = _.uniq(ingredients);
// var content = [
//   { title: "Bread"},
//   { title: "Eggs"},
//   { title: "Milk"},
//   { title: "Vanilla extract"},
//   { title: "Raw sugar"},
//   { title: "Ground cinnamon"},
//   { title: "Butter"},
//   { title: "Bone in skin on chicken thigh"},
//   { title: "Baby potatoes"},
//   { title: "Baby carrots"},
//   { title: "Olive oil"},
//   { title: "Salt"},
//   { title: "Pepper"},
//   { title: "Unsweetened applesauce"},
//   { title: "Granulated sugar"},
//   { title: "Large eggs"},
//   { title: "All-purpose flour"},
//   { title: "Baking soda"},
//   { title: "Baking powder"},
//   { title: "Cinnamon"},
//   { title: "Carrots"},
//   { title: "Cream cheese"},
//   { title: "Almond extract"},
//   { title: "Powdered sugar"},
//   { title: "Chicken breasts"},
//   { title: "Taco seasoning"},
//   { title: "Plain greek yogurt"},
//   { title: "Black beans"},
//   { title: "Salsa"},
//   { title: "Mexican cheese blend"},
//   { title: "Tortilla chips"},
//   { title: "Almond butter"},
//   { title: "Semisweet chocolate"},
//   { title: "White chocolate"},
//   { title: "Extra-virgin olive oil"},
//   { title: "Pure maple syrup"},
//   { title: "Apple cider vinegar"},
//   { title: "Grated lemon zest"},
//   { title: "Lemon juice"},
//   { title: "Kosher salt"},
//   { title: "Black pepper"},
//   { title: "Warm water"},
//   { title: "Instant yeast"},
//   { title: "Canola oil"},
//   { title: "Drummettes"},
//   { title: "Melted butter"},
//   { title: "Paprika"},
//   { title: "Onion powder"},
//   { title: "Honey"},
//   { title: "Sriracha"},
//   { title: "Lime juice"},
//   { title: "Soy sauce"},
//   { title: "Brownie mix"},
//   { title: "Light corn syrup"},
//   { title: "Salted butter"},
//   { title: "Heavy cream"},
//   { title: "Frosting"},
//   { title: "Unsweetened cocoa powder"},
//   { title: "Whole milk"},
//   { title: "Salmon fillets"},
//   { title: "Garlic"},
//   { title: "Chopped parsley"},
//   { title: "Parmesan cheese"},
//   { title: "Sliced potatoes"},
//   { title: "Flour"},
//   { title: "Cayenne pepper"},
//   { title: "Sharp cheddar cheese"},
//   { title: "Grating cheese"},
//   { title: "Lean ground pork"},
//   { title: "Lean ground beef"},
//   { title: "Sesame oil"},
//   { title: "Panko breadcrumbs"},
//   { title: "Ginger paste"},
//   { title: "Minced garlic"},
//   { title: "Green onions"},
//   { title: "Lemongrass"},
//   { title: "Marinade"},
//   { title: "Sesame seeds"},
//   { title: "Chicken legs"},
//   { title: "Tamari soy sauce"},
//   { title: "Hoisin sauce"},
//   { title: "Chinese mustard"},
//   { title: "Orange juice"},
//   { title: "Dijon mustard"},
//   { title: "Garlic cloves"},
//   { title: "Sea salt"},
//   { title: "Meat"},
//   { title: "Onions"},
//   { title: "Fresh ginger"},
//   { title: "Rice vinegar"},
//   { title: "Asian chili sauce"},
//   { title: "Dark sesame oil"},
//   { title: "Lettuce leaves"},
//   { title: "Low sodium soy sauce"},
//   { title: "Water"},
//   { title: "Ginger"},
//   { title: "Chili paste"},
//   { title: "Lime"},
//   { title: "Corn starch"},
//   { title: "Ground chicken"},
//   { title: "Salted cashews"},
//   { title: "Lettuce"},
//   { title: "Cilantro"},
//   { title: "Hellmann real mayonnais"},
//   { title: "Sugar"},
//   { title: "Ground ginger"},
//   { title: "Slaw mix"},
//   { title: "Chopped fresh cilantro"},
//   { title: "Chicken drumsticks"},
//   { title: "Olive oil spray"},
//   { title: "Balsamic vinegar"},
//   { title: "Chives"},
//   { title: "Ground black pepper"},
//   { title: "Wish bone western origin dress"},
//   { title: "Bacon, crisp-cooked and crumbled"},
//   { title: "Tomatoes"},
//   { title: "Coleslaw"},
//   { title: "Unsalted butter"},
//   { title: "Green bell pepper"},
//   { title: "Ham"},
//   { title: "Iceberg lettuce"},
//   { title: "Frozen whole kernel corn"},
//   { title: "Cucumber"},
//   { title: "Purple onion"},
//   { title: "Shredded Monterey Jack cheese"},
//   { title: "Wish bone western dress"},
//   { title: "Seasoning salt"},
//   { title: "Cooked ham"},
//   { title: "Shredded cheddar cheese"},
//   { title: "Finely chopped onion"},
//   { title: "Chopped green bell pepper"},
//   { title: "Red bell pepper"},
//   { title: "Fresh chives"},
//   { title: "Chopped onion"},
//   { title: "Chopped bell pepper"},
//   { title: "Deli ham"},
//   { title: "Chopped ham"},
//   { title: "Green pepper"},
//   { title: "Cheese"},
//   { title: "Pork shoulder"},
//   { title: "Barbecue rub"},
//   { title: "Barbecue sauce"},
//   { title: "Sweet onion"},
//   { title: "Ground beef"},
//   { title: "Wagon wheel pasta, cook and drain"},
//   { title: "Chili powder"},
//   { title: "Cumin seed"},
//   { title: "Chile pepper"},
//   { title: "Ground turmeric"},
//   { title: "Mustard greens"},
//   { title: "Fresh spinach"},
//   { title: "Ground cumin"},
//   { title: "Ground coriander"},
//   { title: "Potatoes"},
//   { title: "Ghee"},
//   { title: "Ginger root"},
//   { title: "Stew"},
//   { title: "Coriander"},
//   { title: "Amchur"},
//   { title: "Green chilies"},
//   { title: "Garam masala"},
//   { title: "Turmeric"},
//   { title: "Red chili powder"},
//   { title: "Safflower oil"},
//   { title: "Yellow onion"},
//   { title: "Dried mint"},
//   { title: "Cauliflower florets"},
//   { title: "Low sodium vegetable broth"},
//   { title: "Quick cooking brown rice"},
//   { title: "Currant"},
//   { title: "Frozen peas"},
//   { title: "Lentils"},
//   { title: "Unsalted almonds"},
//   { title: "Low-fat plain yogurt"},
//   { title: "Cauliflower"},
//   { title: "Oil"},
    
// ];


// ingredients.forEach((el) => {
//   console.log(`{ title: "${el.charAt(0).toUpperCase() + el.substr(1)}"},`);
// })

// // takes ingredients, creates options tag with Capitalize display name
// ingredients.forEach((el) => {
//   console.log(`<option value="${el}">${el.charAt(0).toUpperCase() + el.substr(1)}</option>`);
// })

// var ingredients = [ 
//   'bread',
//   'eggs',
//   'milk',
//   'vanilla extract',
//   'raw sugar',
//   'ground cinnamon',
//   'butter',
//   'bone in skin on chicken thigh',
//   'baby potatoes',
//   'baby carrots',
//   'olive oil',
//   'salt',
//   'pepper',
//   'unsweetened applesauce',
//   'granulated sugar',
//   'large eggs',
//   'all-purpose flour',
//   'baking soda',
//   'baking powder',
//   'cinnamon',
//   'carrots',
//   'cream cheese',
//   'almond extract',
//   'powdered sugar',
//   'chicken breasts',
//   'taco seasoning',
//   'plain greek yogurt',
//   'black beans',
//   'salsa',
//   'Mexican cheese blend',
//   'tortilla chips',
//   'almond butter',
//   'semisweet chocolate',
//   'white chocolate',
//   'extra-virgin olive oil',
//   'pure maple syrup',
//   'apple cider vinegar',
//   'grated lemon zest',
//   'lemon juice',
//   'kosher salt',
//   'black pepper',
//   'warm water',
//   'instant yeast',
//   'canola oil',
//   'drummettes',
//   'melted butter',
//   'paprika',
//   'onion powder',
//   'honey',
//   'Sriracha',
//   'lime juice',
//   'soy sauce',
//   'brownie mix',
//   'light corn syrup',
//   'salted butter',
//   'heavy cream',
//   'frosting',
//   'unsweetened cocoa powder',
//   'whole milk',
//   'salmon fillets',
//   'garlic',
//   'chopped parsley',
//   'parmesan cheese',
//   'sliced potatoes',
//   'flour',
//   'cayenne pepper',
//   'sharp cheddar cheese',
//   'grating cheese',
//   'lean ground pork',
//   'lean ground beef',
//   'sesame oil',
//   'panko breadcrumbs',
//   'ginger paste',
//   'minced garlic',
//   'green onions',
//   'lemongrass',
//   'marinade',
//   'sesame seeds',
//   'chicken legs',
//   'tamari soy sauce',
//   'hoisin sauce',
//   'chinese mustard',
//   'orange juice',
//   'dijon mustard',
//   'garlic cloves',
//   'sea salt',
//   'meat',
//   'onions',
//   'fresh ginger',
//   'rice vinegar',
//   'Asian chili sauce',
//   'dark sesame oil',
//   'lettuce leaves',
//   'low sodium soy sauce',
//   'water',
//   'ginger',
//   'chili paste',
//   'lime',
//   'corn starch',
//   'ground chicken',
//   'salted cashews',
//   'lettuce',
//   'cilantro',
//   'hellmann real mayonnais',
//   'sugar',
//   'ground ginger',
//   'slaw mix',
//   'chopped fresh cilantro',
//   'chicken drumsticks',
//   'olive oil spray',
//   'balsamic vinegar',
//   'chives',
//   'ground black pepper',
//   'wish bone western origin dress',
//   'bacon, crisp-cooked and crumbled',
//   'tomatoes',
//   'coleslaw',
//   'unsalted butter',
//   'green bell pepper',
//   'ham',
//   'iceberg lettuce',
//   'frozen whole kernel corn',
//   'cucumber',
//   'purple onion',
//   'shredded Monterey Jack cheese',
//   'wish bone western dress',
//   'seasoning salt',
//   'cooked ham',
//   'shredded cheddar cheese',
//   'finely chopped onion',
//   'chopped green bell pepper',
//   'red bell pepper',
//   'fresh chives',
//   'chopped onion',
//   'chopped bell pepper',
//   'deli ham',
//   'chopped ham',
//   'green pepper',
//   'cheese',
//   'pork shoulder',
//   'barbecue rub',
//   'barbecue sauce',
//   'sweet onion',
//   'ground beef',
//   'wagon wheel pasta, cook and drain',
//   'chili powder',
//   'cumin seed',
//   'chile pepper',
//   'ground turmeric',
//   'mustard greens',
//   'fresh spinach',
//   'ground cumin',
//   'ground coriander',
//   'potatoes',
//   'ghee',
//   'ginger root',
//   'stew',
//   'coriander',
//   'amchur',
//   'green chilies',
//   'garam masala',
//   'turmeric',
//   'red chili powder',
//   'safflower oil',
//   'yellow onion',
//   'dried mint',
//   'cauliflower florets',
//   'low sodium vegetable broth',
//   'quick cooking brown rice',
//   'currant',
//   'frozen peas',
//   'lentils',
//   'unsalted almonds',
//   'low-fat plain yogurt',
//   'cauliflower',
//   'oil' ]


/*
<select name="ingredients" className="ui selection dropdown multiple" multiple="" id="multi-select">
  <option value="">ingredients</option>
  <option value="bread">Bread</option>
  <option value="eggs">Eggs</option>
  <option value="milk">Milk</option>
  <option value="vanilla extract">Vanilla extract</option>
  <option value="raw sugar">Raw sugar</option>
  <option value="ground cinnamon">Ground cinnamon</option>
  <option value="butter">Butter</option>
  <option value="bone in skin on chicken thigh">Bone in skin on chicken thigh</option>
  <option value="baby potatoes">Baby potatoes</option>
  <option value="baby carrots">Baby carrots</option>
  <option value="olive oil">Olive oil</option>
  <option value="salt">Salt</option>
  <option value="pepper">Pepper</option>
  <option value="unsweetened applesauce">Unsweetened applesauce</option>
  <option value="granulated sugar">Granulated sugar</option>
  <option value="large eggs">Large eggs</option>
  <option value="all-purpose flour">All-purpose flour</option>
  <option value="baking soda">Baking soda</option>
  <option value="baking powder">Baking powder</option>
  <option value="cinnamon">Cinnamon</option>
  <option value="carrots">Carrots</option>
  <option value="cream cheese">Cream cheese</option>
  <option value="almond extract">Almond extract</option>
  <option value="powdered sugar">Powdered sugar</option>
  <option value="chicken breasts">Chicken breasts</option>
  <option value="taco seasoning">Taco seasoning</option>
  <option value="plain greek yogurt">Plain greek yogurt</option>
  <option value="black beans">Black beans</option>
  <option value="salsa">Salsa</option>
  <option value="Mexican cheese blend">Mexican cheese blend</option>
  <option value="tortilla chips">Tortilla chips</option>
  <option value="almond butter">Almond butter</option>
  <option value="semisweet chocolate">Semisweet chocolate</option>
  <option value="white chocolate">White chocolate</option>
  <option value="extra-virgin olive oil">Extra-virgin olive oil</option>
  <option value="pure maple syrup">Pure maple syrup</option>
  <option value="apple cider vinegar">Apple cider vinegar</option>
  <option value="grated lemon zest">Grated lemon zest</option>
  <option value="lemon juice">Lemon juice</option>
  <option value="kosher salt">Kosher salt</option>
  <option value="black pepper">Black pepper</option>
  <option value="warm water">Warm water</option>
  <option value="instant yeast">Instant yeast</option>
  <option value="canola oil">Canola oil</option>
  <option value="drummettes">Drummettes</option>
  <option value="melted butter">Melted butter</option>
  <option value="paprika">Paprika</option>
  <option value="onion powder">Onion powder</option>
  <option value="honey">Honey</option>
  <option value="Sriracha">Sriracha</option>
  <option value="lime juice">Lime juice</option>
  <option value="soy sauce">Soy sauce</option>
  <option value="brownie mix">Brownie mix</option>
  <option value="light corn syrup">Light corn syrup</option>
  <option value="salted butter">Salted butter</option>
  <option value="heavy cream">Heavy cream</option>
  <option value="frosting">Frosting</option>
  <option value="unsweetened cocoa powder">Unsweetened cocoa powder</option>
  <option value="whole milk">Whole milk</option>
  <option value="salmon fillets">Salmon fillets</option>
  <option value="garlic">Garlic</option>
  <option value="chopped parsley">Chopped parsley</option>
  <option value="parmesan cheese">Parmesan cheese</option>
  <option value="sliced potatoes">Sliced potatoes</option>
  <option value="flour">Flour</option>
  <option value="cayenne pepper">Cayenne pepper</option>
  <option value="sharp cheddar cheese">Sharp cheddar cheese</option>
  <option value="grating cheese">Grating cheese</option>
  <option value="lean ground pork">Lean ground pork</option>
  <option value="lean ground beef">Lean ground beef</option>
  <option value="sesame oil">Sesame oil</option>
  <option value="panko breadcrumbs">Panko breadcrumbs</option>
  <option value="ginger paste">Ginger paste</option>
  <option value="minced garlic">Minced garlic</option>
  <option value="green onions">Green onions</option>
  <option value="lemongrass">Lemongrass</option>
  <option value="marinade">Marinade</option>
  <option value="sesame seeds">Sesame seeds</option>
  <option value="chicken legs">Chicken legs</option>
  <option value="tamari soy sauce">Tamari soy sauce</option>
  <option value="hoisin sauce">Hoisin sauce</option>
  <option value="chinese mustard">Chinese mustard</option>
  <option value="orange juice">Orange juice</option>
  <option value="dijon mustard">Dijon mustard</option>
  <option value="garlic cloves">Garlic cloves</option>
  <option value="sea salt">Sea salt</option>
  <option value="meat">Meat</option>
  <option value="onions">Onions</option>
  <option value="fresh ginger">Fresh ginger</option>
  <option value="rice vinegar">Rice vinegar</option>
  <option value="Asian chili sauce">Asian chili sauce</option>
  <option value="dark sesame oil">Dark sesame oil</option>
  <option value="lettuce leaves">Lettuce leaves</option>
  <option value="low sodium soy sauce">Low sodium soy sauce</option>
  <option value="water">Water</option>
  <option value="ginger">Ginger</option>
  <option value="chili paste">Chili paste</option>
  <option value="lime">Lime</option>
  <option value="corn starch">Corn starch</option>
  <option value="ground chicken">Ground chicken</option>
  <option value="salted cashews">Salted cashews</option>
  <option value="lettuce">Lettuce</option>
  <option value="cilantro">Cilantro</option>
  <option value="hellmann' or best food real mayonnais">Hellmann or best food real mayonnais</option>
  <option value="sugar">Sugar</option>
  <option value="ground ginger">Ground ginger</option>
  <option value="slaw mix">Slaw mix</option>
  <option value="chopped fresh cilantro">Chopped fresh cilantro</option>
  <option value="chicken drumsticks">Chicken drumsticks</option>
  <option value="olive oil spray">Olive oil spray</option>
  <option value="balsamic vinegar">Balsamic vinegar</option>
  <option value="chives">Chives</option>
  <option value="ground black pepper">Ground black pepper</option>
  <option value="wish bone western origin dress">Wish bone western origin dress</option>
  <option value="bacon">Bacon</option>
  <option value="tomatoes">Tomatoes</option>
  <option value="coleslaw">Coleslaw</option>
  <option value="unsalted butter">Unsalted butter</option>
  <option value="green bell pepper">Green bell pepper</option>
  <option value="ham">Ham</option>
  <option value="iceberg lettuce">Iceberg lettuce</option>
  <option value="frozen whole kernel corn">Frozen whole kernel corn</option>
  <option value="cucumber">Cucumber</option>
  <option value="purple onion">Purple onion</option>
  <option value="shredded Monterey Jack cheese">Shredded Monterey Jack cheese</option>
  <option value="wish bone western dress">Wish bone western dress</option>
  <option value="seasoning salt">Seasoning salt</option>
  <option value="cooked ham">Cooked ham</option>
  <option value="shredded cheddar cheese">Shredded cheddar cheese</option>
  <option value="finely chopped onion">Finely chopped onion</option>
  <option value="chopped green bell pepper">Chopped green bell pepper</option>
  <option value="red bell pepper">Red bell pepper</option>
  <option value="fresh chives">Fresh chives</option>
  <option value="chopped onion">Chopped onion</option>
  <option value="chopped bell pepper">Chopped bell pepper</option>
  <option value="deli ham">Deli ham</option>
  <option value="chopped ham">Chopped ham</option>
  <option value="green pepper">Green pepper</option>
  <option value="cheese">Cheese</option>
  <option value="pork shoulder">Pork shoulder</option>
  <option value="barbecue rub">Barbecue rub</option>
  <option value="barbecue sauce">Barbecue sauce</option>
  <option value="sweet onion">Sweet onion</option>
  <option value="ground beef">Ground beef</option>
  <option value="wagon wheel pasta, cook and drain">Wagon wheel pasta, cook and drain</option>
  <option value="chili powder">Chili powder</option>
  <option value="cumin seed">Cumin seed</option>
  <option value="chile pepper">Chile pepper</option>
  <option value="ground turmeric">Ground turmeric</option>
  <option value="mustard greens">Mustard greens</option>
  <option value="fresh spinach">Fresh spinach</option>
  <option value="ground cumin">Ground cumin</option>
  <option value="ground coriander">Ground coriander</option>
  <option value="potatoes">Potatoes</option>
  <option value="ghee">Ghee</option>
  <option value="ginger root">Ginger root</option>
  <option value="stew">Stew</option>
  <option value="coriander">Coriander</option>
  <option value="amchur">Amchur</option>
  <option value="green chilies">Green chilies</option>
  <option value="garam masala">Garam masala</option>
  <option value="turmeric">Turmeric</option>
  <option value="red chili powder">Red chili powder</option>
  <option value="safflower oil">Safflower oil</option>
  <option value="yellow onion">Yellow onion</option>
  <option value="dried mint">Dried mint</option>
  <option value="cauliflower florets">Cauliflower florets</option>
  <option value="low sodium vegetable broth">Low sodium vegetable broth</option>
  <option value="quick cooking brown rice">Quick cooking brown rice</option>
  <option value="currant">Currant</option>
  <option value="frozen peas">Frozen peas</option>
  <option value="lentils">Lentils</option>
  <option value="unsalted almonds">Unsalted almonds</option>
  <option value="low-fat plain yogurt">Low-fat plain yogurt</option>
  <option value="cauliflower">Cauliflower</option>
  <option value="oil">Oil</option>
</select>
*/

// <form id="recipeSearchForm" onSubmit={this.handleSubmit}>
//   <div className="ui icon input">
//     <input type="text" ref="recipeQ" placeholder="Search ingredients..." />
//     <i className="search icon"></i>
//   </div>
//   <button className="positive ui button" style={{marginTop: '15px'}}>Search</button>
// </form>
