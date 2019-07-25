function newMessageSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.message({
        mutation_in: ['CREATED', 'UPDATED']
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