function bypass() {
    let sanitized = document.getElementById('input').value
    sanitized = sanitized.replaceAll('a','а');
    sanitized = sanitized.replaceAll('o', 'о');
    sanitized = sanitized.replaceAll('e', 'е');
    sanitized = sanitized.replaceAll('h', 'н');
    sanitized = sanitized.replaceAll('A','А');
    sanitized = sanitized.replaceAll('O', 'О');
    sanitized = sanitized.replaceAll('E', 'Е');
    sanitized = sanitized.replaceAll('H', 'н');
    sanitized = sanitized.replaceAll('t', 'т');
    sanitized = sanitized.replaceAll('T', 'Т');
    sanitized = sanitized.replaceAll('c', 'с');
    sanitized = sanitized.replaceAll('C', 'С');
    sanitized = sanitized.replaceAll('x', 'х');
    sanitized = sanitized.replaceAll('X', 'Х');
    sanitized = sanitized.replaceAll('p', 'р');
    sanitized = sanitized.replaceAll('P', 'Р');

    document.getElementById('final').innerHTML = sanitized;
}
