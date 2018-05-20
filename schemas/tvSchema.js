const axios = require('axios');
const DataLoader = require('dataloader');
const config = require('../config/config');
const { VideoType, GenreType, ReviewType, SuggestedMovieType, CastType } = require('./movie/types');
const { SeasonType } = require('./tv/types');
const { 
    GraphQLInt,
    GraphQLFloat, 
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLList,
} = require('graphql');

const { posterUrl, imageSizes, baseUrl, apiKey } = config.tmdb;
const { medium, large, original } = imageSizes.posterSizes;

const getShowDetail = id => 
    axios.get(`${baseUrl}tv/${id}?api_key=${apiKey}`).catch(error => { throw error });

const getCredits = id => 
    axios.get(`${baseUrl}tv/${id}/credits?api_key=${apiKey}`).catch(error => { throw error });

const getReviews = id =>
    axios.get(`${baseUrl}tv/${id}/reviews?api_key=${apiKey}`)
    .then(response => response.data.results)
    .catch(error => console.error(error));

const showLoader = new DataLoader(keys => Promise.all(keys.map(getShowDetail)));
const creditsLoader = new DataLoader(keys => Promise.all(keys.map(getCredits)));
const reviewLoader = new DataLoader(keys => Promise.all(keys.map(getReviews)));

const ShowType = new GraphQLObjectType({
    name: 'Show',
    description: 'Show details',
    fields:() => ({
        backdropPath: {
            type: GraphQLString,
            resolve: show => `${posterUrl}${original}${show.backdrop_path}`,
        },
        cast: {
            type: GraphQLList(CastType),
            resolve: show => show.credits.cast,
        },
        runtime: {
            type: GraphQLInt,
            resolve: show => show.episode_run_time,
        },
        releaseDate: {
            type: GraphQLString,
            resolve: show => show.first_air_date,
        },
        genres: {
            type: new GraphQLList(GenreType),
        },
        homepage: {
            type: GraphQLString,
        },
        id: {
            type: GraphQLInt,
        },
        title: {
            type: GraphQLString,
            resolve: show => show.name,
        },
        numberOfEpisodes: {
            type: GraphQLInt,
            resolve: show => show.number_of_episodes,
        },
        numberOfSeasons: {
            type: GraphQLInt,
            resolve: show => show.number_of_seasons,
        },
        overview: {
            type: GraphQLString,
        },
        popularity: {
            type: GraphQLFloat,
        },
        posterPath: {
            type: GraphQLString,
            resolve: show => `${posterUrl}${large}${show.poster_path}`
        },
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve: show => reviewLoader.load(show.id),
        },
        seasons: {
            type: new GraphQLList(SeasonType),
        },
        voteAverage: {
            type: GraphQLFloat,
            resolve: show => show.vote_average,
        },
        voteCount: {
            type: GraphQLInt,
            resolve: show => show.vote_count,
        },
    }),
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'Fetch a show\'s information',
        fields: () => ({
            show: {
                type: ShowType,
                args: {
                    id: { type: GraphQLInt },
                },
                resolve: (root, args) => (
                    axios.all([
                        showLoader.load(args.id), 
                        creditsLoader.load(args.id),
                    ])
                    .then(axios.spread((info, credits) => ({
                            ...info.data,
                            credits: credits.data,
                        })
                    ))
                    .catch(error => console.error(error))
                )
            },
        })
    })
});