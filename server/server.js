const httpserver =require('./app');

const PORT = 22;

httpserver.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));