const dev = {
    apiUrl:"http://localhost:3000"
}
const prod = {
    apiUrl:"https://uf23z95xll.execute-api.ap-southeast-1.amazonaws.com/dev"
}; 
const config=process.env.REACT_APP_STAGE==='prod'? prod:dev;

export default {
    ...config
};
  