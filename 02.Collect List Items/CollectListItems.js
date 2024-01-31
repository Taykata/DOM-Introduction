function extractText() {
    const list = document.getElementById('items');
    const textarea = document.getElementById('result');

    const items = Array.from(list.children);

    let result = [];

    for (let item of items) {
        result.push(item.textContent);
    }

    textarea.value = result.join('\n');
}