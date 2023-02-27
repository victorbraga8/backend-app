

const url = 'https://refeitorio-api.vercel.app/listatodosospratos';



async function apiFetch(){
    const response = await fetch(url);
    const apiReturn = await response.json();
    if(!apiReturn){
        const response = await fetch(url);
        const apiReturn = await response.json();
        console.log(apiReturn);
    }    
    console.log(apiReturn);
}

apiFetch();