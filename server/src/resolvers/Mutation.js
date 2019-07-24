function postMessage(parent, args, context, info){
    return context.prisma.createMessage({
        text: args.text
    });
}

async function postAnswer(parent, args, context, info){
    const messageExists = await context.prisma.$exists.message({
        id: args.messageId
    });

    if(!messageExists){
        throw new Error(`Message with ID ${args.messageId} does not exists`);
    }

    return context.prisma.createAnswer({
        text: args.text,
        message: {connect:{ id: args.messageId } }
    });
}

module.exports= {
    postMessage,
    postAnswer
}