const header = document.getElementById('header')
const title = document.getElementById('title')
const profileImg = document.getElementById('profile_img')
const excerpt = document.getElementById('excerpt')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" alt="computer">'

    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, omnis!'
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    names.innerHTML = 'John Diggle'
    date.innerHTML = 'Jan 9, 2021'

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
    animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-texts'))
};
