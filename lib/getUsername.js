let method;
let method2;

if (Client.mcVersion().includes("fabric")) {
    method = 'method_1548';
    method2 = 'method_1676';
} else {   
    method = 'm_91094_';
    method2 = 'm_92546_';
}

module.exports = () => {
    return Client.getMinecraft()[method]()[method2]()
}
