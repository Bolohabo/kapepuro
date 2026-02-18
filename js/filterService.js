export function filterByDistrict(data, district) {
    if (!district) return data;
    return data.filter(item => item.district === district);
}

