function extract(content) {
    const text = document.getElementById(content).textContent;
    const regexp = /\([\w\s]+\)/g;
    let arr = text.match(regexp);
    let result = [];

    for (let word of arr) {
        let newWord = '';
        for (let i = 1; i < word.length - 1; i++) {
            newWord += word[i];
        }
        result.push(newWord);
    }

    return result.join('; ');
}