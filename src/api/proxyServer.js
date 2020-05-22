import proxyServerInstance from './index';


export const weatherSearch = async (locationString) => {
    return await proxyServerInstance.get(`${locationString}`)
}