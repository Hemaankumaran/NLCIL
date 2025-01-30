// Predefined list of text files
const files = {
    angle: "files/angle.txt",
    angular: "files/angular.txt",
    apple: "files/apple.txt",
    ball: "files/ball.txt",
    cat: "files/cat.txt",
    container: "files/container.txt",
    deepak: "files/deepak.txt",
    gopal: "files/gopal.txt",
    hello: "files/hello.txt",
    heman: "files/heman.txt",
    intern: "files/intern.txt",
    laptop: "files/laptop.txt",
    mill: "files/mill.txt",
    mouse: "files/mouse.txt",
    mysql: "files/mysql.txt",
    php: "files/php.txt",
    word: "files/word.txt",
    world: "files/world.txt"  
};

const search = document.getElementById('search');
const suggestions = document.getElementById('suggestions');

function display(filteredWords) {
    suggestions.innerHTML = '';

    if (filteredWords.length === 0) {
        suggestions.innerHTML = '<li>No matches found</li>';
        return;
    }

    filteredWords.forEach(word => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = files[word];
        link.textContent = word;
        link.target = '_blank';
        // console.dir(link);
        listItem.appendChild(link);
        suggestions.appendChild(listItem);
    });
}

search.addEventListener('input', () => {
    const query = search.value;
    if (query.trim() === '') {
        suggestions.innerHTML = '';
        return;
    }

    const filteredWords = Object.keys(files).filter(word => word.toLowerCase().includes(query.toLowerCase()));
    display(filteredWords);

});