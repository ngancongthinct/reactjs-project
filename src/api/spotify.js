export const authEndpoint ="https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/"
const clientId = "e102a62bc23f492e94f777ccfaa45eed"

export const getTokenFromUrl = () =>{
    return window.location.hash.substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{})
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token`;  
