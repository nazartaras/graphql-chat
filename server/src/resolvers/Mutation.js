function postMessage(parent, args, context, info){
    return context.prisma.createMessage({
        text: args.text,
        likes: args.likes,
        dislikes: args.dislikes
    });
}

function updateMessage(parent, args, context, info){
    if(args.likes!==undefined){
    return context.prisma.updateMessage({
        data:{
        likes: args.likes
    },
    where:{
        id:args.id
    }});}
    else{
        return context.prisma.updateMessage({
            data:{
            dislikes: args.dislikes
        },
        where:{
            id:args.id
        }});   
    }
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
        message: {connect:{ id: args.messageId } },
        likes: args.likes,
        dislikes: args.dislikes
    });
}

function updateAnswer(parent, args, context, info){
    if(args.likes!==undefined){
    return context.prisma.updateAnswer({
        data:{
        likes: args.likes
    },
    where:{
        id:args.id
    }});}
    else{
        return context.prisma.updateAnswer({
            data:{
            dislikes: args.dislikes
        },
        where:{
            id:args.id
        }});   
    }
}

module.exports= {
    postMessage,
    postAnswer,
    updateMessage,
    updateAnswer
}