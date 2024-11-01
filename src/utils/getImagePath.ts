const getImagePath = (fileName? : string , imageSize : 'original' | 'w500' = 'original') => {
    return fileName ? `https://image.tmdb.org/t/p/${imageSize}${fileName}` : null
}

export default getImagePath;

