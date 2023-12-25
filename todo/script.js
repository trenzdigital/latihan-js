function tambah() {
    // ambil nilai dari text
    let tambahText = document.getElementById('new_text')
    
    // tambah list baru kedalam ul
    let newTodo = '<li class="list-group-item"> <span>' + tambahText.value + '</span> </li>'
    todo.insertAdjacentHTML('afterbegin', newTodo)
    // kosongkan fieldnya
    tambahText.value = ''
};

// https://www.youtube.com/watch?v=De-pksZy6a0