// class Products {
//     render() {
//         let htmlCalalog = '';

//         CATALOG.forEach(({id, name, price}) => {
            
//             htmlCatalog += `
//             <li>
//                 <span>${name}</span>
//                 <span>${price}</span>
//                 <button>ДОБАВИТЬ В КОРЗИНУ</button>
//             </li>
//             `;
//         });

//         const html = `
//             <ul>
//                 ${htmlCalalog}
//             </ul>
//         `;

//         ROOT_PRODUCTS.innerHTML = html;
//     }
// }

// const productsPage = new Products();
// productsPage.render();