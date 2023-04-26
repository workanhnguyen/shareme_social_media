export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'username',
            title: 'Username',
            type: 'string',
        },
        {
            name: 'imgUrl',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ]
}