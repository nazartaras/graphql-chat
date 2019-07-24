function newMessageSubscribe(parent, args, context, info) {
    console.log('hello')
    return context.prisma.$subscribe.message({
        mutation_in: ['CREATED']
    }).node();
}

const newMessage = {
    subscribe: newMessageSubscribe,
    resolve: payload => {
        return payload;
    }
};

module.exports = {
    newMessage
};