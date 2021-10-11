function validate(object) {
    const methods = ["GET", "POST", "DELETE", "CONNECT"];
    const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const uriRegex = /(^[\w.]+$)/;
    const messageTest = /([<>\\&'"])/;

    if (!object.method || !methods.includes(object.method)){
        throw new Error('Invalid request header: Invalid Method')
    }

    if(!object.uri || object.uri=='' || !uriRegex.test(object.uri)){
        throw new Error('Invalid request header: Invalid URI')
    }

    if(!object.version || !versions.includes(object.version)){
        throw new Error('Invalid request header: Invalid Version')
    }

    if(object.message==undefined || messageTest.test(object.message)){
        throw new Error('Invalid request header: Invalid Message')
    }

    return object;
}

console.log(validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))