export const getGift = async(category)=>{
    const url= `https://api.giphy.com/v1/gifs/search?api_key=DresoUOQ5Ep2oIm6myXYWseMT3Ifc31E&q= ${encodeURI(category) } &limit=10`
    const respuesta = await fetch(url)
    const {data}= await respuesta.json()
    
    const img =data.map(img=>{
        return{
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
        }
    })

return img
}