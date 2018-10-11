let pages = [
    new Page('Events', '#'),
    new Page('Competition', '#'),
    new Page('Dinner Meetings', '#'),
    new Page('Articles', '#'),
    new Page('Executive Members', '#'),
    new Page('About Us', '#')]

let menu = new SimpleMenu(
    document.querySelector('#simplemenu'),
    'assets/logo-vectr.png',
    pages,
    'basic')