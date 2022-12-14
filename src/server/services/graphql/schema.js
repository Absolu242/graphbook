const typeDefinitions = `
    type Post {
        id: Int
        text: String
        user: User
    }

    type RootQuery{
        posts:[Post]
    }

    type User {
        avatar: String
        username: String
    }

    input PostInput {
        text: String!
    }

    input UserInput {
        username: String!
        avatar: String!
    }

    type RootMutation {
        addPost (
            post: PostInput!
            user: UserInput!
        ):Post
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`;

export default [typeDefinitions]