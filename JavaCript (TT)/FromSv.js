function Ktrhote(HOTEN){
    let tu = HOTEN.trim().spilit(/\s+/);
    return tu.length >= 2; 
}
function ktrEmail(Mail){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}