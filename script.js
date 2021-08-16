// const axios = requare('axios')
//
// const getPeople = async (id) => {
//     let isLoading = true
//     try {
//         // throw new Error("moya oshibka")
//         const example = await axios(`https://swapi.dev/api/people/${id}`)
//         console.log(555)
//         console.log(example.data)
//     }catch (error){
//         console.log(777)
//     } finally {
//         isLoading = false
//         console.log(isLoading)
//     }
// }
// getPeople(4)

// const getStarWars = async (id) =>{
//     const people = await axios(`https://swapi.dev/api/people/${id}`)
//     console.log(people.data)
// }
// getStarWars(4)

// -------------------------------------------------------------------------

const axios = require('axios')

const getUserPosts = async (id) => {
    const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')
    const {data: posts} = await axios('https://jsonplaceholder.typicode.com/posts')
    const userPosts = users.map(user => {
        user.posts = posts.filter(post => {
            return post.userId === user.id
        })
        return user
    })
    console.log(userPosts)
}
getUserPosts()