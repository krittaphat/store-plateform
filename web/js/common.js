var url = 'http://127.0.0.1:10001'

const asyncCallXMLHttpRequest = (url, data) => {
    return new Promise((resolve, reject) => {
        let result;
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onload = (e) => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        result = JSON.parse(xhr.responseText);
                    } catch (error) {
                        console.log("onload error", error);
                        result = {
                            statusCode: `${xhr.status}`,
                            message: xhr.statusText,
                        };
                    }
                    resolve(result);
                } else {
                    resolve({ statusCode: `${xhr.status}`, message: xhr.statusText });
                }
            }
        };
        xhr.onerror = (e) => {
            console.log("onerror", e);
            resolve({ statusCode: "505", message: "Connect To Url Failed" });
        };
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader(
            "authorization",
            "Bearer " + sessionStorage.getItem("token")
        );
        xhr.send(JSON.stringify(data));
    });
};

const regexpNumber = (e) => {
    let regex = document.getElementById(e).value;
    return document.getElementById(e).value = regex.replace(/[^0-9]/g, '');
}