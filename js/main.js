import { fetchData } from './dataService.js';
import { filterByDistrict } from './filterService.js';
import { searchData } from './searchService.js';

const shopList = document.getElementById("shopList");
const searchInput = document.getElementById("searchInput");
const districtFilter = document.getElementById("districtFilter");

async function loadShops() {
    let data = await fetchData("coffeeShops.json");

    const keyword = searchInput.value;
    const district = districtFilter.value;

    data = searchData(data, keyword);
    data = filterByDistrict(data, district);

    displayShops(data);
}

function displayShops(data) {
    shopList.innerHTML = "";
    data.forEach(shop => {
        shopList.innerHTML += `
            <div class="card">
                <h3>${shop.name}</h3>
                <p>District: ${shop.district}</p>
                <p>Type: ${shop.type}</p>
                <p>Specialty: ${shop.specialty}</p>
            </div>
        `;
    });
}

if (searchInput) {
    searchInput.addEventListener("input", loadShops);
    districtFilter.addEventListener("change", loadShops);
    loadShops();
}
