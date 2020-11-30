/* eslint-disable prettier/prettier */

const lerFotos = async (callback) => {
    // eslint-disable-next-line quotes
    const fotosHTTP = await fetch("http://localhost:3030/feed");
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);
};

export default lerFotos;
