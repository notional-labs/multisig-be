require('dotenv').config();

export const config = {
    'secret': 'nodeauthsecret',
    'database': `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_NAME}:${process.env.NEXT_PUBLIC_MONGO_PW}@cluster0.i6ddvbe.mongodb.net/multisigapp?retryWrites=true&w=majority`
};