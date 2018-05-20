const axios = require('axios');
const { 
    GraphQLInt,
    GraphQLFloat, 
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLList,
} = require('graphql');
const config = require('../../config/config');
const { posterUrl, imageSizes, baseUrl, apiKey } = config.tmdb;
const { medium, large, original } = imageSizes.posterSizes;

const VideoType = new GraphQLObjectType({
    name: 'Video',
    description: 'A movie\'s videos',
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        key: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        type: {
            type: GraphQLString,
        },
    })
});

const ReviewType = new GraphQLObjectType({
    name: 'Review',
    Description: 'A movie\s reviews',
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        author: {
            type: GraphQLString,
        },
        content: {
            type: GraphQLString,
        },
        url: {
            type: GraphQLString,
        },
    })
});

const SuggestedMovieType = new GraphQLObjectType({
    name: 'SuggestedMovie',
    description: 'Suggested movies related to the viewed movie',
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        posterPath: {
            type: GraphQLString,
            resolve: movie => `${posterUrl}${medium}${movie.poster_path}`
        },
        releaseDate: {
            type: GraphQLString,
            resolve: movie => movie.release_date,
        },
        title: {
            type: GraphQLString,
        },
    })
});

const GenreType = new GraphQLObjectType({
    name: 'Genre',
    description: 'A movie\'s genres',
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString
        }
    })
});

const CastType = new GraphQLObjectType({
    name: 'MovieCast',
    description: 'The cast for a movie',
    fields: () => ({
        id: {
            type: GraphQLInt,
            resolve: castMember => castMember.cast_id, 
        },
        character: {
            type: GraphQLString,
        },
        gender: {
            type: GraphQLString,
            resolve: castMember => {
                if (castMember.gender === 0) return 'Unspecified';

                return castMember.gender === 1 ? 'Female' : 'Male';
            }
        },
        name: {
            type: GraphQLString,
        },
        order: {
            type: GraphQLInt,
        },
        profilePath: {
            type: GraphQLString,
            resolve: castMember => "https://image.tmdb.org/t/p/w185" + castMember.profile_path
        }
    })
});

module.exports = {
    VideoType,
    ReviewType,
    SuggestedMovieType,
    GenreType,
    CastType
};