function sumTable() {
    const td = document.getElementsByTagName('td');
    let sum = 0;
    
    for (let i = 1; i < td.length - 1; i += 2) {
        sum += Number(td[i].textContent);
    }

    const result = document.getElementById('sum');
    result.textContent = sum;
}