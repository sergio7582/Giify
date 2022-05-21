const apiKey = 'BJRldolNcNl9ZuWEYEtAR2CcZZosf9p6'

export default function getGifs ({keyword = 'Cats'} = {}){
    const apiUrl = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${keyword}&limit=100&offset=0&rating=g&lang=en`
    return fetch(apiUrl)
      .then(res => res.json())
      .then(response => 
        {
        const{data} = response
            if(Array.isArray(data))
            {
                const gifs = data.map(image => 
                {
                    const {images, title ,id} = image
                    const { url } = images.downsized_medium
                    return {title, id, url}
                })                        
                return gifs
            }        
        }) 
}