import Tweet from "../models/Tweet";

export default TweetController = {
    async index (req, res) {
        const tweets = await Tweet.find({}).sort("-createAt");
        return res.json(tweets);
    },

    async models (req, res) {
        const tweet = await Tweet.create(req.body);
        return res.json(tweet);
    }
}