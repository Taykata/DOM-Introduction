function colorize() {
    const table = document.querySelectorAll('tr');
    
    for (let i = 1; i < table.length; i += 2) {
        table[i].style.backgroundColor = 'teal';
    }
}