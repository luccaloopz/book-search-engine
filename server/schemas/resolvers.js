const { Book, User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            
            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;