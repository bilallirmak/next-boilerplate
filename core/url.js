const apiEndpoint = process.env.NEXT_PUBLIC_BASE_API;
// const apiEndpoint = "http://localhost:5100/v1";
// const apiEndpoint = "http://192.168.1.102:5100/v1";
// const apiEndpoint = "http://192.168.15.103:5100/v1";
const cdnEndpoint = process.env.NEXT_PUBLIC_BASE_CDN;

export { apiEndpoint, cdnEndpoint };
