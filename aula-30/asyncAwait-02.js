const getUser = id => {
    return fetch(`https://regress.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(err => console.log(err))
}

const showUserName = async (id) => {
    const user = await getUser(id)

    console.log(`O nome do usuário é: ${user.data.first_name}`)
}

showUserName(3);