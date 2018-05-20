const axios = require('axios');
const DataLoader = require('dataloader');
const config = require('../config/config');
const { VideoType, GenreType, ReviewType, SuggestedMovieType, CastType } = require('./movie/types');
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

const getMovieDetail = id => 
    axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}`).catch(error => { throw error });

const getCredits = id => 
    axios.get(`${baseUrl}movie/${id}/credits?api_key=${apiKey}`).catch(error => { throw error });

const getReviews = id =>
    axios.get(`${baseUrl}movie/${id}/reviews?api_key=${apiKey}`)
    .then(response => response.data.results)
    .catch(error => console.error(error));

const movieLoader = new DataLoader(keys => Promise.all(keys.map(getMovieDetail)));
const creditsLoader = new DataLoader(keys => Promise.all(keys.map(getCredits)));
const reviewLoader = new DataLoader(keys => Promise.all(keys.map(getReviews)));


const MovieType = new GraphQLObjectType({
    name: 'Movie',
    Description: 'Movie...',
    fields: () => ({
        adult: { 
            type: GraphQLBoolean,
        },
        backdropPath: {
            type: GraphQLString,
            resolve: movie => `${posterUrl}${original}${movie.backdrop_path}`,
        },
        budget: {
            type: GraphQLInt,
        },
        cast: {
            type: GraphQLList(CastType),
            resolve: movie => movie.credits.cast,
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
        imdbId: {
            type: GraphQLInt,
            resolve: movie => movie.imdb_id,
        },
        originalLanguage: {
            type: GraphQLString,
            resolve: movie => movie.original_language,
        },
        originalTitle: {
            type: GraphQLString,
            resolve: movie => movie.original_title,
        },
        overview: {
            type: GraphQLString,
        },
        popularity: {
            type: GraphQLFloat,
        },
        posterPath: {
            type: GraphQLString,
            resolve: movie => `${posterUrl}${large}${movie.poster_path}`
        },
        releaseDate: {
            type: GraphQLString,
            resolve: movie => movie.release_date,
        },
        revenue: {
            type: GraphQLInt,
        },
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve: movie => reviewLoader.load(movie.id),
        },
        runtime: {
            type: GraphQLInt,
        },
        status: {
            type: GraphQLString,
        },
        suggestedMovies: {
            type: new GraphQLList(SuggestedMovieType),
            resolve: movie =>
                axios.get(`${baseUrl}movie/${movie.id}/recommendations?api_key=${apiKey}`)
                    .then(response => response.data.results)
        },
        tagline: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString,
        },
        videos: {
            type: new GraphQLList(VideoType),
            resolve: movie =>
                axios.get(`${baseUrl}movie/${movie.id}/videos?api_key=${apiKey}`)
                    .then(response => response.data.results)
        },
        voteAverage: {
            type: GraphQLFloat,
            resolve: movie => movie.vote_average
        },
        voteCount: {
            type: GraphQLInt,
            resolve: movie => movie.vote_count
        }

    })
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'Query a movie',
        fields: () => ({
            movie: {
                type: MovieType,
                args: {
                    id: { type: GraphQLInt },
                },
                resolve: (root, args) => (
                    axios.all([
                        movieLoader.load(args.id), 
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
        }),
    })
})

