// // const apiUrl = 'http://localhost:1337/api'; // Adjust this based on your Strapi setup

// // // Function to show/hide sections
// // function showSection(sectionId) {
// //     document.querySelectorAll('.section').forEach(section => {
// //         section.style.display = 'none';
// //     });
// //     document.getElementById(sectionId).style.display = 'block';

// //     if (sectionId === 'productListSection') {
// //         fetchProducts(); // Fetch products when showing the product list section
// //     }
// // }

// // // Function to fetch categories from Strapi
// // async function fetchCategories() {
// //     try {
// //         const response = await axios.get(`${apiUrl}/categories`);
// //         const categories = response.data.data;
// //         const categorySelect = document.getElementById('category');

// //         // Clear existing options
// //         categorySelect.innerHTML = '<option value="">Select Category</option>';

// //         categories.forEach(category => {
// //             const option = document.createElement('option');
// //             option.value = category.id; // Assuming the ID is used for the relation
// //             option.textContent = category.attributes.name; // Adjust based on your category structure
// //             categorySelect.appendChild(option);
// //         });
// //     } catch (error) {
// //         console.error('Error fetching categories:', error);
// //     }
// // }

// // // Function to fetch products from Strapi
// // async function fetchProducts() {
// //     try {
// //         const response = await axios.get(`${apiUrl}/products`);
// //         const products = response.data.data; // Adjust based on your API response structure
// //         displayProducts(products);
// //     } catch (error) {
// //         console.error('Error fetching products:', error);
// //     }
// // }

// // // Function to display products
// // function displayProducts(products) {
// //     const productList = document.getElementById('productList');
// //     productList.innerHTML = ''; // Clear existing products

// //     if (products.length === 0) {
// //         productList.innerHTML = '<p>No products available.</p>';
// //         return;
// //     }

// //     products.forEach(product => {
// //         const productItem = document.createElement('div');
// //         productItem.className = 'product-item';
// //         productItem.innerHTML = `
// //             <h2>${product.attributes.name}</h2>
// //             <img src="${product.attributes.imageUrl}" class="product-image" alt="${product.attributes.name}" onclick="openModal('${product.attributes.imageUrl}')">
// //             <p>${product.attributes.description}</p>
// //             <p>Quantity: ${product.attributes.quantity}</p>
// //             <p>Category: ${product.attributes.category.data.attributes.name}</p>
// //             <p>Purchase Cost: $${product.attributes.purchaseCost}</p>
// //             <p>Sale Price: $${product.attributes.salePrice}</p>
// //         `;
// //         productList.appendChild(productItem);
// //     });
// // }

// // // Function to open modal
// // function openModal(imageUrl) {
// //     const modal = document.getElementById('modal');
// //     const modalImage = document.getElementById('modalImage');
// //     modalImage.src = imageUrl;
// //     modal.style.display = 'flex';
// // }

// // // Close modal on close button click
// // document.getElementById('closeModal').onclick = function() {
// //     document.getElementById('modal').style.display = 'none';
// // };

// // // Close modal when clicking outside of the image
// // window.onclick = function(event) {
// //     const modal = document.getElementById('modal');
// //     if (event.target === modal) {
// //         modal.style.display = 'none';
// //     }
// // };

// // // Function to add a new product
// // async function addProduct(event) {
// //     event.preventDefault();
// //     const formData = new FormData();
// //     formData.append('data', JSON.stringify({
// //         name: document.getElementById('name').value,
// //         description: document.getElementById('description').value,
// //         quantity: document.getElementById('quantity').value,
// //         category: document.getElementById('category').value,
// //         purchaseCost: document.getElementById('purchaseCost').value,
// //         salePrice: document.getElementById('salePrice').value,
// //         vendor: {
// //             name: document.getElementById('vendorName').value,
// //             logo: document.getElementById('vendorLogo').files[0],
// //             url: document.getElementById('vendorUrl').value,
// //             phone: document.getElementById('vendorPhone').value,
// //             email: document.getElementById('vendorEmail').value,
// //             address: document.getElementById('vendorAddress').value,
// //         }
// //     }));

// //     const imageFile = document.getElementById('image').files[0];
// //     if (imageFile) {
// //         formData.append('files.image', imageFile);
// //     }

// //     try {
// //         await axios.post(`${apiUrl}/products`, formData, {
// //             headers: {
// //                 'Content-Type': 'multipart/form-data',
// //             },
// //         });
// //         document.getElementById('successPopup').style.display = 'block';
// //         setTimeout(() => {
// //             document.getElementById('successPopup').style.display = 'none';
// //         }, 3000);
// //         fetchProducts(); // Refresh product list after adding
// //     } catch (error) {
// //         console.error('Error adding product:', error);
// //     }
// // }

// // // Function to add a new category
// // async function addCategory() {
// //     const newCategoryName = document.getElementById('newCategory').value.trim();
// //     if (newCategoryName) {
// //         try {
// //             await axios.post(`${apiUrl}/categories`, {
// //                 data: {
// //                     name: newCategoryName
// //                 }
// //             });
// //             document.getElementById('newCategory').value = ''; // Clear input
// //             alert('Category added successfully!');
// //             fetchCategories(); // Refresh categories after adding
// //         } catch (error) {
// //             console.error('Error adding category:', error);
// //         }
// //     } else {
// //         alert('Please enter a category name.');
// //     }
// // }

// // // Fetch categories on page load
// // fetchCategories();
// const apiUrl = 'http://localhost:1337/api'; // Adjust this based on your Strapi setup

// // Function to show/hide sections
// function showSection(sectionId) {
//     document.querySelectorAll('.section').forEach(section => {
//         section.style.display = 'none';
//     });
//     document.getElementById(sectionId).style.display = 'block';

//     if (sectionId === 'productListSection') {
//         fetchProducts(); // Fetch products when showing the product list section
//     }
// }

// // Function to fetch categories from Strapi
// async function fetchCategories() {
//     try {
//         const response = await axios.get(`${apiUrl}/categories`);
//         const categories = response.data.data;
//         const categorySelect = document.getElementById('category');

//         // Clear existing options
//         categorySelect.innerHTML = '<option value="">Select Category</option>';

//         categories.forEach(category => {
//             const option = document.createElement('option');
//             option.value = category.id; // Assuming the ID is used for the relation
//             option.textContent = category.attributes.name; // Adjust based on your category structure
//             categorySelect.appendChild(option);
//         });
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//     }
// }

// // Function to fetch products from Strapi
// async function fetchProducts() {
//     try {
//         const response = await axios.get(`${apiUrl}/products`);
//         const products = response.data.data; // Adjust based on your API response structure
//         displayProducts(products);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// }

// // Function to display products
// function displayProducts(products) {
//     const productList = document.getElementById('productList');
//     productList.innerHTML = ''; // Clear existing products

//     if (!products || products.length === 0) {
//         productList.innerHTML = '<p>No products available.</p>';
//         return;
//     }

//     products.forEach(product => {
//         const productItem = document.createElement('div');
//         productItem.className = 'product-item';
//         productItem.innerHTML = `
//             <h2>${product.attributes.name}</h2>
//             <img src="${product.attributes.imageUrl}" class="product-image" alt="${product.attributes.name}" onclick="openModal('${product.attributes.imageUrl}')">
//             <p>${product.attributes.description}</p>
//             <p>Quantity: ${product.attributes.quantity}</p>
//             <p>Category: ${product.attributes.category.data.attributes.name}</p>
//             <p>Purchase Cost: $${product.attributes.purchaseCost}</p>
//             <p>Sale Price: $${product.attributes.salePrice}</p>
//         `;
//         productList.appendChild(productItem);
//     });
// }

// // Function to open modal
// function openModal(imageUrl) {
//     const modal = document.getElementById('modal');
//     const modalImage = document.getElementById('modalImage');
//     modalImage.src = imageUrl;
//     modal.style.display = 'flex';
// }

// // Close modal on close button click
// document.getElementById('closeModal').onclick = function() {
//     document.getElementById('modal').style.display = 'none';
// };

// // Close modal when clicking outside of the image
// window.onclick = function(event) {
//     const modal = document.getElementById('modal');
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// };

// // Function to add a new product
// async function addProduct(event) {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('data', JSON.stringify({
//         name: document.getElementById('name').value,
//         description: document.getElementById('description').value,
//         quantity: document.getElementById('quantity').value,
//         category: document.getElementById('category').value,
//         purchaseCost: document.getElementById('purchaseCost').value,
//         salePrice: document.getElementById('salePrice').value,
//         vendor: {
//             name: document.getElementById('vendorName').value,
//             logo: document.getElementById('vendorLogo').files[0],
//             url: document.getElementById('vendorUrl').value,
//             phone: document.getElementById('vendorPhone').value,
//             email: document.getElementById('vendorEmail').value,
//             address: document.getElementById('vendorAddress').value,
//         }
//     }));

//     const imageFile = document.getElementById('image').files[0];
//     if (imageFile) {
//         formData.append('files.image', imageFile);
//     }

//     try {
//         await axios.post(`${apiUrl}/products`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
//         document.getElementById('successPopup').style.display = 'block';
//         setTimeout(() => {
//             document.getElementById('successPopup').style.display = 'none';
//         }, 3000);
//         fetchProducts(); // Refresh product list after adding
//     } catch (error) {
//         console.error('Error adding product:', error);
//     }
// }

// // Function to add a new category
// async function addCategory() {
//     const newCategoryName = document.getElementById('newCategory').value.trim();
//     if (newCategoryName) {
//         try {
//             await axios.post(`${apiUrl}/categories`, {
//                 data: {
//                     name: newCategoryName
//                 }
//             });
//             document.getElementById('newCategory').value = ''; // Clear input
//             alert('Category added successfully!');
//             fetchCategories(); // Refresh categories after adding
//         } catch (error) {
//             console.error('Error adding category:', error);
//         }
//     } else {
//         alert('Please enter a category name.');
//     }
// }

// // Fetch categories on page load
// fetchCategories();


const apiUrl = 'http://localhost:1337/api'; // Adjust this based on your Strapi setup

// Function to show/hide sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'productListSection') {
        fetchProducts(); // Fetch products when showing the product list section
    }
}

// Function to fetch categories from Strapi
async function fetchCategories() {
    try {
        const response = await axios.get(`${apiUrl}/categories`);
        const categories = response.data.data;
        const categorySelect = document.getElementById('category');

        // Clear existing options
        categorySelect.innerHTML = '<option value="">Select Category</option>';

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id; // Assuming the ID is used for the relation
            option.textContent = category.attributes.name; // Adjust based on your category structure
            categorySelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

// Function to fetch products from Strapi
async function fetchProducts() {
    try {
        const response = await axios.get(`${apiUrl}/products`);
        console.log('Products response:', response.data); // Log the entire response
        const products = response.data.data; // Adjust based on your API response structure
        if (!products) {
            console.error('No products found in the response.');
            return;
        }
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to display products
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear existing products

    if (!products || products.length === 0) {
        productList.innerHTML = '<p>No products available.</p>';
        return;
    }

    products.forEach(product => {
        if (!product.attributes) {
            console.error('Product attributes are missing:', product);
            return; // Skip this product if attributes are missing
        }

        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h2>${product.attributes.name}</h2>
            <img src="${product.attributes.imageUrl}" class="product-image" alt="${product.attributes.name}" onclick="openModal('${product.attributes.imageUrl}')">
            <p>${product.attributes.description}</p>
            <p>Quantity: ${product.attributes.quantity}</p>
            <p>Category: ${product.attributes.category?.data?.attributes?.name || 'N/A'}</p>
            <p>Purchase Cost: $${product.attributes.purchaseCost}</p>
            <p>Sale Price: $${product.attributes.salePrice}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Function to open modal
function openModal(imageUrl) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageUrl;
    modal.style.display = 'flex';
}

// Close modal on close button click
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

// Close modal when clicking outside of the image
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Function to add a new product
async function addProduct(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('data', JSON.stringify({
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        quantity: document.getElementById('quantity').value,
        category: document.getElementById('category').value,
        purchaseCost: document.getElementById('purchaseCost').value,
        salePrice: document.getElementById('salePrice').value,
        vendor: {
            name: document.getElementById('vendorName').value,
            logo: document.getElementById('vendorLogo').files[0],
            url: document.getElementById('vendorUrl').value,
            phone: document.getElementById('vendorPhone').value,
            email: document.getElementById('vendorEmail').value,
            address: document.getElementById('vendorAddress').value,
        }
    }));

    const imageFile = document.getElementById('image').files[0];
    if (imageFile) {
        formData.append('files.image', imageFile);
    }

    try {
        await axios.post(`${apiUrl}/products`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        document.getElementById('successPopup').style.display = 'block';
        setTimeout(() => {
            document.getElementById('successPopup').style.display = 'none';
        }, 3000);
        fetchProducts(); // Refresh product list after adding
    } catch (error) {
        console.error('Error adding product:', error);
    }
}

// Function to add a new category
async function addCategory() {
    const newCategoryName = document.getElementById('newCategory').value.trim();
    if (newCategoryName) {
        try {
            await axios.post(`${apiUrl}/categories`, {
                data: {
                    name: newCategoryName
                }
            });
            document.getElementById('newCategory').value = ''; // Clear input
            alert('Category added successfully!');
            fetchCategories(); // Refresh categories after adding
        } catch (error) {
            console.error('Error adding category:', error);
        }
    } else {
        alert('Please enter a category name.');
    }
}

// Fetch categories on page load
fetchCategories();
