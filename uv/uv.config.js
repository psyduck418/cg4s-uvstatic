self.__uv$config = {
    prefix: '/service/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
    
    // 直接換成這個穩定公開的 Bare 伺服器網址
    bare: 'https://bare.benroaz.com/',
};
