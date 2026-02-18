import { fetchData } from './dataService.js';
import { filterByDistrict } from './filterService.js';
import { searchData } from './searchService.js';

const shopList = document.getElementById("shopList");
const searchInput = document.getElementById("searchInput");
const districtFilter = document.getElementById("districtFilter");

async function loadShops() {
    let data = await fetchData("coffeeShops.json");

    const keyword = searchInput ? searchInput.value : '';
    const district = districtFilter ? districtFilter.value : '';

    // Case-insensitive search and filter
    data = searchData(data, keyword);
    data = filterByDistrict(data, district);

    displayShops(data);
}

function displayShops(data) {
    shopList.innerHTML = "";

    if (!data || data.length === 0) {
        shopList.innerHTML = `<p style="text-align:center; margin-top:20px;">No coffee shops found.</p>`;
        return;
    }

    data.forEach(shop => {
        shopList.innerHTML += `
            <div class="card">
                ${shop.image ? `<img src="${shop.image}" alt="${shop.name}" class="card-image" loading="lazy">` : ''}
                <h3>${shop.name}</h3>
                <p><strong>District:</strong> ${shop.district}</p>
                <p><strong>Type:</strong> ${shop.type}</p>
                <p><strong>Specialty:</strong> ${shop.specialty}</p>
            </div>
        `;
    });
}

// Ensure inputs exist before attaching listeners
if (searchInput && districtFilter) {
    searchInput.addEventListener("input", loadShops);
    districtFilter.addEventListener("change", loadShops);

    // Initial load
    loadShops();
}
