function message(parent, args, context){
    return context.prisma.answer({
        id: parent.id
    }).message();
}

module.exports = {
    message
}