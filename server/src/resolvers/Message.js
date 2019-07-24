function answers(parent, args, context){
    return context.prisma.message({
        id: parent.id
    }).answers();
}

module.exports = {
    answers
}