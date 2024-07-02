//Modulo "OS" e visualização do consumo de memoria
const os = require('os');
setInterval(() =>{
    const {arch, platform, totalmem, freemem} = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;

    stats = {
        OS: platform(),
        Arch: arch(),
        TotalRam: `${parseInt(tRam, 10)} MB`,
        FreeRam: `${parseInt(fRam)} MB`,
        UsageRam: `${usage.toFixed(2)} %`
    }
    
    console.clear();
    console.table(stats);
}, 1000);
module.exports = {
    getStats: () =>stats};
