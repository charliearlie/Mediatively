const { GraphQLObjectType , GraphQLString, GraphQLInt} = require('graphql');
const config = require('../../config/config');

const { posterUrl, imageSizes, baseUrl, apiKey } = config.tmdb;
const { medium, large, original } = imageSizes.posterSizes;

const SeasonType = new GraphQLObjectType({
    name: 'Season',
    description: 'A season information for a show',
    fields: () => ({
        airDate: {
            type: GraphQLString,
            resolve: show => show.air_date,
        },
        episodeCount: {
            type: GraphQLInt,
            resolve: show => show.episode_count,
        },
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString,
        },
        overview: {
            type: GraphQLString,
        },
        posterPath: {
            type: GraphQLString,
            resolve: show => `${posterUrl}${large}${show.poster_path}`,
        },
        seasonNumber: {
            type: GraphQLInt,
            resolve: show => show.season_number,
        },
    }),
})

module.exports = {
    SeasonType,
}