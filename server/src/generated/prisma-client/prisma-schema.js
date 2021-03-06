module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAnswer {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type Answer {
  id: ID!
  createdAt: DateTime!
  text: String!
  message: Message!
  likes: Int!
  dislikes: Int!
}

type AnswerConnection {
  pageInfo: PageInfo!
  edges: [AnswerEdge]!
  aggregate: AggregateAnswer!
}

input AnswerCreateInput {
  id: ID
  text: String!
  message: MessageCreateOneWithoutAnswersInput!
  likes: Int!
  dislikes: Int!
}

input AnswerCreateManyWithoutMessageInput {
  create: [AnswerCreateWithoutMessageInput!]
  connect: [AnswerWhereUniqueInput!]
}

input AnswerCreateWithoutMessageInput {
  id: ID
  text: String!
  likes: Int!
  dislikes: Int!
}

type AnswerEdge {
  node: Answer!
  cursor: String!
}

enum AnswerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  likes_ASC
  likes_DESC
  dislikes_ASC
  dislikes_DESC
}

type AnswerPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
  likes: Int!
  dislikes: Int!
}

input AnswerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  likes: Int
  likes_not: Int
  likes_in: [Int!]
  likes_not_in: [Int!]
  likes_lt: Int
  likes_lte: Int
  likes_gt: Int
  likes_gte: Int
  dislikes: Int
  dislikes_not: Int
  dislikes_in: [Int!]
  dislikes_not_in: [Int!]
  dislikes_lt: Int
  dislikes_lte: Int
  dislikes_gt: Int
  dislikes_gte: Int
  AND: [AnswerScalarWhereInput!]
  OR: [AnswerScalarWhereInput!]
  NOT: [AnswerScalarWhereInput!]
}

type AnswerSubscriptionPayload {
  mutation: MutationType!
  node: Answer
  updatedFields: [String!]
  previousValues: AnswerPreviousValues
}

input AnswerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnswerWhereInput
  AND: [AnswerSubscriptionWhereInput!]
  OR: [AnswerSubscriptionWhereInput!]
  NOT: [AnswerSubscriptionWhereInput!]
}

input AnswerUpdateInput {
  text: String
  message: MessageUpdateOneRequiredWithoutAnswersInput
  likes: Int
  dislikes: Int
}

input AnswerUpdateManyDataInput {
  text: String
  likes: Int
  dislikes: Int
}

input AnswerUpdateManyMutationInput {
  text: String
  likes: Int
  dislikes: Int
}

input AnswerUpdateManyWithoutMessageInput {
  create: [AnswerCreateWithoutMessageInput!]
  delete: [AnswerWhereUniqueInput!]
  connect: [AnswerWhereUniqueInput!]
  set: [AnswerWhereUniqueInput!]
  disconnect: [AnswerWhereUniqueInput!]
  update: [AnswerUpdateWithWhereUniqueWithoutMessageInput!]
  upsert: [AnswerUpsertWithWhereUniqueWithoutMessageInput!]
  deleteMany: [AnswerScalarWhereInput!]
  updateMany: [AnswerUpdateManyWithWhereNestedInput!]
}

input AnswerUpdateManyWithWhereNestedInput {
  where: AnswerScalarWhereInput!
  data: AnswerUpdateManyDataInput!
}

input AnswerUpdateWithoutMessageDataInput {
  text: String
  likes: Int
  dislikes: Int
}

input AnswerUpdateWithWhereUniqueWithoutMessageInput {
  where: AnswerWhereUniqueInput!
  data: AnswerUpdateWithoutMessageDataInput!
}

input AnswerUpsertWithWhereUniqueWithoutMessageInput {
  where: AnswerWhereUniqueInput!
  update: AnswerUpdateWithoutMessageDataInput!
  create: AnswerCreateWithoutMessageInput!
}

input AnswerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  message: MessageWhereInput
  likes: Int
  likes_not: Int
  likes_in: [Int!]
  likes_not_in: [Int!]
  likes_lt: Int
  likes_lte: Int
  likes_gt: Int
  likes_gte: Int
  dislikes: Int
  dislikes_not: Int
  dislikes_in: [Int!]
  dislikes_not_in: [Int!]
  dislikes_lt: Int
  dislikes_lte: Int
  dislikes_gt: Int
  dislikes_gte: Int
  AND: [AnswerWhereInput!]
  OR: [AnswerWhereInput!]
  NOT: [AnswerWhereInput!]
}

input AnswerWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Message {
  id: ID!
  createdAt: DateTime!
  text: String!
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer!]
  likes: Int!
  dislikes: Int!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  text: String!
  answers: AnswerCreateManyWithoutMessageInput
  likes: Int!
  dislikes: Int!
}

input MessageCreateOneWithoutAnswersInput {
  create: MessageCreateWithoutAnswersInput
  connect: MessageWhereUniqueInput
}

input MessageCreateWithoutAnswersInput {
  id: ID
  text: String!
  likes: Int!
  dislikes: Int!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  likes_ASC
  likes_DESC
  dislikes_ASC
  dislikes_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
  likes: Int!
  dislikes: Int!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  text: String
  answers: AnswerUpdateManyWithoutMessageInput
  likes: Int
  dislikes: Int
}

input MessageUpdateManyMutationInput {
  text: String
  likes: Int
  dislikes: Int
}

input MessageUpdateOneRequiredWithoutAnswersInput {
  create: MessageCreateWithoutAnswersInput
  update: MessageUpdateWithoutAnswersDataInput
  upsert: MessageUpsertWithoutAnswersInput
  connect: MessageWhereUniqueInput
}

input MessageUpdateWithoutAnswersDataInput {
  text: String
  likes: Int
  dislikes: Int
}

input MessageUpsertWithoutAnswersInput {
  update: MessageUpdateWithoutAnswersDataInput!
  create: MessageCreateWithoutAnswersInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  answers_every: AnswerWhereInput
  answers_some: AnswerWhereInput
  answers_none: AnswerWhereInput
  likes: Int
  likes_not: Int
  likes_in: [Int!]
  likes_not_in: [Int!]
  likes_lt: Int
  likes_lte: Int
  likes_gt: Int
  likes_gte: Int
  dislikes: Int
  dislikes_not: Int
  dislikes_in: [Int!]
  dislikes_not_in: [Int!]
  dislikes_lt: Int
  dislikes_lte: Int
  dislikes_gt: Int
  dislikes_gte: Int
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createAnswer(data: AnswerCreateInput!): Answer!
  updateAnswer(data: AnswerUpdateInput!, where: AnswerWhereUniqueInput!): Answer
  updateManyAnswers(data: AnswerUpdateManyMutationInput!, where: AnswerWhereInput): BatchPayload!
  upsertAnswer(where: AnswerWhereUniqueInput!, create: AnswerCreateInput!, update: AnswerUpdateInput!): Answer!
  deleteAnswer(where: AnswerWhereUniqueInput!): Answer
  deleteManyAnswers(where: AnswerWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  answer(where: AnswerWhereUniqueInput!): Answer
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer]!
  answersConnection(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  node(id: ID!): Node
}

type Subscription {
  answer(where: AnswerSubscriptionWhereInput): AnswerSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
}
`
      }
    