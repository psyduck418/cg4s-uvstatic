self.__uv$config = {
    prefix: '/service/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
    
    // 👇 請把這裡換成有效的公開 Bare 伺服器網址
    bare: 'https://tomphttp.v6.rocks/', 
    // 或者試試看：'https://bare.benroaz.com/'
};
