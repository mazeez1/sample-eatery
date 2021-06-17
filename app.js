const menu = [
  {
    id: 1,
    title: "Marbled tres leches cake",
    category: "Dessert",
    price: 12.99,
    img: "./images/item-1.jpeg",
    desc: `Sponge cake flavor soaked in sweet condensed milk, evaporated milk and heavy cream. The name means 'Three Milks' thus the flavor profile.  A favorite among central American deserts with many flavors available.  <br> From Mexico.  `,
  },
  {
    id: 2,
    title: "Taco double",
    category: "Lunch",
    price: 6.99,
    img: "./images/item-2.jpeg",
    desc: `A popular and world renown stable of Latin cuisine.  fried tortilla that is folded or rolled and stuffed with a mixture (as of seasoned meat, cheese, and lettuce) beef and chicken being the most popular.   Two of your choice <br> From Mexico `,
  },
  {
    id: 3,
    title: "Tapado",
    category: "Dinner",
    price: 8.99,
    img: "./images/item-3.jpeg",
    desc: `A delicious seafood soup with coconut milk, this is a traditional dish from the Caribbean coast of Guatemala and Honduras. The fragrant coconut broth, packed with fresh fish, lobster, shrimp, plantain and yucca, makes it ideal for lunch or dinner. It's also gluten-free!  <br>From Guatamala.`,
  },
  {
    id: 4,
    title: "Batida de Lechosa",
    category: "Drinks",
    price: 2.99,
    img: "./images/item-4.jpeg",
    desc: `Brought over from Central America by the Spaniards in the early 16th century, lechosa grows very easily in the Carribean . The plant - which is technically a herb - is very hardy, and is one of the main items on the fruit vendor's cart.    This drink originated on the island of Hispanola which is now known as the Dominican Republic `,
  },
  {
    id: 5,
    title: "Desyauno Primo",
    category: "Breakfast",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `The typical Salvadoran breakfast includes beans, eggs, fried plantains, cheese or sour cream, and tortillas or bread. Here sausage and avocado are added as extra items.  <br> This traditional breakfast is from El Salvador  `,
  },
  {
    id: 6,
    title: "Tostada Francesa",
    category: "Breakfast",
    price: 4.99,
    img: "./images/item-6.jpeg",
    desc: `Though the common French toast has it’s origin in 17th century England, this Caribbean take uses a thick hardy pastry dough, along with melted sugar known as “azucar derretido” which is served there with common breakfast item of café con leche.  <br> This take on a popular breakfast was created in Cuba `,
  },
  {
    id: 7,
    title: "Olla de Carne",
    category: "Breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Olla Carne is a healthy vegetable beef soup that combines beef short ribs, acorn squash, sweet potato, chayote, corn on the cob and of course Costa Rican spices. Served with fresh white tortillas wet white rice -there’s a reason this is the Costa Rican national dish!   `,
  },
  {
    id: 8,
    title: "Café Con Leche ",
    category: "Drinks",
    price: 1.99,
    img: "./images/item-8.jpeg",
    desc: `Café con leche ('coffee with milk') is a Spanish coffee beverage consisting of strong coffee (usually espresso) mixed with scalded milk in approximately equal amounts.  <br> This brew we serve is of Honduras    `,
  },
  {
    id: 9,
    title: "Malloroca ",
    category: "Dessert",
    price: 2.99,
    img: "./images/item-9.jpeg",
    desc: `Named after the largest of the Spanish Islands.  Don’t be followed, this sugary pastry filled with either strawberry or cream, is a dessert but often aten for breakfast as well.  This dish has it’s origins in 18th century Puerto Rico `,
  },
  {
    id: 10,
    title: "Pastelillos de carne",
    category: "Lunch",
    price: 3.50,
    img: "./images/item-10.jpeg",
    desc: `Pastelillos de carne are a Caribbean street food staple and a hardy and flavor filled lunch snack; depending on how many you eat.  This recipe is made with a homemade pastelillo dough recipe and flavor-packed beef filling.   From Puerto Rico .`,
  },
  {
    id: 11,
    title: "Tostones  Plate (Fried Plantains)",
    category: "Dinner",
    price: 10.99,
    img: "/images/item-11.jpeg",
    desc: `A plantain is a very firm banana with a potato-like taste.  This traditional plate combines several other side dishes, rice, beans, chicken and crispy lemon.  This dinner plate was inspired by traditional Puerto Rican cuisine .`,
  },
  {
    id: 12,
    title: "Pitorro(Non-alcoholic)",
    category: "Drinks",
    price: 9.99,
    img: "/images/item-12.jpeg",
    desc: `This traditional spirit is often called Puerto Rican moonshine since it has historically been produced at home by distilling sugarcane or molasses. The drink is usually infused with other flavors like sliced fruit, coffee, or hazelnut. It’s a strong drink that is sure to warm you up.  Don’t worry for this drink it contains 0% alcohol but maintains the same taste! Leaving just a delicious fruit drink that lets you drive yourself home! <br> From Puerto Rico.`,
  },
  {
    id: 13,
    title: "Pescado Frito",
    category: "Dinner",
    price: 12.99,
    img: "/images/item-13.jpeg",
    desc: ` This Colombian-Style Fried Whole Fish is a very popular dish from the coast of Colombia. Some of the most popular fish in Colombia used to make this dish are: red snapper, mojarra and tilapia.  From Colombia`
  },
  {
    id: 14,
    title: "Arequipe",
    category: "Dessert",
    price: 9.99,
    img: "/images/item-14.jpeg",
    desc: ` I grew up eating arequipe or dulce de leche and it’s one of my favorite desserts. In Colombia we serve arequipe with obleas or saltine crackers or sometimes as a base for other desserts.  This delight is thanks to the country of Peru`,
  },


];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    //returns some HTML stuff
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}


//THIS IS THE BUTTONS 
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
