let data = [
    {
        name: 'Matero',
        age: '30'
    },

    {
        name: 'Matilda',
        age: '28'
    },

    {
        name: 'Mark',
        age: '38'
    },

    {
        name: 'Benjamin',
        age: '32'
    },

    {
        name: 'Oscar',
        age: '22'
    },

    {
        name: 'Morty',
        age: '14'
    },

];


const info = document.querySelector('#info')

let details = data.map( (item) => {
    return (
        '<div>' + item.name + ' ' + 'is '  + item.age + ' years old' 
        + '</div>'
    )
})


info.innerHTML = details.join('\n')